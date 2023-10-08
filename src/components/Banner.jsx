import React from 'react'
import '../App.css'
import image from '../assets/4530199.jpg'
import { Link } from '@mui/material'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-info'>
        <h2>New Arrivals</h2>
        <h1>BIG SALE!</h1>
        <h3>UP TO 50% OFF</h3>
        <p>Discover a world of endless possibilities at our online store! With a wide range of products that cater to your every need.</p>
        <Link to="/">
          <button>Explore More</button>
        </Link>
      </div>

      <div className='image-holder'>
      <img src={image} alt='banner' /></div>
      <div className='texture-bg'>
        <img src="https://img.freepik.com/premium-photo/exotic-seamless-pattern-turquoise-symmetrical-kaleidoscope-background-summer-swimwear-exotic-seamless-design-textile-ready-pretty-print-swimwear-fabric-wallpaper-wrapping_174187-6164.jpg?w=996" alt="" />
      </div>
    </div>
  )
}

export default Banner