import React from 'react';
import './Components.css';
import favicon from './bitcoin.png';
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className='navbar'>
        <div className='name'>
            <img src={favicon} alt='OFFICIAL LOGO'></img>
            <p title='Unlocking Future Of Finance'>CRYPTO CHASE</p>
        </div>
        <div className='links'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Markets'>Products</NavLink>
            <NavLink to='/Price'>Prices</NavLink>
            <NavLink to='/News'>News</NavLink>
        </div>
        <div className='name1'>
        <NavLink to='/Login'>Login</NavLink>
        <NavLink to='/Signup'>Signup</NavLink>
        </div>

    </div>
  )
}

export default Header