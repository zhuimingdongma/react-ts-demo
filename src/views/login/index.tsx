import { generateQR_code } from './request/index'
import { useEffect } from 'react'
import biliAPI from '../../../node_modules/bili-api/index'
export default function Login() {
  useEffect(() => {
    // generateQR_code()
  }, [])
  return <></>
}

// const biliAPI = require('bili-api')
;(async () => {
  let up = await biliAPI({ mid: 349991143 }, ['follower'])
  up.follower // → 869332
})()
