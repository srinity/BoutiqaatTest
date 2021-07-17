import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'

import { Images } from '../../Theme'

import { Icon } from '../Icon'

import styles from './Header.Styles'

function Header({
  withLogo,
  title,
  withSearch,
  renderRight,
  onSearchPress,
  onMenuPress,
  ...props
}) {
  return (
    <View style={styles.containerStyle}>
      <TouchableWithoutFeedback onPress={onMenuPress}>
        <Icon
          type="entypo"
          name="menu"
          size={30}
          style={styles.menuIconStyle}
        />
      </TouchableWithoutFeedback>
      {withLogo ? (
        <Image
          source={Images.logo}
          style={styles.logoStyle}
          resizeMode="contain"
          {...props}
        />
      ) : (
        <Text style={styles.titleStyle} {...props}>
          {title}
        </Text>
      )}
      <View style={styles.rightSectionContainerStyle}>
        {renderRight ? renderRight() : null}
        {withSearch ? (
          <TouchableWithoutFeedback onPress={onSearchPress}>
            <Icon type="ant" name="search1" style={styles.searchIconStyle} />
          </TouchableWithoutFeedback>
        ) : null}
      </View>
    </View>
  )
}

Header.defaultProps = {
  withSearch: true
}

Header.propTypes = {
  withLogo: PropTypes.bool,
  title: PropTypes.string,
  withSearch: PropTypes.bool,
  renderRight: PropTypes.func,
  onSearchPress: PropTypes.func,
  onMenuPress: PropTypes.func
}

export default Header
