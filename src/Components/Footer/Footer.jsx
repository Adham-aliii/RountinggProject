import React from 'react'
import style from './Footer.module.css'


export default function Footer() {


  return <>
    <footer className="bg-gray-800 py-10 text-green-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className='text-green-600'>
            <h3 className="font-bold text-lg mb-4 text-green-600">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline text-green-600">Home</a></li>
              <li><a href="#" className="hover:underline text-green-600">Shop</a></li>
              <li><a href="#" className="hover:underline text-green-600">About Us</a></li>
              <li><a href="#" className="hover:underline text-green-600">Contact</a></li>
            </ul>
          </div>
          <div className='text-green-600'>
            <h3 className="font-bold text-lg mb-4 text-green-600">Customer Service</h3>
            <ul>
              <li><a href="#" className="hover:underline text-green-600">Returns</a></li>
              <li><a href="#" className="hover:underline text-green-600">Shipping Info</a></li>
              <li><a href="#" className="hover:underline text-green-600">FAQs</a></li>
              <li><a href="#" className="hover:underline text-green-600">Privacy Policy</a></li>
            </ul>
          </div>
          <div className='text-green-600'>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p>123 E-commerce St,</p>
            <p>City, Cairo</p>
            <p>Email: adhemn9@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/"><i className='fab fa-facebook-f hover:text-blue-400 w-6 h-6 text-green-600'></i></a>
              <a href="https://www.linkedin.com/feed/"><i className='fab fa-linkedin-in hover:text-blue-400 text-green-600 w-6 h-6'></i></a>
              <a href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1"><i className='fab fa-instagram hover:text-pink-600 text-green-600 w-6 h-6'></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Your E-commerce Site. All rights reserved.</p>
        </div>
      </div>
    </footer>




  </>
}
