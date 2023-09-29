import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <>
    <Header/>
    <div className='c1'>
      <motion.div className='l1' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}}>
        <p>Office:St-100,A-1096,Canada</p>
        <p>Opening Hours</p>
        <ul>
          <li>Monday:10:00am - 4:00pm</li>
          <li>Tuesday:10:00am - 4:00pm</li>
          <li>Wednesday:10:00am - 4:00pm</li>
          <li>Thrusday:10:00am - 4:00pm</li>
          <li>Friday:10:00am - 4:00pm</li>
        </ul>
        <ul>
          <li>Saturday:12:00pm - 4:00pm</li>
          <li>Sunday:12:00pm - 2:00pm</li>
        </ul>
        <p>Phone:(+91)__________</p>
      </motion.div>
      <motion.div className='contact' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.5}}>
      <h2>General Manager</h2>
        <h2>Shivank Pandey</h2>
        <p>Email:pandeyshivank21@gmail.com</p>
        <p>Phone:(+91)7389288618</p>
        <p>Website:<a href='https://shivankk-pandeyy.github.io/REPO1/index.html'>www.ShivankPandey.com</a></p>
        <p>Available Hours</p>
        <ul>
          <li>Monday-Friday:12:00pm - 5:00pm</li>
        </ul>
    </motion.div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact;