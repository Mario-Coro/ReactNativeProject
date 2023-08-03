import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./playlist/playlistSlice";

export const tracklist = configureStore({
    reducer: {
        playlist: playlistSlice
    }
})