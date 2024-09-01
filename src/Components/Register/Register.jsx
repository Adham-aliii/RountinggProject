import React, { useContext, useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'



export default function Register() {


  const [apiError, setApiError] = useState(null)
  const [loading, setLoading] = useState(null)
  const { setUserData } = useContext(UserContext)
  const navigate = useNavigate()

  async function register(values) {

    try {
      setLoading(true);
      let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)

      // console.log(data);

      localStorage.setItem('userToken', data.token)

      navigate('/');
      setLoading(false)      ///Doesn't required
      setUserData(data.token)

    } catch (err) {
      console.log(err.response.data.message);
      setApiError(err.response.data.message);
      setLoading(false);
    }
  }
  // function validateForm(values) {
  //   let errors = {}

  //   if (!values.name) {
  //     errors.name = "Name is required"
  //   } else if (values.name.length < 3) {
  //     errors.name = "min length is 3"
  //   } else if (values.name.length > 13) {
  //     errors.name = "max length is 13"
  //   }


  //   if (!values.phone) {
  //     errors.phone = "Phone is required"
  //   } else if (!/^(002|\+2)?01[0125][0-9]{8}$/.test(values.phone)) {
  //     errors.phone = "We need Egyptian number"
  //   }
  //   return errors;
  // }

  let validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Minimum length is 3 characters").max(13, "Maximum length is 13 characters").required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
    rePassword: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match").required("Confirm password is required"),
    phone: Yup.string().matches(/^(002|\+2)?01[0125][0-9]{8}$/, "We need an Egyptian phone number").required("Phone is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    }
    // , validate: validateForm
    , validationSchema: validationSchema
    , onSubmit: register
  })



  return <>
    <div className='w-1/2 mx-auto py-6'>

      <h2 className='text-3xl mb-6'>Register Now</h2>

      <form onSubmit={formik.handleSubmit}>

        {apiError && <div className="p-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {apiError}
        </div>}
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your name</label>
        </div>
        {formik.errors.name && formik.touched.name && <div className="p-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.name}
        </div>}

        <div className="relative z-0 w-full mb-5 group">
          <input type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your email</label>
        </div>
        {formik.errors.email && formik.touched.email && <div className="p-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.email}
        </div>}

        <div className="relative z-0 w-full mb-5 group">
          <input type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your password</label>
        </div>
        {formik.errors.password && formik.touched.password && <div className="p-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.password}
        </div>}

        <div className="relative z-0 w-full mb-5 group">
          <input type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" />
          <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Repassword pls</label>
        </div>
        {formik.errors.rePassword && formik.touched.rePassword && <div className="p-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.rePassword}
        </div>}

        <div className="relative z-0 w-full mb-5 group">
          <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" />
          <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your phone</label>
        </div>
        {formik.errors.phone && formik.touched.phone && <div className="p-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.phone}
        </div>}


        {loading ? <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><i className='fas fa-spinner fa-spin-pulse'></i></button>
          : <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
        }

      </form>

    </div>


  </>
}
