import { TabProps } from './index'
import SusPendHome from 'components/suspendedContent/home'
import HomeContent from 'components/content/home'
import React, { useEffect } from 'react'
import { getRank, setRankList } from '@/store/rank'
import store from '@/store'
import { useSelector } from 'react-redux'
