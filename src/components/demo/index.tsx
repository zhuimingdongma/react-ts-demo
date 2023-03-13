import { useState, useSyncExternalStore } from 'react'

// export function useOnlineState() {

//   const [state, setState] = useState(true);

//   function handleOnline() {
//     setState(true)
//   }

//   function handleOffline() {
//     setState(false)
//   }

//   window.addEventListener('online', handleOnline)
//   window.addEventListener('offline', handleOffline)
//   return () => {
//     window.removeEventListener('online', handleOnline)
//     window.removeEventListener('offline', handleOffline)
//   }
// }
function subscribe(callback: (this: Window, e: Event) => void) {
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)
  return () => {
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}

export function useOnlineState() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  )
}
