import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    openDashboard: false,
}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setOpenDashboard: (state: any, action) => {
            state.openDashboard = action.payload;
        },
    },
})

export const { setOpenDashboard } = dashboardSlice.actions

export default dashboardSlice.reducer