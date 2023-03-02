import { TabProps } from './index'
import SusPendHome from 'components/suspendedContent/home'

export const tabList: TabProps[] = [
  {
    value: '首页',
    target: '/home',
    content: SusPendHome()
  },
  {
    value: '番剧',
    target: '/'
  },
  {
    value: '直播',
    target: '/'
  },
  {
    value: '游戏中心',
    target: '/'
  },
  {
    value: '会员购',
    target: '/'
  },
  {
    value: '漫画',
    target: '/'
  },
  {
    value: '赛事',
    target: '/'
  }
]
