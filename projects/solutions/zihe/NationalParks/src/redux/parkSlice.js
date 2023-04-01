import { createSlice } from '@reduxjs/toolkit';
import { URL, LIMIT } from '../constants';

export const parkSlice = createSlice({
    name: 'park',
    initialState: {
        clickParkName: '',
        numbers: 0,
        pages: 0,
        url: URL,
        data: [],
        details: [],
        isLoading: true,
        searchTerm: '',
        searchResults: [],
        allParks: [],
    },
    reducers: {
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
            state.url = `${URL}&start=${startPage}&limit=${LIMIT}`;
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
        setAllParks: (state, action) => {
            state.allParks = action.payload;
        }
    }
});

export const {
    setClickParkName,
    setNumbers,
    setPages,
    setUrl,
    setData,
    setDetails,
    setIsLoading,
    setSearchTerm,
    setSearchResults,
    setAllParks,
} = parkSlice.actions;
export default parkSlice.reducer;