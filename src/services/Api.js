import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const api =createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://dummyjson.com',
    }),
    endpoints: (builder)=>({
        getAllProducts: builder.query({
            query: ()=>'/products',
            transformResponse: (response) => {
                // Log the response data to the console
                console.log('API Response:', response);
                return response;
            },
        }),
        getProductById:builder.query({
            query:(id)=> '/products/${id}',
            transformResponse: (response) => {
                // Log the response data to the console
                console.log('API Response:', response);
                return response;
            },
        })
    }),
});
export const {useGetAllProductsQuery,useGetProductByIdQuery}= api;
export default api;