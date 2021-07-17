import { Component } from 'react'
import { ViewStyle, StyleProp } from 'react-native'

export interface BannerProps {
  /**
   * The label of the banner
   *
   */
  label: string

  /**
   * The image of the banner
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
  imageContainerStyle: StyleProp<ViewStyle>

  /**
   * Method that will be invoked when shop now is pressed.
   *
   */
  onPress(): void
}

export default class Banner extends Component<BannerProps> {}
