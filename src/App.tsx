import { ConfigProvider } from 'antd'
import React from 'react'
import HomeCard from './components/card/homeCard/index'

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
    <HomeCard></HomeCard>
  </ConfigProvider>
)

export default App
