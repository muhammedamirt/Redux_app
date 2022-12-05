import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartList:[],
        cartCount:0
    },
    reducers:{
        increment:(state)=>{
            state.cartCount +=1
        },
        decrement:(state)=>{
            state.cartCount -=1
        },
        addToCart:(state,action)=>{
            state.cartList.push({
                ...action.payload,
                count:1
            })
        }
    }
})

export const {increment,decrement,addToCart} = cartSlice.actions;
export default cartSlice.reducer;