import { Component, ReactElement } from 'react'
import { ViewStyle, StyleProp } from 'react-native'

// eslint-disable-next-line import/named
import { HeaderProps } from '../Header/Header'

export interface ScreenProps extends HeaderProps {
  /**
   * optional custom styles for the container
   *
   */
  containerStyle: StyleProp<ViewStyle>

  /**
   * content of the screen.
   *
   */
  children: ReactElement | ReactElement[]
}

export default class Screen extends Component<ScreenProps> {}
