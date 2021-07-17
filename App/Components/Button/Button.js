import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ViewPropTypes,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import memoize from 'memoize-one'

import { colorPropType } from '../../Utils/PropTypesValidators'

import { Icon, iconTypesValues } from '../Icon'

import styles from './Button.Styles'

function getContainerStyle(
  defaultStyles,
  customStyles,
  disabledOrLoading,
  defaultDisabledStyle,
  customDisabledStyle
) {
  const stylesArr = [defaultStyles, customStyles]

  if (disabledOrLoading) {
    stylesArr.push(defaultDisabledStyle)
    stylesArr.push(customDisabledStyle)
  }

  return StyleSheet.flatten(stylesArr)
}

const getContainerStyleMemoized = memoize(getContainerStyle)

const Button = ({
  title,
  onPress,
  disabled,
  isLoading,
  style,
  disabledStyle,
  textStyle,
  indicatorColor,
  indicatorSize,
  leftIcon,
  leftIconType,
  leftIconName,
  leftIconColor,
  leftIconSize,
  rightIcon,
  rightIconType,
  rightIconName,
  rightIconColor,
  rightIconSize,
  ...props
}) => {
  const containerStyle = getContainerStyleMemoized(
    styles.buttonStyle,
    style,
    disabled || isLoading,
    styles.disabledStyle,
    disabledStyle
  )

  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      disabled={disabled || isLoading}
      style={containerStyle}
    >
      {isLoading ? (
        <ActivityIndicator size={indicatorSize} color={indicatorColor} />
      ) : (
        <View style={styles.containerStyle}>
          {leftIcon ? (
            <Icon
              type={leftIconType}
              name={leftIconName}
              color={leftIconColor}
              size={leftIconSize}
            />
          ) : null}
          <Text style={[styles.textStyle, textStyle]}>{title}</Text>
          {rightIcon ? (
            <Icon
              type={rightIconType}
              name={rightIconName}
              color={rightIconColor}
              size={rightIconSize}
            />
          ) : null}
        </View>
      )}
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  style: {},
  textStyle: {},
  indicatorColor: '#ffffff',
  indicatorSize: 'small',
  leftIcon: false,
  leftIconType: 'material',
  leftIconColor: '#ffffff',
  leftIconSize: 25,
  rightIcon: false,
  rightIconType: 'material',
  rightIconColor: '#ffffff',
  rightIconSize: 25
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  style: ViewPropTypes.style,
  disabledStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  indicatorSize: PropTypes.oneOf(['small', 'large']),
  indicatorColor: colorPropType,
  leftIcon: PropTypes.bool,
  leftIconType: PropTypes.oneOf(iconTypesValues),
  leftIconName: function (props, propName, componentName) {
    if (props.leftIcon && typeof props[propName] !== 'string') {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}, Expected a string`
      )
    }
  },
  leftIconColor: colorPropType,
  leftIconSize: PropTypes.number,
  rightIcon: PropTypes.bool,
  rightIconType: PropTypes.oneOf(iconTypesValues),
  rightIconName: function (props, propName, componentName) {
    if (props.rightIcon && typeof props[propName] !== 'string') {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}, Expected a string`
      )
    }
  },
  rightIconColor: colorPropType,
  rightIconSize: PropTypes.number
}

export default Button
