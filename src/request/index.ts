import { AxiosInstance } from 'axios'
import { RequestConfig } from './request'
import { message } from 'antd'
import axios from 'axios'

class Http {
  instance: AxiosInstance

  constructor(requestConfig: RequestConfig) {
    const baseURL = requestConfig?.requestType?.web ? '/web' : '/x'
    // const timestamp = Date.now()
    // let cache = { timestamp }
    // let params = { ...requestConfig?.params, ...cache }
    // if (!requestConfig.method) requestConfig.method = 'GET'
    // contentType: requestConfig.method === 'GET' ? 'application/x-www-form-urlencoded' : 'application/json',
    this.instance = axios.create({
      ...requestConfig,
      baseURL,
      timeout: 3000,
      withCredentials: true
    })

    this.instance.interceptors.request.use(
      config => {
        const token = localStorage.getItem('token') as string
        if (token) {
          config.headers!.Authorization = token
        }
        return config
      },
      err => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      res => {
        return res
      },
      err => {
        let info = ''
        switch (err.response.status) {
          case 400:
            info = '请求错误(400)'
            break
          case 401:
            info = '未授权，请重新登录(401)'
            // 这里可以做清空storage并跳转到登录页的操作
            break
          case 403:
            info = '拒绝访问(403)'
            break
          case 404:
            info = '请求出错(404)'
            break
          case 408:
            info = '请求超时(408)'
            break
          case 500:
            info = '服务器错误(500)'
            break
          case 501:
            info = '服务未实现(501)'
            break
          case 502:
            info = '网络错误(502)'
            break
          case 503:
            info = '服务不可用(503)'
            break
          case 504:
            info = '网络超时(504)'
            break
          case 505:
            info = 'HTTP版本不受支持(505)'
            break
          default:
            info = `连接出错(${err.response.status})!`
        }
        message.error(info, 2)
      }
    )
  }

  public GET<T>(url: string, config?: RequestConfig): Promise<T> {
    return this.instance.get(url, config)
  }

  public POST<T>(url: string, data: T, config?: RequestConfig): Promise<T> {
    return this.instance.post(url, data, config)
  }
}

export default new Http({})
