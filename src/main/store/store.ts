import { configureStore } from "@reduxjs/toolkit";

import exampleReducer from "./exampleSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    example: exampleReducer,
    search: searchReducer,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
