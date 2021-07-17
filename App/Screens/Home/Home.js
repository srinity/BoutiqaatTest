import React, { Component } from 'react'
import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { isEmpty as _isEmpty } from 'lodash'

import { Screen, Icon, Badge, Tabs } from '../../Components'
import {
  MainSlider,
  Celebrities,
  Products,
  SecondarySlider
} from '../../Containers'

import { Colors } from '../../Theme'

import styles from './Home.Styles'

const TABS_DATA = [{ label: 'Women' }, { label: 'Men' }]

class Home extends Component {
  componentDidMount() {
    const { getHomeDataAction } = this.props

    getHomeDataAction('women')
  }

  onSearchIconPress = () => {
    alert('Search Icon Press')
  }

  onMenuIconPress = () => {
    alert('Menu Icon Press')
  }

  onMainBannerItemPress = (item) => {
    alert(`Banner ${item.label} Press`)
  }

  onCelebrityPress = (celebrity) => {
    // Should probably open webpage with url, shouldn't I???
    alert(`Celebrity ${celebrity.label} Press`)
  }

  onViewAllCelebritiesPress = () => {
    alert('View All Press')
  }

  onProductBuyPress = (product) => {
    alert(`Product ${product.label} Press`)
  }

  onAddToWishListPress = (product) => {
    const { addToWishList } = this.props

    addToWishList(product)
  }

  onRemoveFromWishListPress = (product) => {
    const { removeFromWishList } = this.props

    removeFromWishList(product)
  }

  onViewAllProductsPress = () => {
    alert('View All Press')
  }

  onSecondaryBannerItemPress = (item) => {
    alert(`Banner ${item.label} Press`)
  }

  renderHeaderRight = () => {
    const { wishListItems } = this.props

    return (
      <View style={styles.rightHeaderIconContainerStyle}>
        <Icon type="ant" name="hearto" />
        {_isEmpty(wishListItems) ? null : (
          <Badge value={wishListItems.length} />
        )}
      </View>
    )
  }

  renderWomenTabContent = (isLoading, data, wishListItems) => {
    if (isLoading) {
      return (
        <View style={styles.indicatorContainerStyle}>
          <ActivityIndicator color={Colors.brandColor} size="large" />
        </View>
      )
    }

    return (
      <ScrollView
        style={styles.scrollViewStyle}
        showsVerticalScrollIndicator={false}
      >
        <MainSlider
          data={data?.mainSlider}
          onShopNowPress={this.onMainBannerItemPress}
        />
        <Celebrities
          data={data?.celebrity}
          onPress={this.onCelebrityPress}
          onViewAllPress={this.onViewAllCelebritiesPress}
        />
        <Products
          data={data?.product}
          wishList={wishListItems}
          onBuyNowPress={this.onProductBuyPress}
          onViewAllPress={this.onViewAllProductsPress}
          onAddToWishListPress={this.onAddToWishListPress}
          onRemoveFromWishListPress={this.onRemoveFromWishListPress}
        />
        <SecondarySlider
          data={data?.secondarySlider}
          onShopNowPress={this.onSecondaryBannerItemPress}
        />
      </ScrollView>
    )
  }

  renderMenTabContent = (isLoading, data, wishListItems) => {
    if (isLoading) {
      return (
        <View style={styles.indicatorContainerStyle}>
          <ActivityIndicator color={Colors.brandColor} size="large" />
        </View>
      )
    }

    return (
      <View style={styles.indicatorContainerStyle}>
        <Text>Men Section.....</Text>
      </View>
    )
  }

  render() {
    const { isLoading, data, wishListItems } = this.props

    return (
      <Screen
        withLogo
        renderRight={this.renderHeaderRight}
        onSearchPress={this.onSearchIconPress}
        onMenuPress={this.onMenuIconPress}
      >
        <Tabs data={TABS_DATA}>
          <Tabs.Tab index={0}>
            {this.renderWomenTabContent(
              isLoading?.women,
              data?.women,
              wishListItems
            )}
          </Tabs.Tab>

          <Tabs.Tab index={1}>
            {this.renderMenTabContent(
              isLoading?.women,
              data?.women,
              wishListItems
            )}
          </Tabs.Tab>
        </Tabs>
      </Screen>
    )
  }
}

Home.propTypes = {
  wishListItems: PropTypes.array,
  getHomeDataAction: PropTypes.func,
  addToWishList: PropTypes.func,
  removeFromWishList: PropTypes.func,
  isLoading: PropTypes.shape({
    women: PropTypes.bool,
    men: PropTypes.bool
  }),
  data: PropTypes.shape({
    women: PropTypes.shape({
      mainSlider: PropTypes.array,
      celebrity: PropTypes.array,
      product: PropTypes.array,
      secondarySlider: PropTypes.array
    })
  })
}

export default Home
