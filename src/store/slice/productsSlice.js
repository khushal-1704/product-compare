import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalProducts: 0,
}

const productsSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        addProductList: (state,action) => {
            state.products = action.payload.productsList
            state.totalProducts = action.payload.totalProducts
        },
        updateProductList: (state, action) => {
            state.products = [...state.products , ...action.payload]
        },
    }
})

export const {addProductList, updatePage} = productsSlice.actions

export default productsSlice.reducer