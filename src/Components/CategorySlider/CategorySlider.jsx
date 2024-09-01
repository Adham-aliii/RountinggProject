import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function CategorySlider() {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
  };
  const [categories, setCategories] = useState([])

  async function getRecentCategories() {
    try {
      let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      setCategories(data.data);
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    getRecentCategories()
  }, [])



  return <>


    <Slider {...settings}>
      {categories?.map((category, index) => <div key={index} className='my-6'>
        <img src={category.image} className='w-full h-[200px] pt-4' />
        <h3>{category.name}</h3>
      </div>)}
    </Slider>
  </>
}
