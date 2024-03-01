import { apiSlice } from "./apiSlice";
import { users_url } from "../constants";


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        login: builder.mutation({
            query:(data) =>({
                url:`${users_url}/auth`,
                method: "POST",
                body: data,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
              url: `${users_url}/logout`,
              method: "POST",
            }),
          }),

          register: builder.mutation({
            query: (data)=>({
                url: `${users_url}`,
                method: "POST",
                body: data,
            }),
          }),

          profile: builder.mutation({
            query: (data) => ({
              url: `${users_url}/profile`,
              method: "PUT",
              body: data,
            }),
          }),
          getUsers: builder.query({
            query: () => ({
              url: users_url,
            }),
            providesTags: ["User"],
            keepUnusedDataFor: 5,
          }),

          deleteUser: builder.mutation({
            query: (userId) => ({
              url: `${users_url}/${userId}`,
              method: "DELETE",
            }),
          }),
          getUserDetails: builder.query({
            query: (id) => ({
              url: `${users_url}/${id}`,
            }),
            keepUnusedDataFor: 5,
          }),
          updateUser: builder.mutation({
            query: (data) => ({
              url: `${users_url}/${data.userId}`,
              method: "PUT",
              body: data,
            }),
            invalidatesTags: ["User"],
          }),
    }),
});



export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserDetailsQuery,
} = userApiSlice;