import { Tab } from 'components/header'
import { useState } from 'react'
import './index.less'
import { subLabelList, subVal } from './data'
import store from '@/store'
import { setArchiveList } from '@/store/rank'

interface TabProps {
  items: Tab[]
  defaultActiveKey: string
  onChange: (key: string) => void
  onChangeSub?: (key: number) => void
}

export default function Tabs(props: TabProps): JSX.Element {
  const [currentKey, setCurrentKey] = useState(props.defaultActiveKey)
  const [currentSubKey, setSubKey] = useState<number>(1)
  let subLabel: subVal[] = []

  const changeTab = (key: string) => {
    setCurrentKey(current => (current = key))
    subLabel = subLabelList[currentKey]
  }

  const changeSub = (sub: number) => {
    setSubKey(currentKey => (currentKey = sub))
    store.dispatch(setArchiveList({ tId: sub }))
  }

  if (props.onChangeSub) subLabel = subLabelList[currentKey]

  return (
    <>
      <div className='tabs'>
        <div className='tabs-header flex'>
          {props.items.map((item, i) => {
            return (
              <>
                <div
                  className={`tabs-header__label flex ${currentKey === item.key ? 'tabs-header__label--active' : ''}`}
                  onClick={() => {
                    props.onChange(item.key)
                    changeTab(item.key)
                  }}
                  key={item.key}
                >
                  {item.label}
                </div>
              </>
            )
          })}
        </div>
        <div className='flex'>
          {subLabel &&
            subLabel.map(sub => {
              return (
                <div
                  className={`flex mr-10 ${currentSubKey == sub.key ? 'tabs-sub__active' : ''}`}
                  key={sub.key}
                  style={{ color: '#757575' }}
                  onClick={() => {
                    props.onChangeSub && props.onChangeSub(sub.key), changeSub(sub.key)
                  }}
                >
                  {sub.val}
                </div>
              )
            })}
        </div>
        <div className='tabs-content'>
          {props.items.map((tab, i) => {
            return <>{tab.key === currentKey ? <div key={i}>{tab.children}</div> : <div key={tab.key}></div>}</>
          })}
        </div>
      </div>
    </>
  )
}
