import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import Chanel from './views/home/index'
import Game from './views/game/index'
import Root from 'components/root/index'
import Contact from 'components/root/contact'
import './index.less'
import { setAnimateMADList, setRankList } from './store/rank'
import store from 'store/index'
import Loading from 'components/loading'

// @/App.tsx
const Chanel = lazy(() => import('@/views/home/index'))
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
    path: 'channel/:channelId',
    element: <Chanel></Chanel>,
    loader: async ({ params }) => {
      // if (
      //   params.channelId === '1' ||
      //   params.channelId === '167' ||
      //   params.channelId === '3' ||
      //   params.channelId === '129' ||
      //   params.channelId === '4' ||
      //   params.channelId === '36' ||
      //   params.channelId === '188' ||
      //   params.channelId === '160' ||
      //   params.channelId === '119'
      // ) {
      //   store.dispatch(setRankList(Number()))
      // }
      // store.dispatch(setAnimateMADList({ tId: 24, p: 1 }))
      return store.dispatch(setRankList(Number(params.channelId)))
    }
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<Loading />}>
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  </Suspense>
)

// const setRem = () => {
//   const design = 750
//   const ratio = (window.screen.width / design) * 100
//   const HTML = document.getElementsByTagName('html')[0]
//   HTML.style.fontSize = ratio + 'px'

//   window.addEventListener('resize', setRem)
//   window.addEventListener('DOMContentLoaded', setRem)
// }

// setRem()
