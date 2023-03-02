import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from 'components/header'
import { getCurrentHotList } from './request'
import VideoCard from 'components/card/videoCard'
import { CardProps } from 'components/card/videoCard/types/type'

export default function Page() {
  const [currentHotList, setHotList] = useState<CardProps[]>()

  useEffect(() => {
    const init = async () => {
      let list = await getCurrentHotList()
      setHotList(list)
    }
    init()
  }, [])

  return (
    <>
      <Header></Header>
      {currentHotList?.map((card, i) => (
        <VideoCard duration={card.duration} pic={card.pic} stat={card.stat}></VideoCard>
      ))}
    </>
  )
}
