import React from 'react'
import { View, ImageBackground, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import Button from '../Button/Button'

import { Colors } from '../../Theme'

import styles from './Banner.Styles'

function Banner({
  label,
  imageUrl,
  imageContainerStyle,
  containerStyle,
  onPress,
  ...props
}) {
  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={[styles.containerStyle, imageContainerStyle]}
    >
      <View style={[styles.viewStyle, containerStyle]}>
        <Button
          title="SHOP NOW"
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          rightIcon
          rightIconName="arrow-right-drop-circle"
          rightIconType="materialCommunity"
          rightIconColor={Colors.blackColor}
          rightIconSize={15}
          onPress={onPress}
        />
      </View>
    </ImageBackground>
  )
}

Banner.propTypes = {
  label: PropTypes.string,
  imageUrl: PropTypes.string,
  imageContainerStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  onPress: PropTypes.func
}

export default Banner
