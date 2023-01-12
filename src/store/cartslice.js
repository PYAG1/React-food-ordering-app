import { createSlice } from "@reduxjs/toolkit";


const cart = createSlice({
    name:'cart',
    initialState:{
        itemList: [],
        totalQuantity:0,
        showCart:false
    },
    reducers:{
        Add(state,action){
            const newitem = action.payload;
            //check if item exist
            const existingitem= state.itemList.find((item)=> item.id=== newitem.id);
            if(existingitem){
                existingitem.quantity++;
                existingitem.totalprice+= newitem.price;
            }
            else{
                state.itemList.push(
                    {
                        id:newitem.id,
                        price:newitem.price,
                        quantity:1,
                        totalprice:newitem.price,
                        name:newitem.name
                    }
                )
                

                state.totalQuantity++;
                state.showCart=true;
            }
         

        }

        
    }
})

export const cartActions = cart.actions;
export  default cart;