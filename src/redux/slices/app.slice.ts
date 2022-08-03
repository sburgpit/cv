import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../redux/store'

export interface AppState {
  currentHash: string | null
  isMobile: boolean
}

const initialState: AppState = {
  currentHash: null,
  isMobile: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentHash: (state, action: PayloadAction<string>) => {
      state.currentHash = action.payload
    },
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload
    },
  },
})

export const { setCurrentHash, setIsMobile } = appSlice.actions
export const selectCurrentHash = (state: RootState) => state.app.currentHash
export const selectIsMobile = (state: RootState) => state.app.isMobile

export default appSlice.reducer
