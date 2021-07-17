import { Component } from 'react'
import { ViewStyle, StyleProp, ViewProps } from 'react-native'

export interface TabData {
  label: string
  accessibilityLabel?: string
}

export interface TabsProps extends ViewProps {
  /**
   * The data contains the labels of tabs.
   *
   */
  data: string[] | TabData[]

  /**
   * The underline color of active tab.
   *
   * @default 'rgb(230, 0, 0)'
   */
  activeTabColor?: string

  /**
   * The index of the initial active tab.
   *
   * @default 0
   */
  initialActiveTab: number

  /**
   * Boolean value indicating whether or not Tabs should be scrollable.
   *
   * @default false
   */
  scrollable: boolean

  /**
   * The function that will be invoked when the tab is pressed.
   *
   */
  renderTab?(): void

  /**
   * The style of the tab.
   *
   * @default {}
   */
  tabStyle?: StyleProp<ViewStyle>

  /**
   * The style of the Container which contains all Tabs.
   *
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * The style of the Container which contains the Tabs.
   *
   */
  tabsStyle?: StyleProp<ViewStyle>

  /**
   * The function that will be invoked to return the value of each tab.
   *
   */
  valueExtractor?(): void

  /**
   * The function that will be invoked to return the label as a key  of each tab.
   *
   */
  keyExtractor?(): void

  /**
   * The function that will be invoked with selected tab.
   *
   */
  onSelectedTab?(
    item: string | TabData,
    index: number,
    data: string[] | TabData[]
  ): void

  /**
   * Number of items without tabs to filter them.
   *
   */
  itemsCount?: number
}

export interface TabProps extends ViewProps {
  /**
   *  Tab index number
   *
   */
  index: number

  /**
   * The style of the container tab.
   *
   * @default {}
   */
  style: StyleProp<ViewStyle>

  /**
   *  Tabs length.
   *
   */
  length: number
}

export default class Tabs extends Component<TabsProps> {
  static Tab: React.ComponentType<TabProps>
}
