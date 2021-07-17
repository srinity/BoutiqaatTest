import { Component } from 'react'
import { TextProps, StyleProp, ViewStyle } from 'react-native'

export type IconTypes =
  | 'material'
  | 'ant'
  | 'entypo'
  | 'evil'
  | 'feather'
  | 'fontAwesome'
  | 'fontisto'
  | 'foundation'
  | 'ion'
  | 'materialCommunity'
  | 'oct'
  | 'simpleLine'
  | 'zocial'

export type IconName = string

export interface IconProps extends TextProps {
  /**
   * The name of the icon in the specified type
   *
   */
  name: IconName

  /**
   * The type of the icon used
   *
   * @default 'material'
   */
  type?: IconTypes

  /**
   * The size of the icon used
   *
   * @default 25
   */
  size?: number

  /**
   * The color of the icon used
   *
   * @default '#000000'
   */
  color?: string

  /**
   * optional styling applied to the icon
   *
   * @default {}
   */
  style?: StyleProp<ViewStyle>
}

export default class Icon extends Component<IconProps> {}
