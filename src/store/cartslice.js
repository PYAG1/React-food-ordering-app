import { createSlice } from "@reduxjs/toolkit";
import React from "react";


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
                        name:newitem.name,
                        img:newitem.img
                    }
                )
                state.totalQuantity++;
            }
         

        },


        togglestae(state){
            state.showCart = !state.showCart

        },
        clearcart(state){
            state.itemList = []
            state.totalQuantity= 0
        },
        delete(state,action){
            
                const id= action.payload;
                const existingitem = state.itemList.find((item)=> id === item.id);
                
                if(existingitem.quantity=== 1){
                    state.itemList = state.itemList.filter((item)=> item.id !== id);
                    state.totalQuantity--
                }
                else{
                    existingitem.quantity--;
                    existingitem.totalprice -= existingitem.price;
                }

        }

        
    }
})

export const cartActions = cart.actions;
export  default cart;