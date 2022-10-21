import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    searchResult: "",
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchResult: (state: any, action) => {
            state.searchResult = action.payload;
        },
    },
})

export const { setSearchResult } = searchSlice.actions

export default searchSlice.reducer