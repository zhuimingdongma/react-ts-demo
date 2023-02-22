import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from 'components/header'
import TabList, { tabData, tabProps } from 'components/tabList'
import Content from 'components/content'

const arr: tabData[] = [
  { id: 1, name: '首页', children: <Content></Content> },
  { id: 2, name: '动画', children: <Content></Content> },
  { id: 3, name: '国创', children: <Content></Content> },
  { id: 4, name: '音乐', children: <Content></Content> },
  { id: 5, name: '舞蹈', children: <Content></Content> }
]

export default function Page() {
  return (
    <>
      <Header></Header>
      <TabList data={arr}></TabList>
    </>
  )
}
