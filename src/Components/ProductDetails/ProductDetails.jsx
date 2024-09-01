import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick";
import { CartContext } from '../../Context/CartContext.jsx';
import { wishListContext } from '../../Context/WishListContext.jsx';


export default function ProductDetails() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let { id } = useParams()
  console.log(id);
  let [productDetails, setProductDetails] = useState({})

  async function getProductDetails(id) {

    const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    // console.log(data);
    setProductDetails(data.data);
  }
  useEffect(() => {
    getProductDetails(id)
  }, [id])

  let { addProductToCart } = useContext(CartContext)
  let { addProductToWishList } = useContext(wishListContext)


  return <>
    <div className="flex items-center py-10">
      <div className="w-1/4 p-4">
        <Slider {...settings}>
          {productDetails.images?.map((image, index) => <img src={image} key={index} className='w-full' />)}
        </Slider>
      </div>
      <div className="w-3/4">
        <div>
          <h2>{productDetails.title}</h2>
          <p className='my-6 text-gray-500'>{productDetails.description}</p>
          <h3>{productDetails.category?.name}</h3>
          <div className='flex justify-between my-2' >
            <h3>{productDetails.price} EGY</h3>
            <h3><i className='fas fa-star rating-color'></i>{productDetails.ratingAverage}</h3>
          </div>
          <button onClick={() => addProductToCart(productDetails.id)} className='btn w-full bg-green-600 text-white rounded mb-3 py-1'>Add to cart</button>
          <button onClick={() => addProductToWishList(productDetails.id)} className='btn w-full bg-green-600 text-white rounded py-1'>Add to favourite</button>
        </div>
      </div>

    </div>


  </>
}
