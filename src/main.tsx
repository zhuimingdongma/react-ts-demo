import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Header from 'components/header/index'
import Home from './views/home/index'
import Game from './views/game/index'
import Root from 'components/root/index'
import Contact from 'components/root/contact'
import CounterExample from 'utils/algorithm/test'
import Login from './views/login'
import './index.less'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: 'contact/:contactId',
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: 'game',
    element: <Game></Game>
  },
  {
    path: 'test',
    element: <CounterExample></CounterExample>
  },
  {
    path: 'login',
    element: <Login></Login>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

const setRem = () => {
  const design = 750
  const ratio = (window.screen.width / design) * 100
  const HTML = document.getElementsByTagName('html')[0]
  HTML.style.fontSize = ratio + 'px'

  window.addEventListener('resize', setRem)
  window.addEventListener('DOMContentLoaded', setRem)
}

setRem()
