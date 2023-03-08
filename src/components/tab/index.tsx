import { Tab } from 'components/header'
import { useState } from 'react'
import './index.less'
import { subLabelList } from './data'

interface TabProps {
  items: Tab[]
  defaultActiveKey: string
  onChange: (key: string) => void
}

export default function Tabs(props: TabProps): JSX.Element {
  const [currentKey, setCurrentKey] = useState(props.defaultActiveKey)
  const [currentSubKey, setSubKey] = useState<string>('推荐')
  let subLabel: string[] = ['']

  const changeTab = (key: string) => {
    setCurrentKey(current => (current = key))
    subLabel = subLabelList[currentKey]
  }

  const changeSub = (sub: string) => {
    setSubKey(currentKey => (currentKey = sub))
  }

  subLabel = subLabelList[currentKey]

  return (
    <>
      <div className='tabs'>
        <div className='tabs-header flex'>
          {props.items.map((item, i) => {
            return (
              <>
                <div
                  className='tabs-header__label flex'
                  onClick={() => {
                    props.onChange(item.key)
                    changeTab(item.key)
                  }}
                  key={i}
                >
                  {item.label}
                </div>
              </>
            )
          })}
        </div>
        <div className='flex'>
          {subLabel &&
            subLabel.map((sub, i) => {
              return (
                <div
                  className={`flex mr-10 ${currentSubKey == sub ? 'tabs-sub__active' : ''}`}
                  key={i}
                  style={{ color: '#757575' }}
                  onClick={() => changeSub(sub)}
                >
                  {sub}
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
