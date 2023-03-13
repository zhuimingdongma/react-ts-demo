import { useEffect, useState } from 'react'
import { BasicTargetType, getTargetElement } from 'utils/domTarget'
export interface IntersectionOptions {
  // 根元素
  root?: HTMLElement | null
  // 根元素外边距
  rootMargin?: string
  // target 元素和 root 元素相交程度达到该值的时候 ratio 会被更新
  thresholds?: number[]
}

export function useIntersectionObserver(target: BasicTargetType<Element>, options?: IntersectionOptions) {
  const [ratio, setRatio] = useState<number>()
  const [state, setState] = useState<boolean>()

  useEffect(() => {
    let element = getTargetElement(target)
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        for (let entry of entries) {
          setRatio(entry.intersectionRatio)
          setState(entry.isIntersecting)
        }
      },
      {
        ...options,
        ...getTargetElement(options?.root)
      }
    )

    observer.observe(element as Element)

    return () => {
      observer.unobserve(element as Element), observer.disconnect(), ratio, state
    }
  }, [options?.rootMargin, options?.thresholds])

  return [state, ratio] as const
}
