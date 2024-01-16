import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://assignment-4-gilt.vercel.app/api/courses' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => ({
                url: '/task',
                methods: 'GET'
            })
        })
    })
})



export const {useGetTodosQuery} = baseApi