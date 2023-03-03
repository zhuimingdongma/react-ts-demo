import { configureStore } from '@reduxjs/toolkit'
import rankStore from './rank'

const store = configureStore({
  reducer: {
    rankStore
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
