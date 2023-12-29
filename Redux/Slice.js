import {createSlice} from '@reduxjs/toolkit';

const foodSlice = createSlice({
    name:'dish',
    initialState:{
        foodList:[]
    },
    reducers:{
        setFoodList:(state,action) =>{
            state.foodList = action.payload;
        }
    }
});


export const {setFoodList} = foodSlice.actions;
export default foodSlice.reducer;