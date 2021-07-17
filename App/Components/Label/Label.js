import React from 'react'
import { TouchableOpacity, Text, ViewPropTypes } from 'react-native'

import PropTypes from 'prop-types'

import styles from './Label.Styles'

const Label = ({ title, onPress, style, textStyle, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.containerStyle, style]}
      {...props}
    >
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

Label.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  textStyle: Text.propTypes.style,
  style: ViewPropTypes.style
}

export default Label
