import React from 'react'
import Banner from '../components/Banner'
import Product from '../components/Product'
import '../App.css'

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <Product />
    </div>
  )
}

export default Home