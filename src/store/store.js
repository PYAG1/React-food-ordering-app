import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartslice";

const store = configureStore({
    reducer:{
        cart:cart.reducer
    }
})

export default store;