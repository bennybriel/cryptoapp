import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders ={
         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
         'X-RapidAPI-Key': 'bc6862446cmsh52725b7292aa8e4p174e1ejsn2ef29f4df199'

}

const baseUrl ='https://coinranking1.p.rapidapi.com';

const createRequest = (url)=>({ url, headers:cryptoApiHeaders})

export const cryptoApi =  createApi({
    reducerPath : 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`)
        })
    })
});


export const {
    useGetCryptosQuery,
} = cryptoApi;



// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       limit: '50',
//       offset: '0',
//       orderBy: '24hVolume',
//       orderDirection: 'desc'
//     },
//     headers: {
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//       'X-RapidAPI-Key': 'bc6862446cmsh52725b7292aa8e4p174e1ejsn2ef29f4df199'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });