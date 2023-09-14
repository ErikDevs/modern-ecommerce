import React from 'react'
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react'

import { CartContext } from '../StateManagement'

const Header = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className='header'>
      <Link className='logo' to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Spring_%28e-commerce_platform%29_logo.svg" className='logo' alt="" />
      </Link>
      <div className='header__search'>
        <i><SearchIcon style={{fontSize: "20px"}} /></i>
        <input type='text' className='header__search-input' placeholder='search products, categories and more' />
      </div>
      <div className='header__user-info'>
         <div className='profile'>
              <i className='user-icon'><AccountCircleOutlinedIcon style={{fontSize: "20px"}} /></i>
              <p className='user-text'>Hi, user</p>
              <i className='view-more'><ExpandMoreOutlinedIcon style={{fontSize: "20px"}}/></i>
              <div className='nav-bar'>
               <div className='profile-items'>

              <div className='profile-account after-effect'>
              <PersonOutlineIcon />
               <Link className='profile__link' to="/login">
              <p>My Account</p>
              </Link>
              </div>

              <div className='profile-orders after-effect'>
              <Inventory2OutlinedIcon />
              <Link className='profile__link' to="/checkout">
                <p>Orders</p>
              </Link>
              </div>
               </div>
              <hr className='divider' />
              <div className='profile__link-footer'>
              <Link className='profile__link' to="/">
                <p>Logout</p>
              </Link>
              </div>
         </div>
         </div>
         
      </div>

      <div className='header__cart'>
      <Link to="/checkout">
          <div className='cart-basket'>
          <i className='cart-icon'><ShoppingCartOutlinedIcon style={{fontSize: "20px"}} /></i>
          <div className="count"><p>{cartItems.length}</p></div>
          </div>
        </Link>
      </div>
      </div>
  )
}

export default Header