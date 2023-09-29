import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import './style.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {motion} from 'framer-motion';
import trade1 from './trade1.gif'
import favicon from '../Components/bitcoin.png';
import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'
const Home = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <>
    <Header/>
    <motion.div className='home' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <motion.div className='h1' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.8}}>
      <h2>Best</h2>
      <h2> CryptoCurrency</h2>
      <h2>MarketPlace</h2>
      <p>Welcome to CryptoChase</p>
      <p>Discover The Fascinating World Of </p>
      <p style={{fontWeight:700}}>CryptoCurrencies</p>
      <p>Explore Real Time Prices,Trade Digital Assets, </p>
      <p>And Stay Updated With The Latest News</p>
      <p>Your Journey Of Finance Starts Here</p>
      <div className='h11'>
      <button><NavLink to='/Login'>About Us</NavLink></button>
      <button><NavLink to='/Contact'>Contact</NavLink></button>
      </div>
    </motion.div>
    <motion.div className='h2' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
      <img src={trade1} alt='STOCK MARKET INVESTMENT'></img>
    </motion.div>
    </motion.div>
    {/* NEW */}
    <div className='h22'>
    <div className='h222'>
      <motion.img  src={favicon} alt='OFFICIAL LOGO'  data-aos="flip-left" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}></motion.img>
      <motion.h2  data-aos="fade-up" initial={{opacity:0}} animate={{opacity:1}} >The CryptoChase UNIVERSE</motion.h2>
      <motion.h2 data-aos="fade-up" initial={{opacity:0}} animate={{opacity:1}} >A Whole Ecosystem Of </motion.h2>
      <motion.h2 data-aos="fade-up" initial={{opacity:0}} animate={{opacity:1}} > Modern Investment Apps</motion.h2>
    </div>
    <motion.div className='h222' data-aos='fade-up' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
    <h2>Best Stock Broker In India</h2>
    <h2>Unbeatable Pricing</h2>
    <p>We Pioneered The Concept Of Discount Broking And Price</p>
    <p>Flat Fees And No Hidden Hidden Charges</p>
    <p>Open A CryptoChase Account</p>
    <p>Modern Platform And Apps,₹0 Joining Fees!</p>
    <button data-aos='flip-down'><NavLink to='/Signup'>Sign Up Now</NavLink></button>
    </motion.div>
    </div>
    {/* NEWW */}
    <div className='h3'>
    <div className='h33'>

    </div>
    <div className='h33'>

    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home;