import { StyleSheet, Dimensions, Platform } from 'react-native'

import { Colors, Fonts } from '../../Theme'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  containerStyle: {
    width,
    height: 500,
    marginTop: 15,
    backgroundColor: Colors.whiteColor
  },
  viewStyle: {
    flex: 1,
    zIndex: 4
  },
  infoContainerStyle: {
    marginTop: -50,
    marginBottom: 10,
    backgroundColor: Colors.whiteColor,
    zIndex: 100,
    marginHorizontal: 25,
    paddingVertical: 60,
    height: 200,
    ...Platform.select({
      android: {
        elevation: 3
      },
      ios: {
        shadowColor: Colors.getBlackColor(0.1),
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: -1 }
      }
    })
  },
  labelTextStyle: {
    fontSize: Fonts.h1,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonStyle: {
    marginTop: 50,
    marginLeft: 25,
    width: 150,
    minHeight: 35,
    paddingVertical: 5,
    backgroundColor: Colors.blackColor,
    alignSelf: 'flex-end'
  },
  buttonTextStyle: {
    fontSize: Fonts.h6
  },
  imageStyle: {
    flex: 2,
    width: undefined,
    height: undefined,
    backgroundColor: '#000'
  }
})
