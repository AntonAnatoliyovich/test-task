import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        page: 1,
        isFollowing: "",
    },
    reducers: {
    filterUsers: (state, action) => {
        return (state = action.payload)
        }
    },
})

export const { filterUsers } = filterSlice.actions;
export const filterSliceReducer = filterSlice.reducer;
