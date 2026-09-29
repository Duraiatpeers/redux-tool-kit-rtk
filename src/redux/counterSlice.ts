import {
  createSlice,
  type PayloadAction
} from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0
  },

  reducers: {
    increment: (state) => {
      state.count++;
    },

    decrement: (state) => {
      state.count--;
    },

    reset: (state) => {
      state.count = 0;
    },

    incrementBy: (
      state,
      action: PayloadAction<number>
    ) => {
      state.count += action.payload;
    }
  }
});

export const {
  increment,
  decrement,
  reset,
  incrementBy
} = counterSlice.actions;

export default counterSlice.reducer;