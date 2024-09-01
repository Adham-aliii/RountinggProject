import React, { useContext, useEffect, useState } from 'react'
import style from './RecentProducts.module.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext.jsx';
import { wishListContext } from '../../Context/WishListContext.jsx';

export default function RecentProducts({ product }) {



  // if (!product) {
  //   console.error("Product is undefined");
  //   return null; // or some fallback UI
  // }
  // console.log("Product ID:", product.id);


  let { addProductToCart } = useContext(CartContext)
  let { addProductToWishList } = useContext(wishListContext)

  //   const [products, setProducts] = useState([]);

  //   async function getProducts() {
  //     try {
  //       let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
  //       setProducts(data.data)

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   useEffect(() => {
  //     getProducts()
  //   }, [])






  return <>
    <div className='w-1/6 product px-2 py-4'>
      <div>
        <Link to={`/productdetails/${product.id}`}>
          <img src={product.imageCover} className='w-full' alt={product.title} />
          <h2 className='text-main text-sm'>{product.category.name}</h2>
          <h2 className='font-medium'>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
          <div className='flex justify-between my-2'>
            <h3>{product.price} EGY</h3>
            <h3><i className='fas fa-star rating-color text-sm'>{product.ratingsAverage}</i></h3>
          </div>
        </Link>
        <button onClick={() => addProductToCart(product.id)} className='btn w-full bg-green-600 text-white rounded py-1 mb-3'>Add to cart</button>
        <button onClick={() => addProductToWishList(product.id)} className='btn w-full bg-green-600 text-white rounded py-1'>Add to favourite</button>
      </div>
    </div>
  </>
}
