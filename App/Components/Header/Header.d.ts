import { Component, ReactElement } from 'react'

export interface HeaderProps {
  /**
   * The title of the header
   *
   */
  title: string

  /**
   * Boolean value that controls whether to show the logo or the title
   *
   * @default false
   */
  withLogo?: boolean

  /**
   * Boolean value that controls whether to show the search or not
   *
   * @default true
   */
  withSearch?: boolean

  /**
   * Optional method than can be used to render a right section of the header.
   *
   */
  renderRight?(): ReactElement

  /**
   * Method that will be invoked when search icon is pressed.
   *
   */
  onSearchPress(): void

  /**
   * Method that will be invoked when menu icon is pressed.
   *
   */
  onMenuPress(): void
}

export default class Header extends Component<HeaderProps> {}
