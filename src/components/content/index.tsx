import React, { useEffect } from 'react'
// import { getCountryList } from './request'

const Content: React.FC = function () {
  useEffect(() => {
    const get = async () => {
      // await getCountryList()
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
