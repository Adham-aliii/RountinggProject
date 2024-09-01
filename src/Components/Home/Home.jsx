import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import RecentProducts from '../RecentProducts/RecentProducts'
import Loading from '../Loading/Loading'
import CategorySlider from '../CategorySlider/CategorySlider'
import MainSlider from '../MainSlider/MainSlider'
import useProduct from '../../Hooks/useProduct'

export default function Home() {

  // const [products, setProducts] = useState([])

  // async function getRecentProducts() {
  //   try {
  //     let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
  //     setProducts(data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }

  // }

  // useEffect(() => {
  //   getRecentProducts()
  // }, [])


  let {data,isFetching , isLoading , isError , error } = useProduct()





  return <>


    <MainSlider />
    <CategorySlider />


    <h2 className='text-5xl py-8 text-center font-bold text-green-600 shadow-md transition-transform transform hover:scale-105'>Recent Products</h2>
    {!isLoading ? <div className="flex flex-wrap justify-center ">
      {data?.data.data.map((product, index) => <RecentProducts key={index} product={product} />)}
    </div> : <div className='flex justify-center text-center py-16'>
      <Loading />
    </div>
    }

  </>
}
