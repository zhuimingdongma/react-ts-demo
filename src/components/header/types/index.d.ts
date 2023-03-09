import { Optional } from '#/index'
import { Tab } from '..'

export interface TabProps extends Tab {
  target?: string
  content?: React.ReactNode | (() => React.ReactNode)
  children: React.ReactNode
}
