import { useContext } from 'react'
import '../App.css'
import { CartContext } from '../StateManagement'
import { products } from './products'
import Button from './Button'
const Product = () => {
  
  const { addToCart } = useContext(CartContext)
  return (
    <div id='products' className='products'>
            <div className='products'>
            {products.map((product) => (
              <div className='product'>
                <img src={product.image} alt="" />
                <div className='product-details'>

                <p>{product.title}</p>
                <p>$ <strong>{product.price}</strong></p>
                <div className='product__rating'>{Array(product.rating).fill().map(rating => (
                  <p>⭐</p>
                ))}</div>
                </div>
                <div>
                  
                  <Button onClick = {() => addToCart(product)} displayName= 'Add to Cart' />

                </div>
              </div>
              
            ))}
            </div>
        
    </div>
  )
}

export default Product