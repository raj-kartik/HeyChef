const { configureStore } = require("@reduxjs/toolkit");
import foodReducer from './Slice/FoodSlice';

export const store = configureStore({
    reducer:{
        items: foodReducer,
    }
})