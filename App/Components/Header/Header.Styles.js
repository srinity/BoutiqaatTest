import { StyleSheet, Platform } from 'react-native'

import { Colors, Fonts } from '../../Theme'

export default StyleSheet.create({
  containerStyle: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.backgroundColor,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.getBlackColor(0.6),
    borderBottomWidth: 0.5,
    ...Platform.select({
      android: {
        elevation: 3
      },
      ios: {
        shadowColor: Colors.getBlackColor(0.1),
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 5 }
      }
    })
  },
  titleStyle: {
    fontSize: Fonts.h2,
    fontWeight: 'bold'
  },
  logoStyle: {
    height: 50,
    width: 130
  },
  menuIconStyle: {
    position: 'absolute',
    left: 15,
    padding: 7
  },
  rightSectionContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    right: 15
  },
  searchIconStyle: {
    padding: 7
  }
})
