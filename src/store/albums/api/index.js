import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import URL_BASE_FIREBASE_REALTIME_DATABASE from '../../../constants/firebase'

export const albumsApi = createApi({
    reducerPath:'albumsApi',
    baseQuery:fetchBaseQuery({baseUrl: 'https://musicplayer-40e58-default-rtdb.firebaseio.com'}),
    endpoints: (builder) => ({
        getAlbums: builder.query({
            query: ()=>`/albums.json`,
        })
    })
})

export const {useGetAlbumsQuery} = albumsApi