import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useProduct() {



    function getProducts() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    }

    let response = useQuery({
        queryKey: ['recentProducts'],
        queryFn: getProducts,
        // gcTime : 3000 ,
        staleTime: 20000,
        // refetchOnMount : false ,
        refetchOnReconnect: false,
        retry: 3,
        retryDelay: 10000,
        // select: (data) => data?.data.data
    })


    return response 
}
