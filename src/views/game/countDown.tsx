import { forwardRef, useImperativeHandle } from 'react'

export type CountDownHandle = {
  start: () => void
  stop?: () => void
}

type CountDownProps = {
  age: number
}

const CountDown = forwardRef<CountDownHandle, CountDownProps>((props, ref) => {
  useImperativeHandle(ref, () => ({
    start() {
      alert('Start')
    },
    stop() {
      console.log('Stop')
      console.log(props.age)
    }
  }))
  return <div>CountDown</div>
})
export default CountDown

interface Props {
  children?: React.ReactNode
  type: 'submit' | 'button'
}

type Ref = HTMLButtonElement
const FancyButton = forwardRef<Ref, Props>((props, ref) => (
  <button type={props.type} ref={ref}>
    {props.children}
  </button>
))
