import React, { useCallback } from 'react'
import '../App.css'

const Navbar = (props) => {

 const {open, module} = props;

 const onMouseEnter = useCallback(() => props.setMainMenuOpen(!open), []);
 const onMouseLeave = useCallback(() => props.setMainMenuOpen(open), []);
  return (
    <div className= {`nav-bar ${open ? 'open' : ''}`}
    open={setMainMenuOpen}
    onMouseEnter={onMouseEnter}>
       
       <p>Login</p>
        
    </div>
  )
}

export default Navbar