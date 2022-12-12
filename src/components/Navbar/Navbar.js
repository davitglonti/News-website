
import React, {useState} from 'react'
import './Navbar.css'


import {Link} from "react-router-dom";
const Navbar = () => {
    const [NavbarChecker,setNavbarChecker]=useState(false)
  return (
    <div className='navbar'>

 <img src='https://cdn-icons-png.flaticon.com/512/21/21601.png' className='logo'/>
   <div className='navlinks'>
   <ul>
   
   <Link to="/" className='Link'>
      <li >Home</li>
      </Link>
   <Link to="/Politics" className='Link'>
     <li>Politics</li>
   </Link>

   <Link to="/Sports" className='Link'>
    <li>sports</li>
    </Link>
    <Link to="/Politics" className='Link'>
    <li>Culture</li>
  </Link>
  <Link to="/HotNews" className='Link'>
    <li>HotNews</li>
    </Link>
    <li>We</li>
   </ul>
   </div>
  
    </div>
  )
}

export default Navbar


