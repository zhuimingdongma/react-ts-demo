import React, { useEffect } from 'react'
import VideoCard from 'components/card/videoCard'
import { getRank, setRankList } from '@/store/rank'
import { useSelector } from 'react-redux'
import store from '@/store'
import './index.less'
import { ResponseType } from 'request/index'
import { VideoItem } from '#/store'

export default function HomeContent(list: ResponseType<VideoItem[]>): React.ReactNode {
  const {
    data: { data }
  } = list
  return (
    <>
      <div className='flex home'>
        {data?.length &&
          data?.map((card, i) => (
            <VideoCard
              duration={card.duration}
              pic={card.pic}
              video_review={card.video_review}
              play={card.play}
              review={card.review}
              key={i}
            ></VideoCard>
          ))}
      </div>
    </>
  )
}
