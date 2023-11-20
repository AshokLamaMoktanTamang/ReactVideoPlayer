import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {IProgressSlice} from 'types/progress.slice'

const initialState: IProgressSlice = {
  currentTime: 0,
  duration: 0,
  playing: false
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
    }
  },
})

export const { 
    setDuration, 
    setCurrentTime
} = progressSlice.actions

export default progressSlice.reducer