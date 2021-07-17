import { Component } from 'react'
import { ViewStyle, StyleProp } from 'react-native'

export interface ProductCardProps {
  /**
   * The brand name of the product
   *
   */
  brandName: string

  /**
   * The currency code of the product
   *
   */
  currencyCode: string

  /**
   * The price of the product
   *
   */
  specialPrice: string

  /**
   * The name of the product
   *
   */
  label: string

  /**
   * The image of the product
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
   * Flag that indicates if the product is the wishlist or not
   *
   */
  isItemInWishList: boolean

  /**
   * Method that will be invoked when buy now is pressed.
   *
   */
  onBuyNowPress(): void

  /**
   * Method that will be invoked when add to wishlist is pressed.
   *
   */
  onAddToWishListPress(): void

  /**
   * Method that will be invoked when remove from wishlist is pressed.
   *
   */
  onRemoveFromWishListPress(): void
}

export default class ProductCard extends Component<ProductCardProps> {}
