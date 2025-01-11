import { configureStore } from "@reduxjs/toolkit";

import exampleReducer from "./exampleSlice";

const store = configureStore({
  reducer: {
    example: exampleReducer,
    // Add other reducers here
  },
});

export default store;
