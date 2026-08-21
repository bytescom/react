import { configureStore } from "@reduxjs/toolkit";



import { counterSlice } from "./counterSlice";

// Step 1 - Create a store
export const store = configureStore({

    reducer: {
        counter: counterSlice.reducer
    }
    
})