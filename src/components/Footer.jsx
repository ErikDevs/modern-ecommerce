import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='footer-top'>
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Spring_%28e-commerce_platform%29_logo.svg" className='logo' alt="" /></Link>
        <div className='center'>
          <h3>NEW TO SPRING?  </h3>
          <p>Subscribe to our new letter to get updates on our latest offers!</p>
          <div className='form'>
             <input className='form-input' placeholder='example@gmail.com' type="text" />
             <div className='gender'>
             <p className='outlined'>Male</p>
             <p className='outlined'>Female</p>
             </div>
             <button className='submit'>Submit</button>
          </div>
        </div>
           <div className='right-side'>
            <p>Get Exclusive Offers only at Sring</p>
          </div>
      </div>


      <div className='footer-links'>
             <div className='group-one'>
               <h3>NEED HELP?</h3>
               <p>Chat with us</p>
               <p>Help center</p>
               <p>Conatct Us</p>
               <br />
               <h3>USEFUL LINKS</h3>
               <p>Track Your order</p>
               <p>Shipping and Delivery</p>
               <p>Return Policy</p>
               <p>How to order</p>
               <p>Dispute Resolution Policy</p>
               <p>Corporate and Bulk Purchase</p>
             </div>
             <div className='group-two'>
                      <h3>ABOUT SPRING</h3>
                      <p>About us</p>
                      <p>Returns and Refunds Policy</p>
                      <p>SPRING Careers</p>
                      <p>SPRING Express</p>
                       <p> Terms and Conditions</p>
                      <p>Store Credit Terms and Conditions</p>
                      <p>Privacy Notice</p>
                      <p>Cookies Notice</p>
                      <p> Flash Sales</p>
             </div>

             <div className='group-three'>
                    <h3> MAKE MONEY WITH SPRING</h3>
                    <p>Sell on SPRING</p>
                    <p>Vendor Hub</p>
                    <p> Become a Sales Consultant</p>
                    <p> Become a Logistics Service Partner</p>
                    <p> Spring City Partner Program</p>
             </div>

             <div className='group-four'>
            <h3> SPRING INTERNATIONAL</h3>
                <div className='countries'>
                <div className='counries-left'>
                <p> Algeria</p>
                <p>Ivory Coast</p>
                <p>Egypt</p>
                <p>Ghana</p>
                <p>Morocco</p>
                </div>
                <div className="counties-right">
                <p>Nigeria</p>
                <p>Senegal</p>
                <p>Tunisia</p>
                <p>Uganda</p>
                <p>Zando</p>
                </div>
                </div>
             </div>
          </div>
          
    </div>
  )
}

export default Footer