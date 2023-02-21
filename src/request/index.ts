import { AxiosInstance } from 'axios'
import { RequestConfig } from './request'
import { message } from 'antd'
import axios from 'axios'
const cookie =
  '__csrf=7a86c6f5e0b513d36a189f2dc4935ad6; MUSIC_U=6c5a3400f94b182ecff48ee1024481b3a08e0cf496cbf707d42dd53d639de9ec993166e004087dd30dd438f50efa92ad85065614c714c7984212e99934878fa7a58661eb15d42c62a0d2166338885bd7; NMTID=00OIVLLNV4juaGHUUSPoN_0fIt6HTIAAAGGTpWn0g'
const baseURL = 'http://localhost:4000'

class Http {
  instance: AxiosInstance

  constructor(requestConfig: RequestConfig) {
    const timestamp = Date.now()
    let cache = { params: { timestamp } }
    let params = { ...requestConfig?.params, ...cache }
    let headers = { contentType: requestConfig.method === 'GET' ? 'application/x-www-form-urlencoded' : 'application/json', cookie }
    this.instance = axios.create({
      ...requestConfig,
      headers,
      baseURL,
      timeout: 3000,
      withCredentials: true,
      params
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

  public GET<T>(url: string, config: RequestConfig): Promise<T> {
    return this.instance.get(url, config)
  }

  public POST<T>(url: string, data: T, config: RequestConfig): Promise<T> {
    return this.instance.post(url, data, config)
  }
}

export default new Http({})
