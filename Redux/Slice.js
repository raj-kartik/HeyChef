import {createSlice} from '@reduxjs/toolkit';

const foodSlice = createSlice({
    name:'dish',
    initialState:{
        data:[],
        addFood:[],
    },
    reducers:{
        setData : (state,action) =>{
        state.data = [...state.data, ...action.payload ]; 
        },
        addFav: (state,action)=>{
            if(state.addFood.find((item) => item.id === action.payload.id )) {}
            else state.addFav.push(action.payload);
        }
    }
});


export const {setFoodList} = foodSlice.actions;
export default foodSlice.reducer;