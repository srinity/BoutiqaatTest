import { StyleSheet, Dimensions } from 'react-native'

import { Fonts } from '../../Theme'

const { width } = Dimensions.get('window')

const cardWidth = width / 3.2
const cardHeight = cardWidth * 1.5

export default StyleSheet.create({
  containerStyle: {
    width: cardWidth,
    height: cardHeight,
    marginBottom: 10,
    marginRight: 10
  },
  textStyle: {
    fontSize: Fonts.h4,
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 7
  },
  imageStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: '#000'
  }
})
