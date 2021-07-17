import { StyleSheet, Dimensions, Platform } from 'react-native'

import { Colors, Fonts } from '../../Theme'

const { width } = Dimensions.get('window')

const cardWidth = width / 2.15
const cardHeight = 360

export default StyleSheet.create({
  containerStyle: {
    width: cardWidth,
    height: cardHeight,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: Colors.notAvailableColor,
    ...Platform.select({
      android: {
        elevation: 3
      },
      ios: {
        shadowColor: Colors.getBlackColor(0.1),
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 }
      }
    })
  },
  infoContainerStyle: {
    flex: 1
  },
  productContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 5
  },
  brandTextStyle: {
    fontSize: Fonts.h4,
    fontWeight: 'bold',
    marginTop: 7,
    marginHorizontal: 7
  },
  labelTextStyle: {
    fontSize: Fonts.h4,
    marginTop: 7,
    marginHorizontal: 7
  },
  priceTestStyle: {
    fontSize: Fonts.h4,
    fontWeight: 'bold',
    marginTop: 30,
    marginHorizontal: 7
  },
  imageStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: '#000',
    marginBottom: 7,
    borderTopLeftRadius: 12.5,
    borderTopRightRadius: 12.5
  },
  buttonsContainerStyle: {
    flexDirection: 'row',
    height: 50
  },
  buyButtonStyle: {
    flex: 1,
    minWidth: undefined,
    marginHorizontal: 0,
    borderBottomLeftRadius: 12.5,
    backgroundColor: Colors.blackColor
  },
  wishListButtonStyle: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: Colors.notAvailableColor
  }
})
