import { combineReducers, configureStore } from '@reduxjs/toolkit'

import parksReducer, { ParksState } from './parks'

export type FetchStatus = 'initial' | 'fulfilled' | 'rejected'

// instead of defining the reducers in the reducer field of configureStore, combine them here:
const rootReducer = combineReducers({ parks: parksReducer })
export const store = configureStore({
    reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
