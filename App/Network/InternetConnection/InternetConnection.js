import NetInfo from '@react-native-community/netinfo'

class InternetConnection {
  static isConnected

  static async checkConnection() {
    if (InternetConnection.isConnected === undefined) {
      const networkState = await NetInfo.fetch()
      InternetConnection.isConnected = networkState.isConnected
      NetInfo.addEventListener(this._internetEventListener)
    }

    return InternetConnection.isConnected
  }

  static _internetEventListener(networkState) {
    InternetConnection.isConnected = networkState.isConnected
  }
}

export default InternetConnection
