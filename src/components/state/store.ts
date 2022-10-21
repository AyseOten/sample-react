import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { dashboardSlice } from './features/dashboardSlice';
import {layerSlice} from './features/layerSlice';
import { searchSlice } from './features/searchSlice';


export const store = configureStore({
    reducer: {
        dashboard: dashboardSlice.reducer,
        search: searchSlice.reducer,
        layers: layerSlice.reducer
    },
    middleware: [thunkMiddleware],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
