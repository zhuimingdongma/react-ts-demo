import Avatar from './avatar'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import Logo from '../logo/index'
import './index.less'

const Header: React.FC = () => (
  <>
    <div className='header flex between items-end'>
      <a className='header-logo'>
        <Logo></Logo>
      </a>
      <div className='flex'>
        <a className='header-search'>
          <SearchOutlined style={{ fontSize: '.6rem' }} />
        </a>
        <a href='' className='header-ava'>
          <Avatar></Avatar>
        </a>
      </div>
    </div>
  </>
)

export default Header
