import { VideoItem } from '#/store'
import { calcCount } from 'utils/index'
import './index.less'

export default function VideoCard({ video_review, play, review, duration, pic }: VideoItem): JSX.Element {
  return (
    <>
      <div className='card'>
        <div
          className='flex card-box'
          style={{
            backgroundImage: `url(http://localhost:3011/transfer/image?pic=${pic})`,
            backgroundSize: '100% 100%',
            width: '150px',
            height: '150px'
          }}
        >
          <div className='flex card-box__flex'>
            <div className='flex center card-box__play'>
              <img src='/src/assets/play.png' alt='' className='card-box__img' />
              {calcCount(play)}
            </div>
            <div className='flex center card-box__review'>
              <img src='/src/assets/comment.png' alt='' className='card-box__img' />
              {calcCount(video_review)}
            </div>
          </div>
          <div className='card-box__duration'>{duration}</div>
        </div>
      </div>
    </>
  )
}
