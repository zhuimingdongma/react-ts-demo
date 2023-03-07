import { AxiosRequestConfig } from 'axios'

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  OPTIONS = 'OPTIONS',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export interface RequestConfig extends AxiosRequestConfig {
  methods: RequestMethod
}

export type Optional<T> = { [K in keyof T]?: T[K] }
