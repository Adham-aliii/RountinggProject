import React, { useContext, useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import { wishListContext } from '../../Context/WishListContext'

export default function WishList() {


  const { getWishList, wishlist, removeProduct } = useContext(wishListContext)
  useEffect(() => {
    getWishList();
  }, [])


  return <>

    <div className="container mx-auto my-4 ">
      <h1 className="text-5xl py-8 text-center font-bold text-green-600 shadow-md transition-transform transform hover:scale-105 mb-6">Wish List</h1>

      {wishlist === undefined ? <div className='flex justify-center text-center py-16'>
        <Loading />
      </div> : wishlist.length === 0 ? (
        <div className='flex justify-center text-center py-16'>
          <p>Your wishlist is empty.</p>
        </div>) : <div>
        <div className="relative overflow-x-auto shadow-md w-3/4 mx-auto sm:rounded-lg min-h-96">
          <table className="w-full text-sm text-left rtl:text-right mb-10 text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>

                <th scope="col" className="px-16 py-3">
                  Image
                </th>

                <th scope="col" className="px-6 py-3">
                  Product
                </th>

                <th scope="col" className="px-6 py-3">
                  Price
                </th>

              </tr>
            </thead>
            <tbody>
              {wishlist.data.map((product) => <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <td className="p-4">
                  <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                </td>

                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {product.title}
                </td>

                <td className="px-3 py-4 font-semibold text-gray-900 dark:text-white">
                  {product.price}<span> EGY</span>
                </td>

                <td className="px-6 py-4">
                  <button onClick={(() => removeProduct(product.id))} className="font-medium text-green-600 dark:text-green-500 hover:underline">Remove</button>
                </td>

              </tr>)}
            </tbody>
          </table>
        </div>
      </div>}
    </div>
  </>
}
