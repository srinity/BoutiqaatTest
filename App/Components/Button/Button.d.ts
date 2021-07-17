import { Component } from 'react'
import {
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
  StyleProp
} from 'react-native'

// eslint-disable-next-line import/named
import { IconName, IconTypes } from '../Icon/Icon'

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * The text that will appear in the button
   *
   */
  title: string

  /**
   * optional boolean value, when true an activity indicator will appear inside the button
   *
   * @default false
   */
  isLoading

  /**
   * optional custom styles that will be applied when the button is disabled or `isLoading` is set to true
   *
   */
  disabledStyle: StyleProp<ViewStyle>

  /**
   * optional custom styles for the title
   *
   */
  textStyle: StyleProp<TextStyle>

  /**
   * the indicator color that will appear when `isLoading` is set to true
   *
   * @default '#ffffff'
   */
  indicatorColor: string

  /**
   * the indicator size
   *
   * @default 'small'
   */
  indicatorSize: 'small' | 'large'

  /**
   * boolean value indicating if the button should contain the left icon
   *
   * @default false
   */
  leftIcon: boolean

  /**
   * the left icon type
   *
   * @default 'material'
   */
  leftIconType: IconTypes

  /**
   * the left icon name
   *
   */
  leftIconName: IconName

  /**
   * the left icon color
   *
   * @default '#ffffff'
   */
  leftIconColor: string

  /**
   * the left icon size
   *
   * @default 25
   */
  leftIconSize: number

  /**
   * boolean value indicating if the button should contain the right icon
   *
   * @default false
   */
  rightIcon: boolean

  /**
   * the right icon type
   *
   * @default 'material'
   */
  rightIconType: IconTypes

  /**
   * the right icon name
   *
   */
  rightIconName: IconName

  /**
   * the right icon color
   *
   * @default '#ffffff'
   */
  rightIconColor: string

  /**
   * the right icon size
   *
   * @default 25
   */
  rightIconSize: number
}

export default class Button extends Component<ButtonProps> {}
