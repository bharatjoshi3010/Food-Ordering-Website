import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img className="logo" src={assets.logo} alt="" />
      <ul className="navbar-menu">
        {/* the usestate variable - menu will change when we click on these so it will show a Underline(we set it in 'active' class) on the option which is setted on menu that time  */}
        <Link to='/' onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>{setMenu("mobile-app")}} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"?"active":""}>Contact Us</a>
        {/* these href take you to the components having these 'id' */}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className='dot'></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
