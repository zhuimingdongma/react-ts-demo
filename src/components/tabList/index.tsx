import { Tabs } from 'antd'
import React from 'react'

export interface tabProps<T> {
  data: T[]
}

export interface tabData {
  id: number
  name: string
  children: React.ReactNode
}

const TabList: React.FC<tabProps<tabData>> = ({ data }) => (
  <>
    <Tabs
      defaultActiveKey='1'
      tabPosition='top'
      style={{ height: 220 }}
      items={data.map((_, i) => {
        const id = String(i)
        return {
          label: `${_.name}`,
          key: id,
          children: _.children
        }
      })}
    />
  </>
)

export default TabList
