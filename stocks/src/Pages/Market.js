import React from 'react'
import './style.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {motion} from 'framer-motion'
const Market = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <>
    <Header/>
    <motion.div className='market' variants={container} initial="hidden" animate="visible">
        <div className='m1' variants={item} initial="hidden" animate="visible">
            <div className='m11'>1</div>
            <div className='m11'>1</div>
            <div className='m11'>1</div>
            <div className='m11'>1</div>
            <div className='m11'>1</div>
            <div className='m11'>1</div>
            <div className='m11'>1</div>
            <div className='m11'>1</div>
            <div className='m11'>1</div>
        </div>
    </motion.div>
    <Footer/>
    </>
  )
}

export default Market