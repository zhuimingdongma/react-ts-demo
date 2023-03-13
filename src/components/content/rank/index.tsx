import './index.less'
import { RankProps, VideoItem } from '#/store'
import RankCard from 'components/card/rankCard'
import { ResponseType } from 'request/index'

export default function RankContent(rankList: ResponseType<RankProps>): JSX.Element {
  const {
    data: {
      data: { list }
    }
  } = rankList
  return (
    <div className='rankContent'>
      {list.map((item, i) => (
        <div className='mb-10 flex center' style={{ width: '100vw' }} key={item.aid}>
          {i === 0 ? (
            <img className='rankContent-img__1 rankContent-img' src='/src/views/rank/assets/rank1.png'></img>
          ) : i === 1 ? (
            <img className='rankContent-img__2 rankContent-img' src='/src/views/rank/assets/rank2.png'></img>
          ) : i === 2 ? (
            <img className='rankContent-img__3 rankContent-img' src='/src/views/rank/assets/rank3.png'></img>
          ) : (
            <div className='rankContent-img'>{i}</div>
          )}
          <RankCard
            pic={item.pic}
            title={item.title}
            author={item.author}
            play={item.play}
            duration={item.duration}
            video_review={item.video_review}
          ></RankCard>
        </div>
      ))}
    </div>
  )
}
