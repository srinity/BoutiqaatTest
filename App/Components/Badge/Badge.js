import React from 'react'
import { View, Text, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import styles from './Badge.Styles'

function Badge({ value, style, textStyle, ...props }) {
  return (
    <View style={[styles.containerStyle, style]}>
      <Text
        style={[
          styles.textStyle,
          value > 99
            ? styles.largeValueTextStyle
            : value > 9
            ? styles.mediumValueTextStyle
            : undefined,
          textStyle
        ]}
        {...props}
      >
        {value > 99 ? '99+' : value}
      </Text>
    </View>
  )
}

Badge.propTypes = {
  value: PropTypes.number,
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style
}

export default Badge
