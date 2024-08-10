import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    compareList: []
}

const compareSlice = createSlice({
    name: 'compareData',
    initialState,
    reducers: {
        addProductToCompare: (state, action) => {
            if (state.compareList.length < 4) {
                state.compareList.push(action.payload)
            }
        },
        removeProductFromCompare: (state, action) => {
           state.compareList = state.compareList.filter(table => table.id !== action.payload)
        },
    }
})

export const {addProductToCompare, removeProductFromCompare} = compareSlice.actions

export default compareSlice.reducer
