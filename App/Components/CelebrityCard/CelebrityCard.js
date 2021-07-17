import React from 'react'
import {
  View,
  Image,
  Text,
  ViewPropTypes,
  TouchableWithoutFeedback
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './CelebrityCard.Styles'

function CelebrityCard({
  label,
  imageUrl,
  imageStyle,
  textStyle,
  containerStyle,
  onPress,
  ...props
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.containerStyle, containerStyle]}>
        <Image
          source={{ uri: imageUrl }}
          style={[styles.imageStyle, imageStyle]}
        />
        <Text numberOfLines={1} style={[styles.textStyle, textStyle]}>
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

CelebrityCard.propTypes = {
  label: PropTypes.string,
  imageUrl: PropTypes.string,
  imageStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  onPress: PropTypes.func
}

export default CelebrityCard
