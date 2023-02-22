import { AxiosRequestConfig } from 'axios'

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  OPTIONS = 'OPTIONS',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export interface RequestType {
  web?: string
  x?: string
}

export interface RequestConfig extends AxiosRequestConfig {
  method?: RequestMethod
  requestType: RequestType
}
