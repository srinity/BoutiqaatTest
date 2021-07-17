import { Component } from 'react'
import { ViewStyle, StyleProp, TextStyle } from 'react-native'

export interface CelebrityCardProps {
  /**
   * The name of the celebrity
   *
   */
  label: string

  /**
   * The image of the celebrity
   *
   */
  imageUrl: string

  /**
   * optional custom styles for the container
   *
   */
  containerStyle: StyleProp<ViewStyle>

  /**
   * optional custom styles for the image
   *
   */
  imageStyle: StyleProp<ViewStyle>

  /**
   * optional custom styles for the text
   *
   */
  textStyle: StyleProp<TextStyle>

  /**
   * Method that will be invoked when shop now is pressed.
   *
   */
  onPress(): void
}

export default class CelebrityCard extends Component<CelebrityCardProps> {}
