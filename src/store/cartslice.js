import { createSlice } from "@reduxjs/toolkit";
import React, { useEffect } from "react";


const cart = createSlice({
    name:'cart',
    initialState:{
        itemList: [],
        totalQuantity:0,
        showCart:false,
        showSnack:false,
        historyArray: {}
    },
    reducers:{
        Add(state,action){
            const newitem = action.payload;
            //check if item exist
            const existingitem= state.itemList.find((item)=> item.id=== newitem.id);
            if(existingitem){
                existingitem.quantity++;
                existingitem.totalprice+= newitem.price;
                state.showSnack = true;
            }
            else{
                //creating new item
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
                state.showSnack = true;
             

            }


            
  
         

        },
        //to close snackbar
        close(state){
            state.showSnack = false

        },
        //to open snackbar
        open(state){
            state.showSnack = true

        },

//to open cart
        togglestae(state){
            state.showCart = !state.showCart

        },
//to clear cart
        clearcart(state){
            state.itemList = []
            state.totalQuantity= 0
        },
//deleting an item from cart
        delete(state,action){
            
                const id= action.payload;
                //finding the item with id === id
                const existingitem = state.itemList.find((item)=> id === item.id);
                //clearing item from cart if quantity === 1
                if(existingitem.quantity=== 1){
                    state.itemList = state.itemList.filter((item)=> item.id !== id);
                    state.totalQuantity--
                }
                //reducing the item quantity
                else{
                    existingitem.quantity--;
                    existingitem.totalprice -= existingitem.price;
                }

        },
      /*  addhistory(state,action){
          const id =  Math.ceil(Math.random()*10000000)
          const retrieveData = action.payload;

          const date= new Date();
          const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
          const acdate = `${date.getDate()}/${date.toLocaleString('default',{month:'short'})}/${date.getFullYear()}`

        const value = state.historyArray;

        value.id= id
        value.username= retrieveData.user
        value.total= retrieveData.finaltotal
        value.name=`Order ${id} `
        value.currenttime= time
        value.currentdate= acdate
        value.items= state.itemList

          

           /* state.historyArray.push(
                {
                    id:id,
                    username: retrieveData.user,
                    total: retrieveData.finaltotal,
                    name:`Order ${id} `,
                    currenttime: time,
                    currentdate: acdate,
                    items: state.itemList



                }
            )*/

        
        clearhistory(state,action){
            state.historyArray = {}
        }

        
    }
})

export const cartActions = cart.actions;
export  default cart;