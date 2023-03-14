import { useEffect } from 'react'
import { DragEvent, useRef, ClipboardEvent } from 'react'
import { BasicTargetType, getTargetElement } from 'utils/domTarget'

export interface DropOptions {
  // 拖拽/粘贴文字的回调
  onText?: (text: string, e: ClipboardEvent) => void
  // 拖拽/粘贴文件的回调
  onFiles?: (files: File[], e: DragEvent) => void
  // 拖拽/粘贴Uri的回调
  onUri?: (text: string, e: DragEvent) => void
  // 拖拽/粘贴Dom的回调
  onDom?: (content: any, e: DragEvent) => void
  // 拖拽/粘贴任意内容的回调
  onDrop?: (e: DragEvent) => void
  // 粘贴内容的回调
  onPaste?: (e: ClipboardEvent) => void
  // 拖拽进入回调
  onDragEnter?: (e: DragEvent) => void
  // 拖拽中
  onDragOver?: (e: DragEvent) => void
  // 拖拽离开
  onDragLeave?: (e: DragEvent) => void
}

/**
 *
 * @param target 被放置的目标元素
 * @param options 需要的回调函数选项
 * @returns
 */
export const useDrop = (target: BasicTargetType, options: DropOptions = {}) => {
  const optionsRef = useRef(options)
  const dragEnterTarget = useRef<EventTarget>()
  useEffect(() => {
    const el = getTargetElement(target)

    if (!el?.addEventListener) {
      return
    }

    const onData = (dataTransfer: DataTransfer, e: DragEvent | ClipboardEvent) => {
      const dom = dataTransfer.getData('custom')
      const uri = dataTransfer.getData('text/uri-list')

      if (uri && optionsRef.current.onUri) {
        optionsRef.current?.onUri(uri, e as DragEvent)
        return
      }

      if (optionsRef.current.onText && dataTransfer.types.includes('text/plain') && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(s => {
          optionsRef.current.onText!(s, e as ClipboardEvent)
        })
        return
      }

      if (optionsRef.current.onFiles && dataTransfer.files.length) {
        optionsRef.current.onFiles(Array.from(dataTransfer.files), e as DragEvent)
        return
      }

      // dataTransfer.types.includes('text/html') &&
      if (optionsRef.current.onDom && dom) {
        let Dom = dom
        try {
          Dom = JSON.parse(dom)
        } catch (e) {
          Dom = dom
        }
        optionsRef.current.onDom(Dom, e as DragEvent)
        return
      }
    }

    const onDrop = (e: DragEvent) => {
      e.preventDefault()
      onData(e.dataTransfer, e)
      optionsRef.current.onDrop?.(e)
    }

    /**粘贴不需要阻止默认 */
    const onPaste = (e: ClipboardEvent) => {
      onData(e.clipboardData, e)
      optionsRef.current.onPaste?.(e)
    }

    const onDragEnter = (e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      dragEnterTarget.current = e.target
      optionsRef.current.onDragEnter?.(e)
    }

    const onDragOver = (e: DragEvent) => {
      e.preventDefault()
      optionsRef.current.onDragOver?.(e)
    }

    const onDragLeave = (e: DragEvent) => {
      if (dragEnterTarget.current === e.target) {
        optionsRef.current.onDragLeave?.(e)
      }
    }

    el?.addEventListener('drop', onDrop as any)
    el?.addEventListener('paste', onPaste as any)
    el?.addEventListener('dragenter', onDragEnter as any)
    el?.addEventListener('dragover', onDragOver as any)
    el?.addEventListener('dragleave', onDragLeave as any)
    return () => {
      el.removeEventListener('drop', onDrop as any)
      el.removeEventListener('paste', onPaste as any)
      el.removeEventListener('dragstart', onDragEnter as any)
      el.removeEventListener('dragover', onDragOver as any)
      el.removeEventListener('dragleave', onDragLeave as any)
    }
  }, [])
}
