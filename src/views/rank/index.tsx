import './index.less'
import { getClassifyList } from '@/store/rank'
import { LeftOutlined } from '@ant-design/icons'
import RankContent from 'components/content/rank'
import { Tab } from 'components/header'
import { TabProps } from 'components/header/types'
import Tabs from 'components/tab/index'
import { useSelector } from 'react-redux'

export default function Rank(): JSX.Element {
  const rankList = useSelector(getClassifyList)

  const rankItems: TabProps[] = [
    {
      key: '1',
      label: '首页',
      children: RankContent(rankList)
    },
    {
      key: '33',
      label: '动画',
      children: RankContent(rankList)
    },
    {
      key: '167',
      label: '国创',
      children: RankContent(rankList)
    },
    {
      key: '3',
      label: '音乐',
      children: RankContent(rankList)
    }
    // {
    //   key: '1',
    //   label: '舞蹈',
    //   children: RankContent(rankList)
    // },
    // {
    //   key: '1',
    //   label: '游戏',
    //   children: RankContent(rankList)
    // },
    // {
    //   key: '1',
    //   label: '科技',
    //   children: RankContent(rankList)
    // },
    // {
    //   key: '1',
    //   label: '数码',
    //   children: RankContent(rankList)
    // },
    // {
    //   key: '1',
    //   label: '生活',
    //   children: RankContent(rankList)
    // }
  ]

  // const items: Tab[] = rankItems.map(tab => {
  //   return {
  //     label: tab.label!,
  //     key: tab.key!,
  //     children: tab.children,
  //     subLabel: tab.subLabel
  //   }
  // })

  return (
    <>
      <div className='rank'>
        <div className='rank-header flex between center '>
          <LeftOutlined style={{ color: '#fb7299', fontSize: '34px', marginLeft: '20px' }} />
          <span style={{ color: '#fb7299' }} className='rank-header__span'>
            排行榜
          </span>
        </div>
        <div className='rank-content'>
          <Tabs items={rankItems} defaultActiveKey='1' onChange={() => console.log(1)}></Tabs>
        </div>
      </div>
    </>
  )
}
