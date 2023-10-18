import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../StateManagement';
import Navbar from './Navbar';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../utils/firebase'


const Header = () => {
  const { cartItems } = useContext(CartContext)

  const [user, loading ] = useAuthState(auth);

 return (
    <div className='header'>
      <Link className='logo' to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Spring_%28e-commerce_platform%29_logo.svg" className='logo' alt="" />
      </Link>
      <div className='header__search'>
        <i><SearchIcon /></i>
        <input type='text' className='header__search-input' placeholder='Search products, categories and more' />
      </div>
      <div className='header__user-info'>
         <div className='profile'>
                <Link className="sub-profile"style={{textDecoration: "none", color: "#030303"}} to="/account">
                  <i className='user-icon'><AccountCircleOutlinedIcon className='icon user' /></i>
                  <p>Hi, {user? <span>{user.displayName}</span> : <span>User</span>}  </p></Link>
                <Navbar />
            </div> 
          </div>
          <div className='header__cart'>
          <Link to="/checkout">
          <div className='cart-basket'>
          <i className='cart-icon'><ShoppingCartOutlinedIcon className='icon' /></i>
          <div className="count"><p>{cartItems.length}</p></div>
          </div>
        </Link>
      </div>
     <Link style={{textDecoration: "none", color: "#030303"}} to='/checkout'> <p className='cart-name'>cart</p> </Link>
      
      </div>
  )
}

export default Header 