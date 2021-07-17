import React from 'react'
import {
  View,
  Image,
  Text,
  ViewPropTypes,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import { Icon } from '../Icon'

import styles from './ProductCard.Styles'

function ProductCard({
  brandName,
  currencyCode,
  specialPrice,
  label,
  imageUrl,
  imageStyle,
  containerStyle,
  onBuyNowPress,
  onAddToWishListPress,
  onRemoveFromWishListPress,
  isItemInWishList,
  ...props
}) {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Image
        source={{ uri: imageUrl }}
        style={[styles.imageStyle, imageStyle]}
      />

      <View style={styles.infoContainerStyle}>
        <View style={styles.productContainerStyle}>
          <View>
            <Text numberOfLines={1} style={styles.brandTextStyle}>
              {brandName}
            </Text>
            <Text numberOfLines={2} style={styles.labelTextStyle}>
              {label}
            </Text>
          </View>
          <Text
            style={styles.priceTestStyle}
          >{`${specialPrice} ${currencyCode}`}</Text>
        </View>

        <View style={styles.buttonsContainerStyle}>
          <Button
            title="BUY NOW"
            style={styles.buyButtonStyle}
            onPress={onBuyNowPress}
          />
          <TouchableOpacity
            style={styles.wishListButtonStyle}
            onPress={
              isItemInWishList
                ? onRemoveFromWishListPress
                : onAddToWishListPress
            }
          >
            <Icon type="ant" name={isItemInWishList ? 'heart' : 'hearto'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

ProductCard.propTypes = {
  brandName: PropTypes.string,
  currencyCode: PropTypes.string,
  specialPrice: PropTypes.string,
  label: PropTypes.string,
  imageUrl: PropTypes.string,
  imageStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  onBuyNowPress: PropTypes.func,
  onAddToWishListPress: PropTypes.func,
  onRemoveFromWishListPress: PropTypes.func,
  isItemInWishList: PropTypes.bool
}

export default ProductCard
