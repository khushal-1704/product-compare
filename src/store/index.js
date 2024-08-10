import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/productsSlice";
import compareSlice from "./slice/compareSlice";

export const store = configureStore({
  reducer: {
    productList: productsSlice,
    comparisonList: compareSlice,
  },
});