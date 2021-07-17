import {
  isFunction as _isFunction,
  get as _get,
  isNil as _isNil,
  startsWith as _startsWith
} from 'lodash'

import { InvalidParameterException } from './Exceptions'

function constructUtilities(utilities = {}) {
  const _utilities = Object.assign(
    {},
    {
      onStart: () => {},
      onSuccess: () => {},
      onError: undefined,
      responseMapper: (response) => _get(response, 'data', response),
      errorMapper: (error) => _get(error, 'response', error)
    },
    utilities
  )

  return _utilities
}

function validateUtilities(utilities = {}) {
  const { errorMapper, onError, onStart, onSuccess, responseMapper } = utilities

  if (
    !_isFunction(errorMapper) ||
    (!_isNil(onError) && !_isFunction(onError)) ||
    !_isFunction(onStart) ||
    !_isFunction(onSuccess) ||
    !_isFunction(responseMapper)
  ) {
    throw new InvalidParameterException(
      'Provided utilities parameter contains invalid value',
      'onStart, onSuccess, onError, responseMapper, errorMapper',
      'undefined || function'
    )
  }

  return true
}

function retrieveUtilities(utilities = {}) {
  const _utilities = constructUtilities(utilities)
  validateUtilities(_utilities)

  return _utilities
}

function getServerName(url) {
  const endPosition = _startsWith(url, 'http') ? 3 : 1
  const serverName = (url || '').split('/').slice(0, endPosition).join('/')

  return serverName
}

export {
  validateUtilities,
  constructUtilities,
  retrieveUtilities,
  getServerName
}
