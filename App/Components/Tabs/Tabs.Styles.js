import { StyleSheet, Platform } from 'react-native'

import { Colors, Fonts } from '../../Theme'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    borderBottomColor: Colors.getBlackColor(0.3),
    borderBottomWidth: 1,
    height: 48
  },
  label: (scrollable) => ({
    color: Colors.getBlackColor(0.3),
    fontSize: Fonts.h4,
    paddingVertical: 14,
    paddingHorizontal: scrollable ? (Platform.OS === 'android' ? 20 : 18) : 0
  }),
  mainView: {
    flexDirection: 'row'
  },
  tabLine: {
    backgroundColor: 'transparent',
    opacity: 0,
    borderTopEndRadius: 1,
    bottom: 0,
    height: 3,
    position: 'absolute'
  },
  activeTabLine: {
    backgroundColor: Colors.blackColor,
    borderTopEndRadius: 1,
    bottom: 0,
    height: 3,
    position: 'absolute'
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
