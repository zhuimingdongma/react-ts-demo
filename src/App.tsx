import { ConfigProvider } from 'antd'
import React, { Fragment } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import HomeCard from './components/card/homeCard/index'
import Logo from 'components/logo/index'

const Profile: React.FC = () => <img src='https://i.imgur.com/MK3eW3As.jpg' alt='' />

// const App: React.FC = () => (
//   <ConfigProvider
//     theme={{
//       components: {
//         Radio: {
//           colorPrimary: '#00b96c'
//         }
//       },
//       token: {
//         colorPrimary: '#1677fd'
//       }
//       // algorithm: theme.darkAlgorithm
//     }}
//   >
//         <Fragment>
//           <BrowserRouter>
//             <div>
//               <Route path='/' exact component={Home}></Route>
//               <Route path='/login' exact component={Login}></Route>
//               <Route path='/detail/:id' exact component={Detail}></Route>
//             </div>
//           </BrowserRouter>
//         </Fragment>
//   </ConfigProvider>
// )

// export default App

const router = createBrowserRouter([
  {
    path: '/',
    element: <Logo></Logo>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
