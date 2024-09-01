import React, { useContext, useEffect, useState } from 'react'
import style from './AllOrders.module.css'
import { CartContext } from '../../Context/CartContext'

export default function AllOrders() {



  let { removeCart } = useContext(CartContext)


  useEffect(()=>{
    removeCart()
  },[])
  return <>

    <h1 className="text-3xl mt-9 mb-80">AllOrders</h1>

  </>
}
