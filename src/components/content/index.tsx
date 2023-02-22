import React, { useEffect } from 'react'
import { getRankList } from './request'

const Content: React.FC = function () {
  useEffect(() => {
    const get = async () => {
      await getRankList()
    }
    get()
  }, [])

  return (
    <>
      <div>我的挚友啊</div>
    </>
  )
}

export default Content
