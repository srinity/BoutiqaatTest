import Axios from 'axios'
import { get as _get, isFunction as _isFunction } from 'lodash'

import { getServerPassword, setServerPassword } from './KeyChain/KeyChain'

import InternetConnection from './InternetConnection/InternetConnection'

import { retrieveUtilities, getServerName } from './Utils/Utilities'

const TOKEN_EXPIRED_STATUS_CODE = 403

class Network {
  constructor({
    baseURL,
    commonHeaders,
    timeout = 5000,
    onInternetConnectionFail,
    ...config
  }) {
    this.axiosInstance = Axios.create({
      baseURL,
      headers: commonHeaders,
      timeout,
      ...config
    })

    this.token = undefined

    InternetConnection.checkConnection()

    this.onInternetConnectionFail = onInternetConnectionFail

    const serverName = getServerName(baseURL)
    getServerPassword(serverName).then((result) => {
      const {
        password: { token }
      } = result

      this.token = token
    })
  }

  registerRefreshTokenInterceptor = (
    tokenExpiredStatusCode = TOKEN_EXPIRED_STATUS_CODE,
    refreshTokenURL,
    utils = {
      onRefreshTokenStart: () => {},
      onRefreshTokenSuccess: () => {},
      onRefreshTokenFailed: () => {},
      responseMapper: (response) => _get(response, 'data', response),
      errorMapper: (error) => _get(error, 'response', error)
    }
  ) => {
    // add an interceptor to the app axios
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        // if the api fails with code 403(token epired)
        const errorResponseStatus = _get(error, 'response.status')

        // if the failure is not due to token then propogate the failure
        if (errorResponseStatus !== tokenExpiredStatusCode) {
          return Promise.reject(error)
        }

        // need to call refresh token, get the currently used token
        const requestToken = _get(
          error,
          'response.config.headers.Authorization'
        )

        // refresh the token with the token used for request
        if (requestToken) {
          utils.onRefreshTokenStart()

          Axios.post(refreshTokenURL, undefined, {
            headers: {
              Authorization: requestToken
            }
          })
            .then((response) => {
              const _response = utils.responseMapper(response)
              const { token } = _response

              // notify that the token was refreshed
              utils.onRefreshTokenSuccess(_response)

              // retry the request that failed
              error.response.config.headers.Authorization = `bearer ${token}`

              return this.axiosInstance(error.response.config)
            })
            .catch((err) => {
              // notify that the token refresh failed
              const _error = utils.errorMapper(err)
              utils.onRefreshTokenFailed(_error)

              return Promise.reject(error)
            })
        } else {
          return Promise.reject(error)
        }
      }
    )
  }

  authorize = async (config, utils) => {
    if (!InternetConnection.isConnected) {
      this.onInternetConnectionFail()
      return
    }

    const { errorMapper, onError, onStart, onSuccess, responseMapper } =
      retrieveUtilities(utils)

    try {
      onStart()

      const response = await this.axiosInstance(config)

      const _response = responseMapper(response)

      this.token = _response.token

      const serverName = getServerName(config.url)

      setServerPassword(
        serverName,
        `${serverName}-userCredentials`,
        _response
      ).catch((error) => console.log('Failed to save token', error))

      onSuccess(_response)
      return _response
    } catch (error) {
      const _error = errorMapper(error)

      if (_isFunction(onError)) {
        onError(_error)
      } else {
        throw _error
      }
    }
  }

  request = async (config, utils, withAuth = true) => {
    if (!InternetConnection.isConnected) {
      this.onInternetConnectionFail()
      return
    }

    const { errorMapper, onError, onStart, onSuccess, responseMapper } =
      retrieveUtilities(utils)

    try {
      onStart()
      const response = await this.axiosInstance({
        ...config,
        headers: {
          ...(withAuth ? { Authorization: `bearer ${this.token}` } : {}),
          ...config.headers
        }
      })

      const _response = responseMapper(response)

      onSuccess(_response)
      return _response
    } catch (error) {
      const _error = errorMapper(error)

      if (_isFunction(onError)) {
        onError(_error)
      } else {
        throw _error
      }
    }
  }
}

export default Network
