import { MutableRefObject } from 'react'
import { isBrowser, isFunction } from './is'
export type TargetValue<T> = T | null | undefined
export type TargetType = HTMLElement | Element | Document | Window
export type BasicTargetType<T extends TargetType = Element> = TargetValue<T> | (() => TargetValue<T>) | MutableRefObject<TargetValue<T>>

export function getTargetElement<T extends TargetType>(target: BasicTargetType<T>, defaultElement?: Element) {
  if (!isBrowser) {
    return
  }
  if (!target) {
    return defaultElement
  }

  let targetElement: TargetValue<T>
  if (isFunction(target)) {
    targetElement = target()
  } else if ('current' in target) {
    targetElement = target.current
  } else {
    targetElement = target
  }

  return targetElement
}
