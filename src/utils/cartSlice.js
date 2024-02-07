import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: ["Burger","Pizza"]
    },
    reducers: {
        addItem: (state,action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearItems: (state) => {
            state.items.length = 0
        }
    }
})
console.log(cartSlice);

export const {addItem,removeItem,clearItems} = cartSlice.actions

export default cartSlice.reducer