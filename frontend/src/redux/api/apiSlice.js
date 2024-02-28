import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';

import { base_url } from '../constants';
const baseQuery = fetchBaseQuery({baseUrl: base_url});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'Order', "User", "Category"],
    endpoints: () =>({}),
});
