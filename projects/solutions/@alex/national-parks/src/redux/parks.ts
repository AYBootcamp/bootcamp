import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { keyBy } from 'lodash'

import fakeFetch from '../helpers/fakeFetch'
import mockParkData from '../mocks/parks.json'
import { Park } from '../types/Park'
import { FetchStatus, RootState } from './store'
// Async thunk
// export const fetchStudentIds = createAsyncThunk(
//     'students/fetchStudentIds',
//     async () => {
//         const response = await fakeFetch()
//         return response
//     },
//     {
//         condition: (args, { getState, extra }) => {
//             const { fetchStatus } = getState().students
//             if (fetchStatus === 'fulfilled' || fetchStatus === 'loading') {
//                 return false // do not fire fetch request if already loaded or loading
//             }
//         },
//     }
// )

// Define a type for the slice state
export interface ParksState {
    fetchStatus: FetchStatus
    data: Record<Park['id'], Park>
}

// Define the initial state using that type
const initialState: ParksState = {
    fetchStatus: 'initial',
    data: keyBy(mockParkData.data, 'id'),
}

export const parksSlice = createSlice({
    name: 'parks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(fetchStudentIds.pending, (state, action) => {
        //     state.fetchStatus = 'loading'
        // })
    },
})

export const getParkByIdSelector = (state: RootState, id: Park['id']) =>
    state.parks.data[id]

// Action creators are generated for each case reducer function
// export const {} = parksSlice.actions

export default parksSlice.reducer
