import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {IProgressSlice} from 'types/progress.slice'

const initialState: IProgressSlice = {
  currentTime: 0,
  duration: 0,
  playing: false,
  seeking: false
}

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setDuration: (state, actions: PayloadAction<number>) => {
        state.duration = actions.payload
    },
    setCurrentTime: (state, actions: PayloadAction<number>) => {
      state.currentTime = actions.payload
    },
    setSeeking: (state, actions: PayloadAction<boolean>) => {
      state.seeking = actions.payload
    },
    setPlaying: (state, actions: PayloadAction<boolean>) => {
      state.playing = actions.payload
    },
  },
})

export const { 
    setDuration, 
    setCurrentTime,
    setSeeking,
    setPlaying
} = progressSlice.actions

export default progressSlice.reducer