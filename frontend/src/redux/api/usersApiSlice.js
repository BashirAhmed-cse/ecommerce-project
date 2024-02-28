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
    }),
});



export const {useLoginMutation} = userApiSlice;