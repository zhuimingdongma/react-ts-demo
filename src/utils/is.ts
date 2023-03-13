export function is(value: unknown): string {
  return Object.prototype.toString.call(value).split('')[1].replace(']', '')
}

export const isFunction = (value: unknown): value is (...args: any) => any => typeof value === 'function'
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'
export const isNumber = (value: unknown): value is number => typeof value === 'number'
export const isString = (value: unknown): value is string => typeof value === 'string'
export const isUndef = (value: undefined): value is undefined => typeof value === 'undefined'
export const isBrowser = !!(window !== undefined && window.document && window.document.createElement)
