import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import './style.css';
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion';
import axios from 'axios';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import trade from './trade.gif';
const Login = () => {
  const navigate = useNavigate();
  const [data,setData]=useState({
    email:"",
    password:""
  });
  const handledata=(e)=>{
    const {name,value}=e.target;
    setData({
      ...data,
      [name]:value
    });
  }
  const handlesubmit=(e)=>{
if(data.email && data.password){
  e.preventDefault();
  axios.post("http://localhost:3001/login",data)
  .then((res)=>{
    console.log(res);
    console.log(res.data.message)
    if(res.data.message==="Login"){
      navigate('/Welcome')
    }
    setData({
      email:"",
      password:""
    })
  })
  .catch((err)=>{
    console.log(err);
    if(err.message==="Invalid Credentials"){
      alert("Invalid")
    }
    alert("Enter Correct Details");
  })
}
else{
  alert("All Feilds Are Mandatory");
}
  }

  return (
    <>
    <Header/>
    <motion.div className='login1' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    
    <motion.form onSubmit={handlesubmit} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}>
    <div className='login'>
    <motion.div className='l11' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}}>
    <label>Email</label>
    <input type='text' placeholder='Enter Email' name='email' onChange={handledata} autoComplete='off'></input>
    </motion.div>
    <motion.div className='l11' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}}>
    <label>Password</label>
    <input type='text' placeholder='Enter Password' name='password' onChange={handledata} autoComplete='off'></input>
    </motion.div>        
    <motion.button type='submit' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}}>Login</motion.button>
    <NavLink to='/Signup'>Signup?</NavLink>
    </div>
    </motion.form>
    <motion.div className='l1' initial={{x:-1000}} animate={{x:10}} transition={{duration:1}}>
        <img src={trade} alt='TRADE IN CRYPTO'></img>
    </motion.div>
    </motion.div>
    <Footer/>
    </>
  )
}

export default Login;