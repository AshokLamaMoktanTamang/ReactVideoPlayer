import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IPlayerSlice } from 'types/player.slice'

const initialState: IPlayerSlice = {
  isFullscreen: false
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setFullScreen: (state, actions: PayloadAction<boolean>) => {
      state.isFullscreen = actions.payload
    },
  },
})

export const {
  setFullScreen
} = playerSlice.actions

export default playerSlice.reducer