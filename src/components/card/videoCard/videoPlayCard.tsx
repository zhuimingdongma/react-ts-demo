import './video.less'
import barrage from './assets/barrage.png'
import full from './assets/full.png'

export default function VideoPlayCard() {
  return (
    <div className='video'>
      <div className='video-wrap'>
        <video
          controls
          preload='metadata'
          src='https://cn-hk-eq-bcache-02.bilivideo.com/upgcxcode/82/60/1052596082/1052596082-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1678784005&gen=playurlv2&os=bcache&oi=1743077648&trid=00008f60efc78ee747ff891a8a4acb28f83bh&mid=0&platform=html5&upsig=8bd743e4ee02968908f0e659406d36a3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=9596&bvc=vod&nettype=0&bw=48739&logo=80000000'
        ></video>
      </div>
    </div>
  )
}
