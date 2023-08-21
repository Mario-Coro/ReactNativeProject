import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import albumSlice from "./albums/albumSlice";
import playlistSlice from "./playlist/playlistSlice";
import { albumsApi } from "./albums/api";

export const store = configureStore({
    reducer: {
        playlist: playlistSlice,
        album:albumSlice,
        [albumsApi.reducerPath]: albumsApi.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(albumsApi.middleware)
});

setupListeners(store.dispatch)