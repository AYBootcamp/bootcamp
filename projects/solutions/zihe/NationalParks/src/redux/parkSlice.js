import { createSlice } from '@reduxjs/toolkit';
import { url, LIMIT } from '../constants';

export const parkSlice = createSlice({
    name: 'park',
    initialState: {
        parkListNames: [],
        parkListPics: [],
        clickParkName: '',
        Numbers: 0,
        pages: 0,
        Url: url,
    },
    reducers: {
        setParkListNames: (state, action) => {
            state.parkListNames = action.payload
        },
        setParkListPics: (state, action) => {
            state.parkListPics = action.payload
        },
        setClickParkName: (state, action) => {
            state.clickParkName = action.payload
        },
        setNumbers: (state, action) => {
            state.Numbers = action.payload
        },
        setPages: (state, action) => {
            state.pages = action.payload
        },
        setUrl: (state) => {
            let startPage = state.pages * LIMIT;
            state.Url = `${url}&start=${startPage}`
        },
    }
})

export const { setParkListNames, setParkListPics, setClickParkName, setNumbers, setPages, setUrl } = parkSlice.actions;
export default parkSlice.reducer;