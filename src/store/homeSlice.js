import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'home',
  initialState : {
    url: {},
    genras: {}
  },
  reducers: {
    getApiConfiguration : (state, action)=>{
        state.url = action.payload
    },
    getGenras : (state, action)=>{
        state.genras = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer