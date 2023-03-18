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
    parkDetails: {
      description: '',
      topics: [],
      url: '',
      states: '',
      city: '',
      directionsInfo: '',
      directinsUrl: '',
      activities: [],
      phones: [],
      emails: [],
      weatherInfo: '',
      addresses: [],
      entranceFees: [],
      entrancePasses: [],
      imgs: [],
    },
    data: [],
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
    setParkDetails: (state, action) => {
      state.parkDetails.description = action.payload.description;
      state.parkDetails.topics = action.payload.topics;
      state.parkDetails.url = action.payload.url;
      state.parkDetails.states = action.payload.states;
      state.parkDetails.city = action.payload.addresses[0].city;
      state.parkDetails.directionsInfo = action.payload.directionsInfo;
      state.parkDetails.directionsUrl = action.payload.directionsUrl;
      state.parkDetails.activities = action.payload.activities;
      state.parkDetails.phones = action.payload.contacts.phoneNumbers;
      state.parkDetails.emails = action.payload.contacts.emailAddresses;
      state.parkDetails.weatherInfo = action.payload.weatherInfo;
      state.parkDetails.addresses = action.payload.addresses;
      state.parkDetails.entranceFees = action.payload.entranceFees;
      state.parkDetails.entrancePasses = action.payload.entrancePasses;
      state.parkDetails.imgs = action.payload.images;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  setParkListNames,
  setParkListPics,
  setClickParkName,
  setNumbers,
  setPages,
  setUrl,
  setParkDetails,
  setData,
} = parkSlice.actions;
export default parkSlice.reducer;
