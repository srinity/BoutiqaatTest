import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    flex: 1
  },
  hide: (length) => ({
    height: '100%',
    left: -width * length,
    position: 'absolute',
    width: '100%'
  })
})
