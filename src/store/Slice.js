import {createSlice } from "@reduxjs/toolkit";


export const testSlice = createSlice({
    name: 'testSlice',
    initialState: {},
    reducers:{


    }
})
export const {addSlice, deleteSlice, editSlice} = testSlice.actions;
export default testSlice.reducer