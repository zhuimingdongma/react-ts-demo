import React, { useEffect } from 'react'
import VideoCard from 'components/card/videoCard'
import { getRank, setRankList } from '@/store/rank'
import { useSelector } from 'react-redux'
import store from '@/store'
import './index.less'
import { ResponseType } from 'request/index'
import { ArchiveProps, VideoItem } from '#/store'
import { RightOutlined } from '@ant-design/icons'

export default function Content(list: ResponseType<VideoItem[]>, archiveList?: ResponseType<ArchiveProps>): React.ReactNode {
  const {
    data: { data }
  } = list

  const {
    data: {
      data: { archives }
    }
  } = archiveList!

  const archiveTitle = archives[0]?.tname

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
      <div className='archive'>
        <div className='archive-header flex between'>
          {archiveTitle}
          <div className='flex'>
            查看更多
            <RightOutlined />
          </div>
        </div>
        <div className='archive flex'>
          {archives.map(archive => (
            <VideoCard
              duration={archive.duration}
              pic={archive.pic}
              video_review={archive.stat.view}
              play={archive.play}
              review={archive.stat.view}
              key={archive.aid}
            ></VideoCard>
          ))}
        </div>
      </div>
    </>
  )
}
