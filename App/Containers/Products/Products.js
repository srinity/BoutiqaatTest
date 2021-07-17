import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import { findIndex as _findIndex } from 'lodash'

import { ProductCard, SectionHeader } from '../../Components'

import styles from './Products.Styles'

function Products({
  data,
  wishList,
  onViewAllPress,
  onBuyNowPress,
  onAddToWishListPress,
  onRemoveFromWishListPress,
  ...props
}) {
  const renderItem = ({ item, index }) => {
    const isItemInWishList =
      _findIndex(wishList, (wishItem) => wishItem.id === item.id) !== -1

    return (
      <ProductCard
        {...item}
        containerStyle={index === 0 ? styles.firstCardStyle : undefined}
        onBuyNowPress={() => onBuyNowPress(item)}
        onAddToWishListPress={() => onAddToWishListPress(item)}
        onRemoveFromWishListPress={() => onRemoveFromWishListPress(item)}
        isItemInWishList={isItemInWishList}
      />
    )
  }

  const renderHeader = () => {
    return <SectionHeader title="BOOUTIQAAT PICKS" onPress={onViewAllPress} />
  }

  return (
    <>
      {renderHeader()}
      <FlatList
        data={data}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        extraData={wishList}
        {...props}
      />
    </>
  )
}

Products.propTypes = {
  data: PropTypes.array,
  wishList: PropTypes.array,
  onBuyNowPress: PropTypes.func,
  onViewAllPress: PropTypes.func,
  onAddToWishListPress: PropTypes.func,
  onRemoveFromWishListPress: PropTypes.func
}

export default Products
