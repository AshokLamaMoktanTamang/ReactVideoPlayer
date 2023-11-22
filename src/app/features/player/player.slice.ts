import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IPlayerSlice } from 'types/player.slice'

const initialState: IPlayerSlice = {
  isFullscreen: false,
  audios: [],
  qualities: [],
  subtitles: []
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setFullScreen: (state, actions: PayloadAction<boolean>) => {
      state.isFullscreen = actions.payload
    },
    setSubtitles: (state, actions: PayloadAction<Array<string>>) => {
      state.subtitles = actions.payload
    },
    setQualities: (state, actions: PayloadAction<Array<string>>) => {
      state.qualities = actions.payload
    },
    setAudios: (state, actions: PayloadAction<Array<string>>) => {
      state.audios = actions.payload
    },
  },
})

export const {
  setAudios,
  setFullScreen,
  setQualities,
  setSubtitles
} = playerSlice.actions

export default playerSlice.reducer