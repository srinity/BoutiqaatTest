import Network from '../Network/Network'

const API_URLS = Object.freeze({
  baseURL: 'http://test.com/',
  home: 'api/homeAPIEndPoint',
  refreshToken: 'api/auth/refreshTokenEndPoint'
})

const API_HEADERS = Object.freeze({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  appversionheader: '1.0'
})

function onInternetConnectionFail() {
  // show a toast or something
}

const NetworkInstance = new Network({
  baseURL: API_URLS.baseURL,
  commonHeaders: API_HEADERS,
  onInternetConnectionFail: onInternetConnectionFail
})

// Uncomment and add utils params when refresh flow is known.
// NetworkInstance.registerRefreshTokenInterceptor(
//   undefined,
//   `${API_URLS.baseURL}${API_URLS.refreshToken}`
// )

export { NetworkInstance, API_URLS }
