import { createSlice } from "@reduxjs/toolkit";



const initialState = [
    {
        id: 1,
        value: 10,
    },
    {
        id: 2,
        value: 40,
    },
]


const counterSlices = createSlice({
    name: 'counters',
    initialState,
    reducers: {
        increment : (state, action) => {
            const counterIndex = state.findIndex((c)=> c.id === action.payload);
            state[counterIndex].value++;

        },
        decrement : (state, action) => {
            const counterIndex = state.findIndex((c)=> c.id === action.payload);
            state[counterIndex].value--;

        },
    }
    
})

export const { increment, decrement } = counterSlices.actions

export default counterSlices.reducer;