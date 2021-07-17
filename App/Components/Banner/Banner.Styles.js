import { StyleSheet, Dimensions } from 'react-native'

import { Colors, Fonts } from '../../Theme'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  containerStyle: {
    width,
    height: 300
  },
  viewStyle: {
    flex: 1,
    backgroundColor: Colors.getBlackColor(0.1),
    zIndex: 4,
    justifyContent: 'flex-end'
  },
  buttonStyle: {
    marginBottom: 50,
    marginLeft: 25,
    width: 120,
    minHeight: 35,
    paddingVertical: 5,
    borderRadius: 0,
    backgroundColor: Colors.whiteColor
  },
  buttonTextStyle: {
    color: Colors.blackColor,
    fontSize: Fonts.h6
  }
})
