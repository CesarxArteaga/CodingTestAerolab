import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../types/products.interface';
import { User } from '../types/user.interface';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjY0ZGIxYjQwN2FiMTAwMjE4NWVmODIiLCJpYXQiOjE2NTA3NzY4NTl9.uaCMjwEcJbW7XfOjYkd7yk9ckLeIeEA9DwzeWMEudhc";

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://coding-challenge-api.aerolab.co/', prepareHeaders: (headers, { getState }) => {
            headers.set('Authorization', `Bearer ${token}`)
            return headers
        }
    }),
    endpoints: (builder) => ({
        getUser: builder.query<User, void>({
            query: () => `user/me`,
        }),
        getProducts: builder.query<Product[], void>({
            query: () => 'products',
        }),
        addPoints: builder.mutation<any, { amount: number }>({
            query: ({ amount }) => ({
                url: 'user/points',
                method: 'POST',
                body: {
                    amount
                }
            })
        }),
        redeem: builder.mutation<{
            message: string
        }, { productId: string }>({
            query: ({ productId }) => ({
                url: 'redeem',
                method: 'POST',
                body: {
                    productId
                }
            })
        })
    }),
})

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useAddPointsMutation,
    useRedeemMutation,
} = apiSlice