import { createSlice } from "@reduxjs/toolkit";


const cart = createSlice({
    name:'cart',
    initialState:{
        itemList: [],
        totalQuantity:0,
        showChart:false
    },
    reducers:{
        Add(state,action){
            const newitem = action.payload;
            //check if item exist
            const existingitem= state.itemList.find((item)=> item.id=== newitem.id);
        }
    }
})