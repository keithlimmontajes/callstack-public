import { landersBaseApi as api } from '../landersBaseApi';
import { LandersTags } from '../tags';
import type {
  NewHomeResponseItem,
  JsonWidgetResponse,
} from '@superapp/types/landers';

export const addTagTypes = [LandersTags.JsonPageNewHome];

export const jsonPageApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      getJsonPageNewHome: build.query<NewHomeResponseItem[], void>({
        query: () => ({
          url: `/rest/V1/json-page/new-home`,
        }),
        transformResponse: (response: NewHomeResponseItem[]) => {
          const listProduct = response.filter(
            item => item.status !== '0' && item.status !== 0,
          );

          return listProduct;
        },
        providesTags: [LandersTags.JsonPageNewHome],
      }),
      getJsonWidget: build.query<
        JsonWidgetResponse,
        { hash: string; storeCode: string }
      >({
        query: queryArg => ({
          url: `/rest/V1/json-widget?hash=${queryArg.hash}&storeview=${queryArg.storeCode}`,
        }),
        transformResponse: (response: JsonWidgetResponse[]) => {
          return response[0];
        },
      }),
    }),
    overrideExisting: false,
  });

export const { useGetJsonPageNewHomeQuery, useGetJsonWidgetQuery } =
  jsonPageApi;
