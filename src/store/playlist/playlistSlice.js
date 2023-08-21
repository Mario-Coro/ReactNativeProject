import { createSlice } from "@reduxjs/toolkit";
import Songs from '../../constants/song.json'
const initialState = {
    data: Songs
}

const playlistSlices = createSlice({
    name:'Playlist',
    initialState,
    reducers:{}
})

export default playlistSlices.reducer