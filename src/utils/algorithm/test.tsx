import * as React from 'react'
import { useState, useEffect } from 'react'

type Props = {
  label: string
  count: number
  increment: () => void
}

const Count: React.FC<Props> = ({ label, count, increment }: Props): JSX.Element => {
  return (
    <>
      <div>
        <span>
          {label}: {count}
        </span>
        <button onClick={() => increment()}>点击</button>
      </div>
    </>
  )
}

const CountDown: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  const onClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <Count label='嘟嘟嘟' count={count} increment={onClick}></Count>
    </>
  )
}
export default CountDown
