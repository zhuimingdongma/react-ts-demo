import './home.less'
export interface SuspendProps {
  logo: string
  value: string
  target?: string
}

const base = 'http://localhost:5173/src/components/suspendedContent'
const SuspendList: SuspendProps[] = [
  {
    logo: `${base}/assets/fanjutuijian.png`,
    value: '番剧'
  },
  {
    logo: `${base}/assets/dianying.png`,
    value: '电影'
  },
  {
    logo: `${base}/assets/guochandonghuatuijian.png`,
    value: '国创'
  },
  {
    logo: `${base}/assets/dianshiju.png`,
    value: '电视剧'
  },
  {
    logo: `${base}/assets/zongyijiemu.png`,
    value: '综艺'
  },
  {
    logo: `${base}/assets/dianshiju.png`,
    value: '电视剧'
  },
  {
    logo: `${base}/assets/donghuapian.png`,
    value: '动画'
  },
  {
    logo: `${base}/assets/youxi.png`,
    value: '游戏'
  },
  {
    logo: `${base}/assets/guixu.png`,
    value: '鬼畜'
  },
  {
    logo: `${base}/assets/dianshiju.png`,
    value: '音乐'
  }
]

const SuspendOtherList: SuspendProps[] = [
  {
    logo: `${base}/assets/wudao.png`,
    value: '舞蹈'
  },
  {
    logo: `${base}/assets/yingshi-yuanwenjian.png`,
    value: '影视'
  },
  {
    logo: `${base}/assets/yule.png`,
    value: '娱乐'
  },
  {
    logo: `${base}/assets/zhishi.png`,
    value: '知识'
  },
  {
    logo: `${base}/assets/kejizhengce.png`,
    value: '科技'
  },
  {
    logo: `${base}/assets/zixunzhuanqu.png`,
    value: '资讯'
  },
  {
    logo: `${base}/assets/meishi.png`,
    value: '美食'
  },
  {
    logo: `${base}/assets/shenghuo.png`,
    value: '生活'
  },
  {
    logo: `${base}/assets/qiche.png`,
    value: '汽车'
  },
  {
    logo: `${base}/assets/shishang.png`,
    value: '时尚'
  }
]
import { Divider } from 'antd'

export default function SusPendHome(): React.ReactNode {
  return (
    <>
      <div className='flex home'>
        <div className='mr-10'>
          {SuspendList.map((item, i) => (
            <div className='flex center mb-10' key={i}>
              <img src={item.logo} alt='' className='img mr-5' />
              {item.value}
            </div>
          ))}
        </div>
        <Divider type='vertical' style={{ height: '310px' }}></Divider>
        <div className='mr-10'>
          {SuspendOtherList.map((item, i) => (
            <div className='flex center mb-10' key={i}>
              <img src={item.logo} alt='' className='img mr-5' />
              {item.value}
            </div>
          ))}
        </div>
        <Divider type='vertical' style={{ height: '310px' }}></Divider>
      </div>
    </>
  )
}
