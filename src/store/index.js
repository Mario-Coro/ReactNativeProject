import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import albumSlice from "./albums/albumSlice";
import playlistSlice from "./playlist/playlistSlice";
import authSlice from "./auth/auth.slice";
import { albumsApi } from "./albums/api";
import { authApi } from "./auth/api";
import { songsApi } from "./playlist/api";

export const store = configureStore({
  reducer: {
    playlist: playlistSlice,
    album: albumSlice,
    auth: authSlice,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [songsApi.reducerPath]: songsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(albumsApi.middleware, authApi.middleware, songsApi.middleware),
});

setupListeners(store.dispatch);
