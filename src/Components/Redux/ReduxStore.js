import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { SUBTOTAL } from "./Reducer"

export const ReduxStore = configureStore({
    reducer: {
        cart: cartReducer,
    },

});
ReduxStore.dispatch(SUBTOTAL());

