import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseUrl = 'https://api.coingecko.com/api/v3';


export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({

    getCryptos: builder.query({
    //   query: () => createRequest(`/coins?limit=${count}`),
      query: () => `/exchanges?per_page=${3}`,
    }),

    getGlobal: builder.query({
        query: () => '/global',
    })

    // getCryptoDetails: builder.query({
    //   query: (coinId) => createRequest(`/coin/${coinId}`),
    // }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    // getCryptoHistory: builder.query({
    //   query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    // }),

    // Note: To access this endpoint you need premium plan
    // getExchanges: builder.query({
    //   query: () => createRequest('/exchanges'),
    // }),
  })
});

export const {
  useGetCryptosQuery,
  useGetGlobalQuery,
//   useGetCryptoDetailsQuery,
//   useGetExchangesQuery,
//   useGetCryptoHistoryQuery,
} = cryptoApi;




