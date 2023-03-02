import Avatar from './avatar'
import React, { useState, useEffect } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import Logo from '../logo/index'
import './index.less'
import { tabList } from './types/data'
import { Popover } from 'antd'

function Header(): JSX.Element {
  return (
    <>
      <div className='header flex between items-end'>
        <div className='flex'>
          <a className='header-logo'>
            <Logo></Logo>
          </a>
          <div>
            {tabList.map((tab, i) => (
              <Popover content={tab.content} key={i}>
                <div>{tab.value}</div>
              </Popover>
            ))}
          </div>
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
