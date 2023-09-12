import { useContext, useEffect, useState } from 'react'
import '../App.css'

import { CartContext } from '../StateManagement'


import { products } from './products'

const Product = () => {
  const { cartItems, addToCart } = useContext(CartContext)
  return (
    <div className='product'>
            {products.map((product) => (
              <div className='product-info'>
                <div className='product-image'>
                <img src={product.image} alt="" />
                </div>
                    <div className='product-text'>
                    <h4>{product.title}</h4>
                    <p>{product.description.slice(0, 100)}...</p>
                    <h3>${product.price}</h3>
                    <div className='rating'>
                    {Array(product.rating).fill().map((_) => <p><img src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png" style={{width: "20px"}} alt="" /></p>)}
                    </div>
                    <button onClick={() => addToCart(product)} className='cart-btn'>Add to cart</button>
                    </div>
                
              </div>
            ))}
        
    </div>
  )
}

export default Product