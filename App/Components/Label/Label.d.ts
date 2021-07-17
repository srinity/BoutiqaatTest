import { Component } from 'react'
import { TouchableOpacityProps, StyleProp, TextStyle } from 'react-native'

export interface LabelProps extends TouchableOpacityProps {
  /**
   * Text shown inside the label.
   *
   */
  title: string

  /**
   * Optional placeholders values array that will be passed to ContentManager to replace any placeholder in the localization.
   *
   * @default []
   */
  placeHolders?: string[]

  /**
   * Optional styling for the text of the label.
   *
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * Optional accessibilityLabel for the text of the label.
   *
   */
  textAccessibilityLabel?: string

  /**
   * Specifies whether fonts should scale to respect Text Size accessibility settings.
   *
   */
  allowFontScaling?: boolean
}

export default class Label extends Component<LabelProps> {}
