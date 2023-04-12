import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { keyBy } from 'lodash'

import { DISPLAY_COUNT } from '../components/ParkGridView'
// import mockParkData from '../mocks/parks.json'
import FetchStatus from '../types/FetchStatus'
import Pagination from '../types/Pagination'
import { Park } from '../types/Park'
import { ParkResponse } from '../types/ParkResponse'
import { RootState } from './store'

// Async thunk
export const fetchParks = createAsyncThunk(
    'parks/fetchParks',
    async ({ pageNumber }: { pageNumber: number }) => {
        // Fetch requests
        const fetchRequest = async () =>
            await fetch(
                'https://developer.nps.gov/api/v1/parks?' +
                    new URLSearchParams({
                        api_key: 'kdhe0gpIVlUBrGqqO9PzhWnh3DMy3cD3Nr1mAlrk',
                        limit: `${DISPLAY_COUNT}`,
                        start: `${(pageNumber - 1) * DISPLAY_COUNT}`,
                    }).toString()
            )
        const response = await (await fetchRequest()).json()
        return response as ParkResponse
    },
    {
        condition: (args, { getState, extra }) => {
            const { fetchStatus, pagination } = (getState() as RootState).parks
            if (pagination.pageToData[args.pageNumber]) {
                // if page is loaded previously, don't fetch
                return false
            }
            if (fetchStatus === FetchStatus.Loading) {
                return false // do not fire fetch request if loading
            }
        },
    }
)

// Define a type for the slice state
export interface ParksState {
    fetchStatus: FetchStatus
    data: Record<Park['id'], Park>
    pagination: Pagination
}

// Define the initial state using that type
const initialState: ParksState = {
    fetchStatus: FetchStatus.Initial,
    data: {},
    pagination: {
        total: 0,
        start: 0,
        current: 1,
        limit: DISPLAY_COUNT, // this is fixed number: get 25 items per request
        pageToData: {},
    },
}

export const parksSlice = createSlice({
    name: 'parks',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.pagination.current = action.payload * DISPLAY_COUNT
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchParks.pending, (state, action) => {
            state.fetchStatus = FetchStatus.Loading
        })
        builder.addCase(fetchParks.rejected, (state, action) => {
            state.fetchStatus = FetchStatus.Rejected
        })
        builder.addCase(fetchParks.fulfilled, (state, action) => {
            const pageNumber = action.meta.arg.pageNumber

            state.fetchStatus = FetchStatus.Fulfilled
            state.data = { ...state.data, ...keyBy(action.payload.data, 'id') }
            state.pagination = {
                ...state.pagination,
                current: pageNumber * DISPLAY_COUNT,
                total: parseInt(action.payload.total),
                pageToData: {
                    ...state.pagination.pageToData,
                    [pageNumber]: action.payload.data,
                },
            }
        })
    },
})

export const getParkByIdSelector = (state: RootState, id: Park['id']) =>
    state.parks.data[id]

export const isDataLoading = (state: RootState) =>
    state.parks.fetchStatus !== FetchStatus.Fulfilled

// Action creators are generated for each case reducer function
export const { changePage } = parksSlice.actions

export default parksSlice.reducer
