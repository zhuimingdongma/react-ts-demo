import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { ImageProps } from 'antd'
import { ImgHTMLAttributes, LegacyRef, useRef } from 'react'
import { BasicTargetType } from 'utils/domTarget'

interface Options extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'click'> {
  src: string
}

export function Image({ src, placeholder, className, loading, alt }: Options): JSX.Element {
  const ImageRef = useRef<HTMLImageElement>(null)
  const [state] = useIntersectionObserver(ImageRef)
  if (state && ImageRef.current) ImageRef.current.src = src
  return (
    <>
      <img src={src} alt={alt} placeholder={placeholder} ref={ImageRef} className={className} loading={loading} />
    </>
  )
}
