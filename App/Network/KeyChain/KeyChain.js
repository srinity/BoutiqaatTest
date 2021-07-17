import {
  getGenericPassword,
  getInternetCredentials,
  hasInternetCredentials,
  setGenericPassword,
  setInternetCredentials,
  resetGenericPassword,
  resetInternetCredentials
} from 'react-native-keychain'

export function setPassword(username, password, options = {}) {
  return setGenericPassword(username, JSON.stringify(password), options)
}

export async function getPassword(options = {}) {
  let data = null

  try {
    data = await getGenericPassword(options)
    data = data ? { ...data, password: JSON.parse(data.password) } : null

    return data
  } catch (error) {
    if (error instanceof SyntaxError) {
      return data
    }

    throw error
  }
}

export function resetPassword(options = {}) {
  return resetGenericPassword(options)
}

export function setServerPassword(server, username, password, options = {}) {
  return setInternetCredentials(
    server,
    username,
    JSON.stringify(password),
    options
  )
}

export function hasServerPassword(server, options = {}) {
  return hasInternetCredentials(server, options)
}

export async function getServerPassword(server, options = {}) {
  let data = null

  try {
    data = await getInternetCredentials(server, options)
    data = data
      ? { server, ...data, password: JSON.parse(data.password) }
      : null

    return data
  } catch (error) {
    if (error instanceof SyntaxError) {
      return data
    }

    throw error
  }
}

export function resetServerPassword(server) {
  return resetInternetCredentials(server)
}
