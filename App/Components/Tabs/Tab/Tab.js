import React, { cloneElement } from 'react'
import { View, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import { isNumber as _isNumber } from 'lodash'

import styles from './Tab.Styles'

function Tab({ style, children, activeTab, index, defaultIndex, length }) {
  const _index = _isNumber(index) ? index : defaultIndex
  const _children = cloneElement(children, {
    isActiveTab: activeTab === _index
  })

  return (
    <View
      style={[
        styles.container,
        style,
        activeTab !== _index ? styles.hide(length) : null
      ]}
    >
      {_children}
    </View>
  )
}

Tab.propTypes = {
  style: ViewPropTypes.style,
  index: PropTypes.number.isRequired,
  defaultIndex: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  activeTab: PropTypes.number,
  length: PropTypes.number
}
Tab.defaultProps = {
  children: () => null
}

export default Tab
