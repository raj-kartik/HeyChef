const { configureStore } = require("@reduxjs/toolkit");
import dishReducer from './Slice';

export const store = configureStore({
    reducer:{
        items: dishReducer,
    }
})