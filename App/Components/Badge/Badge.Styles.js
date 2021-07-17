import { StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../Theme'

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: Colors.brandColor,
    width: 20,
    height: 20,
    borderRadius: 12.5,
    position: 'absolute',
    right: -5,
    top: -5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: Colors.whiteColor,
    fontSize: Fonts.h7
  },
  mediumValueTextStyle: {
    fontSize: Fonts.h8
  },
  largeValueTextStyle: {
    fontSize: Fonts.h9
  }
})
