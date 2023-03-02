import { CardProps } from './types/type'

export default function VideoCard({ stat, duration, pic }: CardProps): JSX.Element {
  return (
    <>
      <div className='card'>
        <div className='flex between'>
          <div className='flex' style={{ backgroundImage: `${pic}` }}>
            <div className='flex center'>
              <img src='./assets/play.png' alt='' />
              {stat.view}
            </div>
            <div className='flex center'>
              <img src='./assets/comment.png' alt='' />
              {stat.reply}
            </div>
          </div>
          <div>{duration}</div>
        </div>
      </div>
    </>
  )
}
