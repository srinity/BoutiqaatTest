import React from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Text,
  ViewPropTypes
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './SectionHeader.Styles'

function SectionHeader({ title, onPress, containerStyle, ...props }) {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Text style={styles.titleStyle}>{title}</Text>
      <View style={styles.actionContainerStyle}>
        <TouchableWithoutFeedback onPress={onPress} {...props}>
          <Text style={styles.actionStyle}>View All</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: ViewPropTypes.style
}

export default SectionHeader
