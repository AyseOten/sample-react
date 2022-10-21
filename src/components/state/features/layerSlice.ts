import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    layers: [],
}

export const layerSlice = createSlice({
    name: 'layers',
    initialState,
    reducers: {
        setLayers: (state: any, action) => {
            state.layers = action.payload;
        },
    },
})

export const { setLayers } = layerSlice.actions

export default layerSlice.reducer