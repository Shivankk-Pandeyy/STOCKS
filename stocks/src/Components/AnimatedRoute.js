import React from 'react'
import {Routes,Route,useLocation} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Market from '../Pages/Market';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Welcome from '../Pages/Welcome';
import Price from '../Pages/Price';
import News from '../Pages/News';
import {AnimatePresence} from 'framer-motion';
const AnimatedRoute = () => {
    const location=useLocation();
  return (
    <AnimatePresence>
  <Routes location={location} key={location.pathname}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Markets' element={<Market/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
    <Route path='/Welcome' element={<Welcome/>}></Route>
    <Route path='/Price' element={<Price/>}></Route>
    <Route path='/News' element={<News/>}></Route>
    <Route path='*'></Route>
  </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoute