import Avatar from './avatar'
import React, { useEffect } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import Logo from '../logo/index'
import './index.less'
import { Popover, TabPaneProps } from 'antd'
import { Optional } from '#/index'
import { getRank, setRankList } from '@/store/rank'
import { useSelector } from 'react-redux'
import { TabProps } from './types'
import HomeContent from 'components/content/home'
import { useNavigate } from 'react-router-dom'
import Tabs from 'components/tab'
import { useParams } from 'react-router-dom'

export interface Tab extends Optional<Omit<TabPaneProps, 'tab'>> {
  key: string
  label: React.ReactNode
  subLabel?: string[]
}

function Header(): JSX.Element {
  useEffect(() => {
    const init = async () => {
      // store.dispatch(setRankList(1))
    }
    init()
  }, [])

  const homeList = useSelector(getRank)

  const tabList: TabProps[] = [
    {
      key: '1',
      label: '首页',
      target: '/home',
      children: HomeContent(homeList)
    },
    {
      key: '33',
      label: '番剧',
      target: '/Fan',
      children: HomeContent(homeList),
      subLabel: ['推荐', 'MAD·AMV', 'MMD·3D', '短片·手书·配音']
    }
    // {
    //   value: '直播',
    //   target: '/'
    // },
    // {
    //   value: '游戏中心',
    //   target: '/'
    // },
    // {
    //   value: '会员购',
    //   target: '/'
    // },
    // {
    //   value: '漫画',
    //   target: '/'
    // },
    // {
    //   value: '赛事',
    //   target: '/'
    // }
  ]

  const items: Tab[] = tabList.map(tab => {
    return {
      label: tab.label!,
      key: tab.key!,
      children: tab.children,
      subLabel: tab.subLabel
    }
  })

  const router = useNavigate()
  const key = useParams()

  return (
    <>
      <div className='header flex between'>
        <div className='flex'>
          {/* <a className='header-logo'>
            <Logo></Logo>
          </a> */}
          {/* <div className='header-tabs'> */}
          {/* onChange={activeKey => router(`/channel/${activeKey}`)} */}
          <Tabs items={items} defaultActiveKey={key.channelId!} onChange={activeKey => router(`/channel/${activeKey}`)}></Tabs>
          {/* <Tabs items={items} defaultActiveKey='1' onChange={activeKey => router(`/channel/${activeKey}`)}></Tabs> */}
          {/* </div> */}
          {/* <div>
            {tabList.map((tab, i) => (
              <Popover content={tab.content} key={i}>
                <div>{tab.value}</div>
              </Popover>
            ))}
          </div> */}
        </div>
        <div className='flex'>
          <a className='header-search'>
            <SearchOutlined style={{ fontSize: '20px' }} />
          </a>
          <a href='' className='header-ava'>
            <Avatar></Avatar>
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
