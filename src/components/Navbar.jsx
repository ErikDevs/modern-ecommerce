import React, {useState} from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../utils/firebase'



const Navbar = () => {

  const [user, loading ] = useAuthState(auth);
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <>
    <button className='toggle-menu' onClick={toggleMenu}>{menuOpen ? <CloseIcon className='menu-btn' /> : <MenuIcon className='menu-btn' />}</button>
    <i className="view-more" onClick={toggleMenu}>{menuOpen? <ExpandLessIcon className='icon' />  : <ExpandMoreOutlinedIcon className='icon'/>}</i>
            {menuOpen && (
              <>
                <div className='nav-bar'>
                 
                <div className='profile-items'>
                      <Link onClick={toggleMenu} className='profile__link after-effect' to={user? "/account" : "/login"}>
                      <PersonOutlineIcon className='icon' />
                      <p>{user? <span>{user.displayName}</span> : <span>My Account</span> }</p>
                      </Link>
                      <Link onClick={toggleMenu} className='profile__link after-effect' to="/checkout">
                      <Inventory2OutlinedIcon className='icon' />
                      <p>Orders</p> </Link>
                      <Link onClick={toggleMenu} className='profile__link after-effect ' to="/">
                      <LogoutIcon className='icon'/>
                      <p onClick={() => auth.signOut()}>Logout</p></Link>
                </div>
               
               </div>
               <div className='overlay'></div>
               </>
              )
            }
     </>
  )
}

export default Navbar