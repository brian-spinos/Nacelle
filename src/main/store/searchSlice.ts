import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SeachState, SearchResult } from "./storeInterfaces";
import { searchData } from "./searchData";

let initialState: SeachState = {
  value: 0,
  query: "",
  results: [],
  searchData: searchData,
  isLoading: false,
  error: "",
};

// ===================== Async thunks

export const fetchData = createAsyncThunk<SearchResult[], string>(
  "search/getByQuery",
  async (query: string): Promise<SearchResult[]> => {
    // Simulate API delay
    const API_DELAY = 300;
    await new Promise((resolve) => setTimeout(resolve, API_DELAY));

    if (query.trim() === "") return [];

    if (query.trim() === "ERROR") throw new Error("Fake API Error");

    const filteredSearchData = searchData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    return filteredSearchData;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },

    //

    setQuery: (state, action) => {
      state.query = action.payload;
    },
    clearQuery: (state) => {
      state.query = "";
      state.results = [];
      state.error = "";
    },
    search: (state, action) => {
      const searchData = state.searchData;
      const query = action.payload;
      state.query = query;

      const filteredSearchData = searchData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );

      state.results = filteredSearchData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "ERROR";
      });
  },
});

export const { search, setQuery, clearQuery } = searchSlice.actions;
export default searchSlice.reducer;
