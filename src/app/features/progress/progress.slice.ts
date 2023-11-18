import { createSlice } from '@reduxjs/toolkit'
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
    setDuration: (state, actions) => {
        state.duration = actions.payload
    }
  },
})

export const { 
    setDuration, 
} = progressSlice.actions

export default progressSlice.reducer