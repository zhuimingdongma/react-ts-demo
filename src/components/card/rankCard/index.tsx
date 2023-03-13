import { VideoItem } from '#/store'
import { Image } from 'antd'
// import { Image } from 'components/image'
import './index.less'

export default function RankCard({ pic, title, author, play, duration, video_review }: VideoItem): JSX.Element {
  const picUrl = `http://localhost:3011/transfer/image?pic=${pic}`
  return (
    <div className='rankCard flex'>
      <Image src={picUrl} alt='小傻瓜,加载出错了' rootClassName='rankCard-img mr-10' />
      <div className='rankCard-right flex column between'>
        <div className='rankCard-right__title'>{title}</div>
        <div className=''>
          <div className='flex mb-10 center'>
            <img src='/src/assets/UP.png' alt='' className='rankCard-right__img mr-5' loading='lazy' />
            <span className='rankCard-right__span'>{author}</span>
          </div>
          <div className='flex center'>
            <div className='flex center mr-10'>
              <img src='/src/assets/play.png' alt='' className='rankCard-right__img mr-5' />
              <span className='rankCard-right__span'>{play}</span>
            </div>
            <div className='flex center'>
              <img src='/src/assets/comment.png' alt='' className='rankCard-right__img mr-5' loading='lazy' />
              <span className='rankCard-right__span'>{video_review}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
