import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import Config from '@superapp/config';

import type { BaseQueryInterceptorType } from './types';

const baseQueryInterceptor: BaseQueryInterceptorType = async (
  args,
  api,
  extraOptions,
) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: Config.LANDERS_API_URL,
    prepareHeaders: async headers => {
      headers.set('Authorization', `Bearer `);
      headers.set('Accept', 'application/json');
      headers.set('Content-Type', 'application/json');

      return headers;
    },
  });

  let result = await baseQuery(args, api, extraOptions);

  // @TODO add re-authentication here

  return result;
};

export const landersBaseApi = createApi({
  baseQuery: baseQueryInterceptor,
  endpoints: () => ({}),
  reducerPath: 'landersBaseApi',
});
