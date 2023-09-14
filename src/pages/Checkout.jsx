import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../StateManagement'
import '../App.css'



const Checkout = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
  return (
    <div className='cart'>
     <div className="cart-title">
           <h2>Cart</h2>
        </div>
        <div className='cart-header'>
           <h2>Product</h2>
           <h2>Quanity</h2>
           <h2>Price</h2>
        </div>
        <hr />
        {cartItems.map(item => (
          <>
              <div className="cart-product">
               <div className="product-photo">
                      <img src={item.image} alt="photo" />
                      <p className='title'>{item.title}</p>
              </div>
                  
               <div className="product-quanity">
               <button onClick={() => {removeFromCart(item)}}>-</button>
                  <p className='quantity-tag'>{item.quantity}</p>
                <button onClick={() => {addToCart(item)}}>+</button>
               </div>

               <div className="product-price">
                 <p>${item.price}</p>
               </div>
        </div>
        <hr />
        </>
        ))}

        {cartItems.length > 0 ? (<div className='subtotal-section'>
            <h2 className='subtotal'>Total: ${getCartTotal().toFixed(2)}</h2>
            <Link to="payment" className='payment-link'><h3 className='payment'>Continue to checkout</h3></Link>
            <button className='clear-btn' onClick={() => {clearCart()}}>Remove All</button>
        </div>) : (<div className='empty-cart'><h2>Your cart is currently empty</h2><span className='continue-shopping'><Link className='shopping-link' to="/"><p>Continue Shoping</p></Link></span></div>)}
      
   </div>
        
  )
}

export default Checkout