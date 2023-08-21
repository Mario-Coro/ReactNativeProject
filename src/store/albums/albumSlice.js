import { createSlice } from "@reduxjs/toolkit";
import ALBUMS from '../../constants/categories.json'
const initialState = {
    data: ALBUMS
}

const albumSlices = createSlice({
    name:'Albums',
    initialState,
    reducers:{}
})

export default albumSlices.reducer