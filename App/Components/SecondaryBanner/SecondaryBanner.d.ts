import { Component } from 'react'
import { ViewStyle, StyleProp } from 'react-native'

export interface SecondaryBannerProps {
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
  imageStyle: StyleProp<ViewStyle>

  /**
   * Method that will be invoked when shop now is pressed.
   *
   */
  onPress(): void
}

export default class SecondaryBanner extends Component<SecondaryBannerProps> {}
