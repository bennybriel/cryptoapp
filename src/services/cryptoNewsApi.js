import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoNewsHeaders ={
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': 'bc6862446cmsh52725b7292aa8e4p174e1ejsn2ef29f4df199'

}

const baseUrl ='https://bing-news-search1.p.rapidapi.com';
const createRequest = (url)=>({ url, headers:cryptoNewsHeaders});

export const cryptoNewsApi =  createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptoNews: builder.query({
            query: (newCategory, count)=> 
            createRequest(`/news/search?q=${newCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

//console.log(cryptoNewsApi);
export const { useGetCryptoNewsQuery } = cryptoNewsApi;