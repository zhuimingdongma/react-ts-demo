import React, { useState } from 'react'
import './index.less'

interface BoardProps {
  xIsNext: boolean
  square: any[]
  onPlay: (arr?: any[]) => void
}

interface SquareProps {
  value: string
  setValue: () => void
}

function Square({ value, setValue }: SquareProps): JSX.Element {
  return (
    <button className='square' onClick={() => setValue()}>
      {value}
    </button>
  )
}

function Board({ xIsNext, square, onPlay }: BoardProps): JSX.Element {
  const set = (i: number) => {
    if (square[i] || calculateWinner(square)) {
      return
    }
    const nextSquare = square.slice()
    if (xIsNext) {
      nextSquare[i] = 'X'
    } else {
      nextSquare[i] = 'O'
    }
    onPlay(nextSquare)
  }

  const winner = calculateWinner(square)

  let Status
  if (winner) {
    Status = 'Winner' + winner
  } else {
    Status = 'next Player' + `${xIsNext ? 'X' : 'O'}`
  }

  return (
    <>
      <div className='board'>
        <div className='board-status'>{Status}</div>
        <div className='flex'>
          <Square value={square[0]} setValue={() => set(0)}></Square>
          <Square value={square[1]} setValue={() => set(1)}></Square>
          <Square value={square[2]} setValue={() => set(2)}></Square>
        </div>
        <div className='flex'>
          <Square value={square[3]} setValue={() => set(3)}></Square>
          <Square value={square[4]} setValue={() => set(4)}></Square>
          <Square value={square[5]} setValue={() => set(5)}></Square>
        </div>
        <div className='flex'>
          <Square value={square[6]} setValue={() => set(6)}></Square>
          <Square value={square[7]} setValue={() => set(7)}></Square>
          <Square value={square[8]} setValue={() => set(8)}></Square>
        </div>
      </div>
    </>
  )
}

function Game(): JSX.Element {
  const [xIsNext, setXIsNext] = useState<boolean>(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  let currentSquare = history[history.length - 1]

  function handlePlay(arr: any[]) {
    setHistory([...history, arr])
    setXIsNext(!xIsNext)
  }

  const jumpTo = (item: any[]) => {
    currentSquare = item
  }

  const moves = history.map((item, index) => {
    let description: string = ''
    if (index === 0) {
      description = 'Go to game start'
    } else {
      description = `Go to move #${index}`
    }
    return (
      <li key={index} style={{ fontSize: '10px', marginBottom: '5px' }} onClick={() => jumpTo(item)}>
        <button>{description}</button>
      </li>
    )
  })

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} square={currentSquare} onPlay={handlePlay}></Board>
      </div>
      <div className='game-info'>{moves}</div>
    </div>
  )
}

function calculateWinner(square: any[]): string | null {
  const possible = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < possible.length; i++) {
    const [a, b, c] = possible[i]
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a]
    }
  }
  return null
}

export default Game
