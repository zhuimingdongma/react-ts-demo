import Avatar from './avatar'
import React, { useEffect, useState, useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import Logo from '../logo/index'
import './index.less'
import { Popover, TabPaneProps } from 'antd'
import { Optional } from '#/index'
import { getArchive, getRank } from '@/store/rank'
import { useSelector } from 'react-redux'
import { TabProps } from './types'
import Content from 'components/content/home'
import { useNavigate } from 'react-router-dom'
import Tabs from 'components/tab'
import { useParams } from 'react-router-dom'
import { ArchiveProps } from '#/store'
import { ResponseType } from 'request/index'
import { Outlet } from 'react-router-dom'

export interface Tab extends Optional<Omit<TabPaneProps, 'tab'>> {
  key: string
  label: React.ReactNode
  subLabel?: string[]
}

interface Params {
  isChannel?: boolean
}

function Header({ isChannel }: Params): JSX.Element {
  const [subList, setSubList] = useState<ResponseType<ArchiveProps>>()
  const list = useSelector(getRank)
  const archiveList = useSelector(getArchive)

  const changeSub = key => {
    setSubList(archiveList)
  }

  const tabList = useRef<TabProps[]>([
    {
      key: '1',
      label: '首页',
      target: '/home',
      children: Content(list, archiveList)
    },
    {
      key: '33',
      label: '番剧',
      target: '/Fan',
      children: Content(list, archiveList),
      subLabel: ['推荐', 'MAD·AMV', 'MMD·3D', '短片·手书·配音']
    },
    {
      key: '167',
      label: '国创',
      target: '/Fan',
      children: Content(list, archiveList),
      subLabel: ['推荐', '国创动画', '国产原创相关', '布袋戏', '动态漫·广播剧', '资讯']
    },
    {
      key: '3',
      label: '音乐',
      target: '/music',
      children: Content(list, archiveList),
      subLabel: ['推荐', '原创音乐', '翻唱', 'VOCALOID·UTAU', '电音', 'MV', '演奏', '音乐现场']
    }
  ])
  const items: Tab[] = tabList.current.map(tab => {
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
          <a className='header-logo'>
            <Logo></Logo>
          </a>
          <Tabs
            items={items}
            defaultActiveKey={key.channelId!}
            onChange={activeKey => router(`/channel/${activeKey}`)}
            onChangeSub={subKey => changeSub(subKey)}
          ></Tabs>
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
      <div className='content'>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default Header
