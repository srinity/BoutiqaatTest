import { StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../Theme'

export default StyleSheet.create({
  buttonStyle: {
    minHeight: 50,
    minWidth: 80,
    backgroundColor: Colors.brandColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 10
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: Colors.whiteColor,
    fontWeight: 'bold',
    fontSize: Fonts.h4,
    textAlign: 'center',
    marginHorizontal: 5
  },
  disabledStyle: {
    backgroundColor: Colors.getBrandColor(0.5)
  }
})
