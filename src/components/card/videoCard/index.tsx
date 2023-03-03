import { VideoItem } from '#/store'

export default function VideoCard({ video_review, play, review, duration, pic }: VideoItem): JSX.Element {
  return (
    <>
      <div className='card'>
        <div className='flex between'>
          <div className='flex' style={{ backgroundImage: `url(${pic})`, backgroundSize: '100% 100%', width: '200px', height: '200px' }}>
            <div className='flex center'>
              <img src='./assets/play.png' alt='' />
              {play}
            </div>
            <div className='flex center'>
              <img src='./assets/comment.png' alt='' />
              {video_review}
            </div>
          </div>
          <div>{duration}</div>
        </div>
      </div>
    </>
  )
}
