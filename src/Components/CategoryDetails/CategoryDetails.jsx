import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';

export default function CategoryDetails() {
  const { id } = useParams();

  const getCategoryDetails = async () => {
    const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
    console.log(response);
    return response.data;
  };


  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['categoryDetails', id],
    queryFn: getCategoryDetails,
    staleTime: 20000,
    refetchOnReconnect: false,
    retry: 3,
    retryDelay: 10000,
  });

  if (isLoading) return
  if (isError) return <div>Error: {error.message}</div>;

  return <>
    <div className='flex justify-center text-center py-16 my-32'>
      <Loading />
    </div>

  </>
}