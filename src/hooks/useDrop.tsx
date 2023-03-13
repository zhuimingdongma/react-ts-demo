import { DragEvent, useRef } from 'react'
import { BasicTargetType, getTargetElement } from 'utils/domTarget'

export interface DropOptions {
  onText: (e: DragEvent) => void
}

export function useDrop(target: BasicTargetType, options: DropOptions) {
  const el = getTargetElement(target)
  const optionsRef = useRef(options)

  el?.addEventListener('drop', optionsRef.current.onText as any)
}
