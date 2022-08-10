import {createSlice} from '@reduxjs/toolkit';
export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartidems:[];
    },
    reducers:{
        addtocart:(state,action)=>{
            console.log(state,action);
            state.cartidems=action.payload;
        }
    }
})

export const {addtocart}=cartSlice.actions;
export default cartSlice.reducer;
