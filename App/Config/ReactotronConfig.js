import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import AsyncStorage from '@react-native-community/async-storage'

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({ name: 'BoutiqaatTest' })
  .use(reactotronRedux())
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/
    },
    editor: false, // there are more options to editor
    errors: { veto: (stackFrame) => false }, // or turn it off with false
    overlay: false // just turning off overlay
  })
  .connect()

// Let's clear Reactotron on every time we load the app
Reactotron.clear()

// Totally hacky, but this allows you to not both importing reactotron-react-native
// on every file.  This is just DEV mode, so no big deal.
console.tron = Reactotron

export default reactotron
