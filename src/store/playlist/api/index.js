import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import URL_BASE_FIREBASE_REALTIME_DATABASE from "../../../constants/firebase";

export const songsApi = createApi({
  reducerPath: "songsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://musicplayer-40e58-default-rtdb.firebaseio.com" }),
  endpoints: (builder) => ({
    getSongs: builder.query({
      query: (album) => `/songs.json?orderBy="album"&equalTo="${album}"`,
      transformResponse: (response) =>
        Object.keys(response).map((key) => ({
          ...response[key],
        })),
    }),
  }),
});

export const { useGetSongsQuery } = songsApi;
