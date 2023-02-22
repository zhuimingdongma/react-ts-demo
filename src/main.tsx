import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Header from 'components/header/index'
import Home from './views/home/index'
import './index.less'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
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
