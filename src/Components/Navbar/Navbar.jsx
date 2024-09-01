import React, { useContext, useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'

export default function Navbar() {
  const navigate = useNavigate;

  const { userData, setUserData } = useContext(UserContext)


  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login')
  }

  let { cart } = useContext(CartContext)

  // let { wishlist } = useContext(wishListContext)



  return <>

    <nav className='bg-gray-200 md:fixed top-0 inset-x-0 py-2 shadow-md z-40'>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-700">
        <div className='flex items-center space-x-3'>
          <img src={logo} width={120} alt="Logo" className="h-12" />
          {userData && (
            <ul className='flex space-x-4 list-none'>
              <li><NavLink to="home" className='hover:text-green-600'>Home</NavLink></li>
              <li><NavLink to="products" className='hover:text-green-600'>Products</NavLink></li>
              <li><NavLink to="categories" className='hover:text-green-600'>Categories</NavLink></li>
              <li><NavLink to="brands" className='hover:text-green-600'>Brands</NavLink></li>
              <li className='relative'><NavLink to="cart" className='hover:text-green-600'><i className='fa-2xl text-main fa-solid fa-cart-shopping'></i></NavLink><span className='left-1/2 absolute text-white -top-[5px]'>{cart ? cart.numOfCartItems : 0}</span></li>
              <li><NavLink to="wishList" className='hover:text-green-600'><span className="fa-layers fa-fw" style={{ background: 'MistyRose' }}>
                <i className="fa-xl fa-solid fa-bookmark"></i>
              </span>
              </NavLink><span className='left-1/2 absolute text-white -top-[5px]'></span>
              </li>
            </ul>
          )}
        </div>
        <div className='flex items-center space-x-4'>

          {userData ? (
            <>
              <li onClick={() => logOut()} className='text-gray-500 cursor-pointer list-none hover:text-green-600'><NavLink to="login">Logout</NavLink></li>
            </>
          ) : (
            <>
              <li className='text-gray-500 hover:text-green-600 list-none'><NavLink to="login">Login</NavLink></li>
              <li className='text-gray-500 hover:text-green-600 list-none'><NavLink to="register">Register</NavLink></li>
            </>
          )}
          <ul className='flex space-x-3'>
            <li><a href="#" className='text-gray-500 hover:text-blue-900'><i className='fab fa-facebook-f'></i></a></li>
            <li><a href="#" className='text-gray-500 hover:text-blue-600'><i className='fab fa-linkedin-in'></i></a></li>
            <li><a href="#" className='text-gray-500 hover:text-red-600'><i className='fab fa-youtube'></i></a></li>
            <li><a href="#" className='text-gray-500 hover:text-blue-600'><i className='fab fa-twitter'></i></a></li>
            <li><a href="#" className='text-gray-500 hover:text-pink-600'><i className='fab fa-instagram'></i></a></li>
          </ul>
        </div>
      </div>
    </nav>

  </>
}




