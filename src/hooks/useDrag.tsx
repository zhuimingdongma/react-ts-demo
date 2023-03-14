import { useEffect, DragEvent, useRef } from 'react'
import { BasicTargetType, getTargetElement } from 'utils/domTarget'

export interface DragOptions {
  onDragStart: (e: DragEvent) => void
  onDragEnd: (e: DragEvent) => void
}

export function useDrag<T>(data: T, target: BasicTargetType, option: DragOptions) {
  const optionRef = useRef(option)
  const dataRef = useRef(data)

  useEffect(() => {
    const el = getTargetElement(target)

    if (!el?.addEventListener) {
      return
    }

    const onDragStart = (e: DragEvent) => {
      optionRef.current.onDragStart(e)
      e.dataTransfer.setData('custom', JSON.stringify(dataRef.current))
    }

    const onDragEnd = (e: DragEvent) => {
      optionRef.current.onDragEnd(e)
    }

    el?.setAttribute('draggable', 'true')

    el?.addEventListener('dragstart', onDragStart as any)
    el?.addEventListener('dragend', onDragEnd as any)

    return () => {
      el?.removeEventListener('dragstart', onDragStart as any), el?.removeEventListener('dragend', onDragEnd as any)
    }
  }, [])
}
