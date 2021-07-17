import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'

import { SecondaryBanner } from '../../Components'

// import styles from './MainSlider.Styles'

function MainSlider({ data, onShopNowPress, ...props }) {
  const renderItem = ({ item }) => {
    return <SecondaryBanner {...item} onPress={() => onShopNowPress(item)} />
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      {...props}
    />
  )
}

MainSlider.propTypes = {
  data: PropTypes.array,
  onShopNowPress: PropTypes.func
}

export default MainSlider
