import React, { Component } from 'react'
import {
  View,
  Platform,
  Dimensions,
  Animated,
  Easing,
  ViewPropTypes,
  TouchableOpacity,
  FlatList
} from 'react-native'
import {
  map as _map,
  isString as _isString,
  isFunction as _isFunction
} from 'lodash'
import PropTypes from 'prop-types'

import Label from '../Label/Label'

import { Colors, Fonts } from '../../Theme'

import Tab from './Tab'

import styles from './Tabs.Styles'

const { width } = Dimensions.get('screen')

class Tabs extends Component {
  static Tab = Tab

  constructor(props) {
    super(props)
    this.indicator = new Animated.Value(0)
    this.activeLineOpacity = new Animated.Value(1)
    this.state = {
      activeTab: props.initialActiveTab,
      tabSizes: {}
    }
  }

  getFontStyle = ({ index, activeTab, scrollable }) => {
    const styleArr = [styles.label(scrollable)]
    if (activeTab === index) {
      styleArr.push({
        fontWeight: 'bold',
        fontSize:
          index > 0 && Platform.OS === 'android' ? Fonts.h5 : Fonts.h5 + 1,
        color: Colors.blackColor
      })
    }

    return styleArr
  }

  handleActiveTab = (item, index) => {
    const { data, onSelectedTab } = this.props
    const lineWidth = width / data.length
    Animated.timing(this.indicator, {
      toValue: lineWidth * index,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false
    }).start(({ finished }) => {
      if (finished) {
        this.setState({ activeTab: index })
        setTimeout(
          () => _isFunction(onSelectedTab) && onSelectedTab(item, index, data),
          0
        )
      }
    })
  }

  handleActiveScrollableTab = (item, index) => {
    const { data, onSelectedTab } = this.props
    this.activeLineOpacity.setValue(0)
    this.setState({ activeTab: index }, () => {
      Animated.timing(this.activeLineOpacity, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true
      }).start(({ finished }) => {
        if (finished) {
          setTimeout(
            () =>
              _isFunction(onSelectedTab) && onSelectedTab(item, index, data),
            0
          )
        }
      })
    })
  }

  handleTabCellLayout = (index, event) => {
    const { width: cellWidth } = event.nativeEvent.layout
    this.setState({
      tabSizes: { ...this.state.tabSizes, [index]: cellWidth }
    })
  }

  renderTabs = () => {
    const {
      keyExtractor,
      renderTab,
      data,
      tabStyle,
      valueExtractor,
      scrollable
    } = this.props
    const { activeTab } = this.state
    return _map(data, (item, index) => {
      const key = _isFunction(keyExtractor)
        ? keyExtractor(item)
        : `header-tab-${index}`
      const title = _isString(item) ? item : valueExtractor(item)
      const labelStyle = this.getFontStyle({
        index,
        activeTab,
        scrollable
      })
      const { accessibilityLabel = null } = item
      return (
        <View key={key} style={[styles.tab, tabStyle]}>
          {_isFunction(renderTab) ? (
            <TouchableOpacity
              onPress={() => this.handleActiveTab(item, index)}
              activeOpacity={1}
            >
              {renderTab(item, index, data)}
            </TouchableOpacity>
          ) : (
            <Label
              title={title}
              textStyle={labelStyle}
              onPress={() => this.handleActiveTab(item, index)}
              activeOpacity={1}
              textAccessibilityLabel={accessibilityLabel}
            />
          )}
        </View>
      )
    })
  }
  renderScrollableTabs = (data) => {
    return (
      <FlatList
        horizontal={true}
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => this.renderScrollableItem(item, index)}
        keyExtractor={(_item, index) => index + ''}
      />
    )
  }
  renderHeader = () => {
    const { data, activeTabColor, tabsStyle, scrollable } = this.props
    const { activeTab } = this.state
    const lineWidth = width / data.length
    this.indicator.setValue(activeTab * lineWidth)
    return (
      <View style={[styles.headerContainer, tabsStyle]}>
        <View style={styles.mainView}>
          {scrollable ? this.renderScrollableTabs(data) : this.renderTabs()}
        </View>
        {!scrollable && (
          <Animated.View
            style={[
              styles.activeTabLine,
              {
                width: lineWidth,
                borderBottomColor: activeTabColor,
                transform: [{ translateX: this.indicator }]
              }
            ]}
          />
        )}
      </View>
    )
  }

  renderScrollableItem = (item, index) => {
    const { tabStyle, valueExtractor, scrollable } = this.props
    const { tabSizes, activeTab } = this.state
    const tabWidth = tabSizes[index]
    const title = _isString(item) ? item : valueExtractor(item)

    return (
      <View
        key={index}
        style={[styles.tab, tabStyle]}
        onLayout={this.handleTabCellLayout.bind(this, index)}
      >
        <Label
          title={title}
          style={{ width: tabWidth }}
          textStyle={this.getFontStyle({ index, activeTab, scrollable })}
          onPress={() => this.handleActiveScrollableTab(item, index)}
          activeOpacity={1}
        />
        {activeTab === index ? (
          <Animated.View
            style={[
              styles.activeTabLine,
              {
                width: tabWidth,
                opacity: this.activeLineOpacity
              }
            ]}
          />
        ) : (
          <View
            style={[
              styles.tabLine,
              {
                width: tabWidth
              }
            ]}
          />
        )}
      </View>
    )
  }

  render() {
    const { containerStyle, children } = this.props
    const { activeTab } = this.state
    return (
      <View style={[styles.container, containerStyle]}>
        {this.renderHeader()}
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                activeTab,
                defaultIndex: index,
                length: React.Children.count(children)
              })
            : child
        )}
      </View>
    )
  }
}

Tabs.defaultProps = {
  initialActiveTab: 0,
  data: [],
  activeTabColor: Colors.blackColor,
  valueExtractor: (item) => item.label
}

Tabs.propTypes = {
  initialActiveTab: PropTypes.number,
  data: PropTypes.array.isRequired,
  renderTab: PropTypes.func,
  keyExtractor: PropTypes.func,
  valueExtractor: PropTypes.func,
  tabStyle: ViewPropTypes.style,
  tabsStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  activeTabColor: PropTypes.string,
  onSelectedTab: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  scrollable: PropTypes.bool,
  itemsCount: PropTypes.number
}

export default Tabs
