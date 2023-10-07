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



const Navbar = () => {

 
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <>
    <button className='toggle-menu' onClick={toggleMenu}>{menuOpen ? <CloseIcon /> : <MenuIcon />}</button>
    <i className="view-more" onClick={toggleMenu}>{menuOpen? <ExpandLessIcon className='icon' />  : <ExpandMoreOutlinedIcon className='icon'/>}</i>
            {menuOpen && (
                <div className='nav-bar'>
                <div className='profile-items'>
                      <Link onClick={toggleMenu} className='profile__link after-effect' to="/login">
                      <PersonOutlineIcon className='icon' />
                      <p>My Account</p>
                      </Link>
                      <Link onClick={toggleMenu} className='profile__link after-effect' to="/checkout">
                      <Inventory2OutlinedIcon className='icon' />
                      <p>Orders</p> </Link>
                      <Link onClick={toggleMenu} className='profile__link after-effect ' to="/">
                      <LogoutIcon className='icon'/>
                      <p>Logout</p></Link>
                </div>
                      
               </div>
              )
            }
     </>
  )
}

export default Navbar