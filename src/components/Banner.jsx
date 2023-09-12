import React from 'react'
import '../App.css'
import image from '../assets/30559381.jpg'
import { Link } from '@mui/material'


const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-info'>
        <h2>New Arrivals</h2>
        <h1>BIG SALE!</h1>
        <h3>UP TO 50% OFF</h3>
        <p>Discover a world of endless possibilities at our online store! With a wide range of products that cater to your every need, we bring quality and convenience right to your fingertips. From fashion to tech, home essentials to unique gifts, our carefully curated selection ensures there's something for everyone.</p>
        <Link to="/">
          <button>SHOP NOW</button>
        </Link>
      </div>
     <img src={image} alt='banner' />
    </div>
  )
}

export default Banner