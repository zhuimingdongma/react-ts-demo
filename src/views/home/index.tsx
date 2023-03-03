import React, { useEffect, useState } from 'react'
import Header from 'components/header'
import VideoCard from 'components/card/videoCard'
import { getRank, setRankList } from '@/store/rank'
import { useSelector } from 'react-redux'
import store from '@/store'

export default function Page() {
  const list = useSelector(getRank)
  const {
    data: { data }
  } = list
  useEffect(() => {
    const init = async () => {
      store.dispatch(setRankList(1))
    }
    init()
  }, [])

  return (
    <>
      <Header></Header>
      {data.length &&
        data.map((card, i) => (
          <VideoCard
            duration={card.duration}
            pic={card.pic}
            video_review={card.video_review}
            play={card.play}
            review={card.review}
            key={i}
          ></VideoCard>
        ))}
    </>
  )
}
