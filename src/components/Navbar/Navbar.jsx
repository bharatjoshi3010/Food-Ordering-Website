import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img className="logo" src={assets.logo} alt="" />
      <ul className="navbar-menu">
        {/* the usestate variable - menu will change when we click on these so it will show a Underline(we set it in 'active' class) on the option which is setted on menu that time  */}
        <li onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>{setMenu("mobile-app")}} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
        <li onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"?"active":""}>Contact Us</li>
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
