import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Game from './views/game/index'
import Root from 'components/root/index'
import Contact from 'components/root/contact'
import './index.less'
import { setArchiveList, setRankClassifyList, setRankList } from './store/rank'
import store from 'store/index'
import Loading from 'components/loading'
import { subLabelList } from 'components/tab/data'

// @/App.tsx
const Header = lazy(() => import('@/components/header/index'))
const Chanel = lazy(() => import('@/views/home/index'))
const Test = lazy(() => import('components/test/hooks'))
const VideoPlayCard = lazy(() => import('components/card/videoCard/videoPlayCard'))
const Rank = lazy(() => import('@/views/rank/index'))
const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        path: 'channel/:channelId',
        element: <Chanel></Chanel>,
        loader: async ({ params }) => {
          let subKey = 0
          Object.keys(subLabelList).map(key => {
            if (params.channelId === key) {
              subKey = subLabelList[key][1].key
            }
          })
          store.dispatch(setArchiveList({ tId: subKey, p: 1 }))
          return store.dispatch(setRankList(Number(params.channelId)))
        }
      },
      {
        path: 'ranking/:rankId',
        element: <Rank></Rank>,
        loader: async ({ params }) => {
          return store.dispatch(setRankClassifyList(Number(params.rankId)))
        }
      },
      {
        path: 'play',
        element: <VideoPlayCard></VideoPlayCard>
      }
    ]
  },
  {
    path: 'game',
    element: <Game></Game>
  },
  {
    path: 'test',
    element: <Test></Test>
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
