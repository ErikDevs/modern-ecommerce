import React from 'react'
import '../App.css'
import image from '../assets/banner.png'
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
          <button>EXPLORE MORE</button>
        </Link>
      </div>

      <div className='image-holder'>
      <img src={image} alt='banner' /></div>
    
    </div>
  )
}

export default Banner