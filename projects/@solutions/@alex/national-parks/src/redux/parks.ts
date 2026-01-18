import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { keyBy } from 'lodash'

import { DISPLAY_COUNT } from '../components/ParkGridView'
// import mockParkData from '../mocks/parks.json'
import FetchStatus from '../types/FetchStatus'
import Filters from '../types/Filters'
import Pagination from '../types/Pagination'
import { Park } from '../types/Park'
import { ParkResponse } from '../types/ParkResponse'
import { RootState } from './store'

// We need this to create a comma separated list of ids
const STATE_CODE_ID_PLACEHOLDER = 'STATE_CODE_ID_PLACEHOLDER'

// Async thunk
export const fetchParks = createAsyncThunk(
    'parks/fetchParks',
    async (
        { pageNumber = 1 }: { pageNumber?: number; reset?: boolean },
        { getState }
    ) => {
        const state = getState() as RootState
        // Fetch requests
        const fetchRequest = async () =>
            await fetch(
                'https://developer.nps.gov/api/v1/parks?' +
                    new URLSearchParams({
                        api_key: 'kdhe0gpIVlUBrGqqO9PzhWnh3DMy3cD3Nr1mAlrk',
                        limit: `${DISPLAY_COUNT}`,
                        start: `${(pageNumber - 1) * DISPLAY_COUNT}`,
                        stateCode: STATE_CODE_ID_PLACEHOLDER,
                    })
                        .toString()
                        .replace(
                            STATE_CODE_ID_PLACEHOLDER,
                            state.parks.filters.filterByStateCode.join(',')
                        )
            )
        const response = await (await fetchRequest()).json()
        return response as ParkResponse
    },
    {
        condition: (args, { getState, extra }) => {
            const { fetchStatus, pagination } = (getState() as RootState).parks
            // Always fetch if reset flag is true
            if (args.reset) {
                return true
            }
            if (pagination.pageToData[args.pageNumber ?? 1]) {
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
    filters: Filters
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
    filters: {
        filterByStateCode: [],
    },
}

export const parksSlice = createSlice({
    name: 'parks',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<number>) => {
            state.pagination.current = action.payload * DISPLAY_COUNT
        },
        updateStateFilter: (state, action: PayloadAction<string[]>) => {
            state.filters.filterByStateCode = action.payload
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
            const pageNumber = action.meta.arg.pageNumber ?? 1
            const shouldReset = action.meta.arg.reset
            state.fetchStatus = FetchStatus.Fulfilled
            if (shouldReset) {
                state.data = { ...keyBy(action.payload.data, 'id') }
                state.pagination = {
                    ...state.pagination,
                    current: pageNumber * DISPLAY_COUNT,
                    total: parseInt(action.payload.total),
                    pageToData: {
                        [pageNumber]: action.payload.data,
                    },
                }
            } else {
                state.data = {
                    ...state.data,
                    ...keyBy(action.payload.data, 'id'),
                }
                state.pagination = {
                    ...state.pagination,
                    current: pageNumber * DISPLAY_COUNT,
                    total: parseInt(action.payload.total),
                    pageToData: {
                        ...state.pagination.pageToData,
                        [pageNumber]: action.payload.data,
                    },
                }
            }
        })
    },
})

export const getParkByIdSelector = (state: RootState, id: Park['id']) =>
    state.parks.data[id]

export const isDataLoading = (state: RootState) =>
    state.parks.fetchStatus !== FetchStatus.Fulfilled

// Action creators are generated for each case reducer function
export const { changePage, updateStateFilter } = parksSlice.actions

export default parksSlice.reducer
