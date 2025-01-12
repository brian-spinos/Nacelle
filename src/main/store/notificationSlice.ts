import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  //   SeachState,
  //   SearchResult,
  NotificationState,
  Notification,
} from "./storeInterfaces";
// import { searchData } from "./searchData";
import { notificationData } from "./NotificationData";
import { RootState } from "./store";

let initialState: NotificationState = {
  notifications: [],
};

// ===================== Async thunks

export const fetchData = createAsyncThunk<Notification[]>(
  "search/fetchData",
  async (): Promise<Notification[]> => {
    // Simulate API delay
    const API_DELAY = 300;
    await new Promise((resolve) => setTimeout(resolve, API_DELAY));

    return notificationData;
  }
);

export const saveNotification = createAsyncThunk<
  Notification[],
  Notification,
  { state: RootState }
>(
  "search/saveNotification",
  async (
    newNotification: Notification,
    { getState }
  ): Promise<Notification[]> => {
    // Simulate API delay
    const API_DELAY = 300;
    await new Promise((resolve) => setTimeout(resolve, API_DELAY));

    const currentState = getState();
    const existingNotifications = currentState.notification.notifications; // Adjust according to your state shape

    return [...existingNotifications, newNotification];
  }
);

export const deleteNotification = createAsyncThunk<
  Notification[],
  string,
  { state: RootState }
>(
  "search/deleteNotification",
  async (id: string, { getState }): Promise<Notification[]> => {
    // Simulate API delay
    const API_DELAY = 300;
    await new Promise((resolve) => setTimeout(resolve, API_DELAY));

    const currentState = getState();
    const existingNotifications = currentState.notification.notifications; // Adjust according to your state shape

    return existingNotifications.filter((item) => item.id !== id);
  }
);

const notificationSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // setValue: (state, action) => {
    //   state.value = action.payload;
    // },
    //
    // setQuery: (state, action) => {
    //   state.query = action.payload;
    // },
    // clearQuery: (state) => {
    //   state.query = "";
    //   state.results = [];
    //   state.error = "";
    // },
    // search: (state, action) => {
    //   const searchData = state.searchData;
    //   const query = action.payload;
    //   state.query = query;
    //   const filteredSearchData = searchData.filter((item) =>
    //     item.title.toLowerCase().includes(query.toLowerCase())
    //   );
    //   state.results = filteredSearchData;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.notifications = action.payload;
        // state.isLoading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.error.message || "ERROR";
      })

      //

      .addCase(saveNotification.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(saveNotification.fulfilled, (state, action) => {
        state.notifications = action.payload;
        // state.isLoading = false;
      })
      .addCase(saveNotification.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.error.message || "ERROR";
      })

      //

      .addCase(deleteNotification.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(deleteNotification.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.notifications = action.payload;
      })
      .addCase(deleteNotification.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.error.message || "ERROR";
      });
  },
});

// export const { search, setQuery, clearQuery } = notificationSlice.actions;
export default notificationSlice.reducer;
