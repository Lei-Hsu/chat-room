import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    getSaga: () => { },
    setSaga: (state, action: PayloadAction<number>) => {
      const assignState = state
      assignState.value = action.payload
    }
  },
})

export const { increment, decrement, incrementByAmount, setSaga, getSaga } = counterSlice.actions

export default counterSlice.reducer
