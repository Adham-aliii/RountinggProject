import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import { CartContext } from '../../Context/CartContext'

export default function CheckOut() {


  let { checkout } = useContext(CartContext)
  let formik = useFormik({
    initialValues: {
      details: '',
      city: '',
      phone: '',
    }
    , onSubmit: checkout
  })



  return <>
    <div className='w-1/2 mx-auto py-6 min-h-96 my-20'>

      <h2 className='text-3xl mb-6'>CheckOut Now</h2>

      <form onSubmit={formik.handleSubmit}>

        <div className="relative z-0 w-full mb-5 group">
          <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.details} name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" />
          <label htmlFor="details" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter details : </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input type="tel" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Phone} name="Phone" id="Phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" />
          <label htmlFor="Phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Phone</label>
        </div>


        <div className="relative z-0 w-full mb-5 group">
          <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.City} name="City" id="City" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" />
          <label htmlFor="City" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your City</label>
        </div>


        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Ckeckout</button>


      </form>

    </div>


  </>
}
