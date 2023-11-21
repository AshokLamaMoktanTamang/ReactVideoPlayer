import { configureStore } from '@reduxjs/toolkit'

import {progressReducer, playerReducer} from './features'

export const store = configureStore({
  reducer: {
    progress: progressReducer,
    player: playerReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch