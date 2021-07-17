import React from 'react'
import { SafeAreaView, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import Header from '../Header'

import styles from './Screen.Styles'

function Screen({ containerStyle, children, ...props }) {
  return (
    <SafeAreaView style={[styles.containerStyle, containerStyle]}>
      <Header {...props} />
      {children}
    </SafeAreaView>
  )
}

Screen.propTypes = {
  ...Header.propTypes,
  containerStyle: ViewPropTypes.style,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default Screen
