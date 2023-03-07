import { Tab } from 'components/header'
import { useState } from 'react'
import './index.less'

interface TabProps {
  items: Tab[]
  defaultActiveKey: string
  onChange: (key: string) => void
}

export default function Tabs(props: TabProps): JSX.Element {
  const [currentKey, setCurrentKey] = useState<string>(props.defaultActiveKey)

  const changeTab = (key: string) => {
    setCurrentKey(key)
  }

  return (
    <>
      <div className='tabs'>
        <div className='tabs-header flex'>
          {props.items.map((item, i) => {
            return (
              <>
                <div
                  className='tabs-header__label'
                  onClick={() => {
                    props.onChange(item.key)
                    changeTab(item.key)
                  }}
                  key={i}
                >
                  {item.label}
                </div>
                <div>
                  {item.subLabel?.map((sub, i) => {
                    return (
                      <div className='tabs-header__sub' key={i}>
                        {sub}
                      </div>
                    )
                  })}
                </div>
              </>
            )
          })}
        </div>
        <div className='tabs-content'>
          {props.items.map(tab => {
            return <>{tab.key === currentKey ? <div key={tab.key}>{tab.children}</div> : <div key={tab.key}></div>}</>
          })}
        </div>
      </div>
    </>
  )
}
