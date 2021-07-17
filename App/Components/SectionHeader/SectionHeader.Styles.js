import { StyleSheet, Dimensions } from 'react-native'

import { Colors, Fonts } from '../../Theme'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  containerStyle: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width
  },
  titleStyle: {
    fontSize: Fonts.h3,
    fontWeight: 'bold'
  },
  actionContainerStyle: {
    flex: 1,
    borderBottomColor: Colors.getBlackColor(0.6),
    borderBottomWidth: 0.5,
    alignItems: 'flex-end'
  },
  actionStyle: {
    fontSize: Fonts.h3,
    color: Colors.brandColor,
    marginBottom: 5
  }
})
