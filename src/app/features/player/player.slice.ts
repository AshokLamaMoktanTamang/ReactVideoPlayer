import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IPlayerSlice } from 'types/player.slice'

const initialState: IPlayerSlice = {
    isFullscreen: false
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
  },
})

export const { 
} = playerSlice.actions

export default playerSlice.reducer