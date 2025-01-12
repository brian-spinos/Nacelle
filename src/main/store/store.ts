import { configureStore } from "@reduxjs/toolkit";

import exampleReducer from "./exampleSlice";
import searchReducer from "./searchSlice";
import notificationReducer from "./notificationSlice";

const store = configureStore({
  reducer: {
    example: exampleReducer,
    search: searchReducer,
    notification: notificationReducer,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
