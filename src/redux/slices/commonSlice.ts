import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CommonState {
  value: number
  popupState: boolean
}

const initialState: CommonState = {
  value: 0,
  popupState: false,
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setPopup: (state, action: PayloadAction<boolean>) => {
      const value = action.payload
      return {
        ...state,
        popupState: value
      }
    }
  },
})

export const { setPopup } = commonSlice.actions

export default commonSlice.reducer
