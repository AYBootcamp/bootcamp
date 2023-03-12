import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { keyBy } from 'lodash'

// import mockParkData from '../mocks/parks.json'
import FetchStatus from '../types/FetchStatus'
import { Park } from '../types/Park'
import { ParkResponse } from '../types/ParkResponse'
import { RootState } from './store'

// Async thunk
export const fetchParks = createAsyncThunk(
    'parks/fetchParks',
    async () => {
        // Fetch requests
        const fetchRequest = async () =>
            await fetch(
                'https://developer.nps.gov/api/v1/parks?' +
                    new URLSearchParams({
                        api_key: 'kdhe0gpIVlUBrGqqO9PzhWnh3DMy3cD3Nr1mAlrk',
                    }).toString()
            )
        const response = await (await fetchRequest()).json()
        return response as ParkResponse
    },
    {
        condition: (args, { getState, extra }) => {
            const { fetchStatus } = (getState() as RootState).parks
            if (
                fetchStatus === FetchStatus.Loading ||
                fetchStatus === FetchStatus.Fulfilled
            ) {
                return false // do not fire fetch request if already loaded or loading
            }
        },
    }
)

// Define a type for the slice state
export interface ParksState {
    fetchStatus: FetchStatus
    data: Record<Park['id'], Park>
}

// Define the initial state using that type
const initialState: ParksState = {
    fetchStatus: FetchStatus.Initial,
    data: {},
}

export const parksSlice = createSlice({
    name: 'parks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchParks.pending, (state, action) => {
            state.fetchStatus = FetchStatus.Loading
        })
        builder.addCase(fetchParks.rejected, (state, action) => {
            state.fetchStatus = FetchStatus.Rejected
        })
        builder.addCase(fetchParks.fulfilled, (state, action) => {
            state.fetchStatus = FetchStatus.Fulfilled
            state.data = keyBy(action.payload.data, 'id')
        })
    },
})

export const getParkByIdSelector = (state: RootState, id: Park['id']) =>
    state.parks.data[id]

export const isDataLoading = (state: RootState) =>
    state.parks.fetchStatus !== FetchStatus.Fulfilled
// Action creators are generated for each case reducer function
// export const {} = parksSlice.actions

export default parksSlice.reducer
