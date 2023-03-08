import { Tab } from 'components/header'
import { useRef, useCallback } from 'react'
import { toPng } from 'html-to-image'
import html2canvas from 'html2canvas'
import './index.less'

export default function Test(): JSX.Element {
  const src = '/src/assets/child.png'
  const logoSrc = '/src/assets/WechatIMG27.png'
  const homeSrc = '/src/assets/homepage.png'
  const findSrc = '/src/assets/note_default.png'
  const privateSrc = '/src/assets/myCenter_default.png'
  const title = '疫苗险微信H5 V2.0'
  const ref = useRef<HTMLDivElement>(null)

  const onButtonClick = useCallback(() => {
    toPng(ref.current!, { cacheBust: true })
      .then(dataUrl => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch(err => {
        console.log(err)
      })
    // html2canvas(ref.current!).then(function (canvas) {
    //   const img = canvas.toDataURL()
    //   console.log('img: ', img)
    // })
  }, [ref])

  return (
    <>
      <div className='home' ref={ref}>
        <div className='home-header'>
          <div className='home-box__title'>{title}</div>
        </div>
        <div className='home-content'>
          <div className='home-box'>
            <div className='home-box__bottom--top'>
              <img src={src} alt='' className='home-box__bottom--img' />
              <div className='home-box__bottom--right'>
                <img src={logoSrc} alt='' className='home-box__bottom--right__img' />
                <div className='home-box__bottom--right__title'>成长无忧疫苗保障计划</div>
                <div className='home-box__bottom--right__tip'>不限接种次数及疫苗类型儿童疫苗专属保障</div>
              </div>
            </div>
            <div className='home-box__bottom--btn' onClick={onButtonClick}>
              立即查看
            </div>
          </div>
        </div>
        <div className='home-box__tabber'>
          <div className='home-box__tabber--box'>
            <img src={homeSrc} alt='' className='img' />
            <div>首页</div>
          </div>
          <div className='home-box__tabber--box'>
            <img src={findSrc} alt='' className='img' />
            <div>发现</div>
          </div>
          <div className='home-box__tabber--box'>
            <img src={privateSrc} alt='' className='img' />
            <div>个人中心</div>
          </div>
        </div>
      </div>
    </>
  )
}
