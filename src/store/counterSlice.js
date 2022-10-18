import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      if (state.count > 0) {
        state.count--;
      }
    },
    increaseBy(state, action) {
      state.count = state.count + action.payload;
    },
    decreaseBy(state, action) {
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, decrement, increaseBy, decreaseBy } =
  counterSlice.actions;

export default counterSlice.reducer;
