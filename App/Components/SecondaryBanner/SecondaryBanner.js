import React from 'react'
import { View, Image, Text, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import Button from '../Button/Button'

import styles from './SecondaryBanner.Styles'

function SecondaryBanner({
  label,
  imageUrl,
  imageStyle,
  containerStyle,
  onPress,
  ...props
}) {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Image
        source={{ uri: imageUrl }}
        style={[styles.imageStyle, imageStyle]}
      />

      <View style={[styles.viewStyle, containerStyle]}>
        <View style={styles.infoContainerStyle}>
          <Text style={styles.labelTextStyle}>{label}</Text>
          <Button
            title="SHOP NOW"
            style={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  )
}

SecondaryBanner.propTypes = {
  label: PropTypes.string,
  imageUrl: PropTypes.string,
  imageStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  onPress: PropTypes.func
}

export default SecondaryBanner
