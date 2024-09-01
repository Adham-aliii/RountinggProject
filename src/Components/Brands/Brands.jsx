import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Loading from '../Loading/Loading'
import axios from 'axios'

export default function Brands() {


  function getBrands() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands', {
      useParams: {
        limit: 10
      },
    })
  }
  let { data, isFetching, isLoading, isError, error } = useQuery({
    queryKey: ['recentBrands'],
    queryFn: getBrands,
    staleTime: 20000,
    refetchOnReconnect: false,
    retry: 3,
    retryDelay: 10000,
    select: (data) => data?.data.data,
  })

  // console.log(data);



  return <>

<h2 className="text-5xl py-8 text-center font-bold text-green-600 shadow-md transition-transform transform hover:scale-105">
  Brands
</h2>

{!isLoading ? (
  <div className="flex flex-wrap justify-center">
    {data.map((brand) => (
      <div key={brand.id} className="w-1/4 sm:w-1/6 product px-2 py-4">
        <div className="bg-white shadow rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src={brand.image}
            className="w-full h-32 object-cover"
            alt={brand.name}
          />
          <h2 className="text-main text-sm text-center font-semibold py-2">
            {brand.name}
          </h2>
        </div>
      </div>
    ))}
  </div>
) : (
  <div className="flex justify-center items-center text-center py-16">
    <Loading />
  </div>
)}

  </>
}
