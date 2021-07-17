import { Component } from 'react'
import {
  TouchableWithoutFeedbackProps,
  StyleProp,
  ViewStyle
} from 'react-native'

export interface SectionHeaderProps extends TouchableWithoutFeedbackProps {
  /**
   * title of the section.
   *
   */
  title: string

  /**
   * Optional styling for the container.
   *
   */
  containerStyle?: StyleProp<ViewStyle>
}

export default class SectionHeader extends Component<SectionHeaderProps> {}
