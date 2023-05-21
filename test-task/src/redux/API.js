import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6456b51a2e41ccf1692374e0.mockapi.io/' }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: (filter) => ({
                url: `users`,
                params: ({
                    limit: 6,
                    page: filter.page,
                    isFollowing: filter.isFollowing,
                }),
            providesTags: ['Users']
        }),
        }),
        updateUser: builder.mutation({
            query: (updatedUser) => ({
            url:    `users/${updatedUser.id}`,
            method: "PUT",
                body: updatedUser,
            }),
            invalidatesTags: ['Users'],
        })
    }),
})

export const { useGetAllUsersQuery, useGetUserQuery, useUpdateUserMutation } = usersApi
