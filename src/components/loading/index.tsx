import './index.less'

export default function Loading(): JSX.Element {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
      <div className='spinner'></div>
    </div>
  )
}
