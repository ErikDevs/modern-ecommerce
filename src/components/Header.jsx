import React from 'react'
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
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
        <i><SearchIcon /></i>
        <input type='text' className='header__search-input' placeholder='search products, categories and more' />
      </div>
      <div className='header__user-info'>
         <div className='profile'>
              <i className='user-icon'><AccountCircleOutlinedIcon style={{fontSize: "20px"}} /></i>
              <p>Hi, User</p><i className='view-more'><ExpandMoreOutlinedIcon style={{fontSize: "20px"}}/></i>
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