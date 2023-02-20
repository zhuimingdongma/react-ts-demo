import { ConfigProvider } from 'antd'
import React from 'react'
import HomeCard from './components/card/homeCard/index'
import Test from './test'

const Profile: React.FC = () => <img src='https://i.imgur.com/MK3eW3As.jpg' alt='' />

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Radio: {
          colorPrimary: '#00b96c'
        }
      },
      token: {
        colorPrimary: '#1677fd'
      }
      // algorithm: theme.darkAlgorithm
    }}
  >
    <Test></Test>
    <Profile></Profile>
    <Profile></Profile>
    <HomeCard></HomeCard>
  </ConfigProvider>
)

export default App
