import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

jest.mock('@react-native-community/async-storage', () => {
  return {
    setItem: () => {},
    getItem: () => {},
    removeItem: () => {}
  }
})

jest.mock('@react-native-community/netinfo', () => {
  return {
    fetch: async () => ({ isConnected: true }),
    addEventListener: () => {}
  }
})

jest.mock('react-native-keychain', () => ({
  internetCredentials: {},
  password: undefined,
  username: undefined,
  getGenericPassword: async function () {
    return this.password
      ? { username: this.username, password: this.password }
      : false
  },
  getInternetCredentials: async function (serverName) {
    return this.internetCredentials[serverName] || false
  },
  hasInternetCredentials: async function (serverName) {
    return !!this.internetCredentials[serverName]
  },
  setGenericPassword: async function (username, password) {
    this.username = username
    this.password = password
    return true
  },
  setInternetCredentials: async function (serverName, username, password) {
    this.internetCredentials[serverName] = { username, password }

    return true
  },
  resetGenericPassword: async function () {
    this.username = undefined
    this.password = undefined
    return true
  },
  resetInternetCredentials: async function (serverName) {
    this.internetCredentials[serverName] = undefined

    return true
  }
}))
