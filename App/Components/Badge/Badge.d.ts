import { Component } from 'react'
import { TextProps, ViewStyle, TextStyle, StyleProp } from 'react-native'

export interface BadgeProps extends Omit<TextProps, 'style'> {
  /**
   * The number that will appear in the badge
   *
   */
  value: string

  /**
   * optional custom styles for the container
   *
   */
  style: StyleProp<ViewStyle>

  /**
   * optional custom styles for the value
   *
   */
  textStyle: StyleProp<TextStyle>
}

export default class Badge extends Component<BadgeProps> {}
