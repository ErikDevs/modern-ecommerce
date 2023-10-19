import React from 'react'
import Banner from '../components/Banner'
import Product from '../components/Product'
import '../App.css'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <Product />
      
    </div>
  )
}

export default Home