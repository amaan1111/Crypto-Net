import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaderss = {
  "X-RapidAPI-Key": "f93b8a8244msh806fbe52f21a264p111fa0jsn47213eb9dc7a",
  "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
};

const baseUrl = "https://coingecko.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoApiHeaderss });

export const cryptoExchangeApi = createApi({
  reducerPath: "cryptoExchangeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const { useGetExchangesQuery } = cryptoExchangeApi;
