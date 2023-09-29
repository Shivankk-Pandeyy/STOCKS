import React from 'react'
import './style.css';
import favicon from '../Components/bitcoin.png';
import { NavLink } from "react-router-dom";
const WelcomeHeader = () => {
  return (
    <div className='navbar'>
        <div className='name'>
            <img src={favicon} alt='OFFICIAL LOGO' title='RAINING BITS'></img>
            <p title='Unlocking Future Of Finance'>CRYPTO CHASE</p>
        </div>
        <div className='links'>
            <NavLink to='/News'>Stocks</NavLink>
            <NavLink to='/Markets'>Markets</NavLink>
            <NavLink to='/Prices'></NavLink>
            <NavLink to='/News'>Cart</NavLink>
        </div>
        <div className='name11'>
        <NavLink to='/Login'>Logout</NavLink>

        </div>
    </div>
  )
}

export default WelcomeHeader