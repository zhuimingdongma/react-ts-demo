import React, { useEffect, useState } from 'react'
import Header from 'components/header'
import VideoCard from 'components/card/videoCard'
import { getRank, setRankList } from '@/store/rank'
// import { useSelector } from 'react-redux'
import store from '@/store'
import './index.less'
import { useLoaderData } from 'react-router-dom'

export default function Page(): JSX.Element {
  // const list = useSelector(getRank)
  // const {
  //   data: { data }
  // } = list
  const load = useLoaderData()
  // console.log('load: ', load)
  useEffect(() => {
    const init = async () => {
      // store.dispatch(setRankList(1))
    }
    init()
  }, [])

  return (
    <>
      <Header></Header>
    </>
  )
}
