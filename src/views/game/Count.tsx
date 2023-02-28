import CountDown, { CountDownHandle } from './countDown'
import { useRef, useEffect } from 'react'

function App() {
  const CountRef = useRef<CountDownHandle>(null)
  useEffect(() => {
    CountRef.current?.start()
  }, [])
  return <CountDown ref={CountRef} age={5}></CountDown>
}
