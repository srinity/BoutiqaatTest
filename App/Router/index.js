import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Router, Scene, Stack } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Home as HomeScreen } from '../Screens'

import { HomeActions, WishListActions } from '../Store/Actions'

class AppRouter extends Component {
  constructor(props) {
    super(props)

    this.ConnectedComponents = {
      Home: connect(
        ({ home, wishList }) => {
          const { items: wishListItems } = wishList

          return { ...home, wishListItems }
        },
        (dispatch) => {
          return {
            ...bindActionCreators(HomeActions, dispatch),
            ...bindActionCreators(WishListActions, dispatch)
          }
        }
      )(HomeScreen)
    }
  }

  render() {
    const { ConnectedComponents } = this

    return (
      <View style={styles.wrapperViewContainerStyle}>
        <Router backAndroidHandler={() => {}}>
          <Stack key="root" hideNavBar>
            <Scene
              key="home"
              initial
              hideNavBar
              component={ConnectedComponents.Home}
            />
          </Stack>
        </Router>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapperViewContainerStyle: {
    flex: 1
  }
})

export default AppRouter
