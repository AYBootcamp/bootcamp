import { createSlice } from '@reduxjs/toolkit';
import { URL, LIMIT } from '../constants';

export const parkSlice = createSlice({
  name: 'park',
  initialState: {
    parkListNames: [],
    parkListPics: [],
    clickParkName: '',
    numbers: 0,
    pages: 0,
    url: URL,
    data: [],
    details: [],
    isLoading: true,
    searchTerm: '',
    searchResults: [],
    searchAllNames: [],
  },
  reducers: {
    setParkListNames: (state, action) => {
      state.parkListNames = action.payload;
    },
    setParkListPics: (state, action) => {
      state.parkListPics = action.payload;
    },
    setClickParkName: (state, action) => {
      state.clickParkName = action.payload;
    },
    setNumbers: (state, action) => {
      state.numbers = action.payload;
    },
    setPages: (state, action) => {
      state.pages = action.payload;
    },
    setUrl: (state) => {
      let startPage = state.pages * LIMIT;
      state.url = `${URL}&start=${startPage}`;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setSearchAllNames: (state, action) => {
      state.searchAllNames = action.payload;
    },
  }
});

export const {
  setParkListNames,
  setParkListPics,
  setClickParkName,
  setNumbers,
  setPages,
  setUrl,
  setData,
  setDetails,
  setIsLoading,
  setSearchTerm,
  setSearchResults,
  setSearchAllNames,
} = parkSlice.actions;
export default parkSlice.reducer;