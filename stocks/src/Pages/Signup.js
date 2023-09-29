import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import './style.css'
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion';
import axios from 'axios'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import trade1 from './trade1.webp';

const Signup = () => {
  const navigate = useNavigate();
  const [data,setData]=useState({
    name:"",
    number:"",
    email:"",
    password:"",
  });
  const handledata=(e)=>{
    const {name,value}=e.target;
    setData({
      ...data,
      [name]:value
    });
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(data.name && data.number && data.email && data.password){
      axios.post("http://localhost:3001/test",data)
      .then((res)=>{
        console.log(res);
          alert("User Created");
        setData({
          name:"",
          number:"",
          email:"",
          password:"",
        })
        navigate('/login');
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    else{
      alert("All Feilds Are MANDATORY")
    }
  }
  return (
    <>
    <Header/>
    <motion.div className='login1'>

    <motion.form onSubmit={handlesubmit} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}>
    <div className='login'>
    <motion.div className='l11' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}}>
    <label>Name</label>
    <input type='text' placeholder='Enter Name' name='name' onChange={handledata} value={data.name} autoComplete='off'></input>
    </motion.div>
    <motion.div className='l11' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}}>
    <label>Number</label>
    <input type='text' placeholder='Enter Number' name='number' onChange={handledata} value={data.number} autoComplete='off'></input>
    </motion.div>
    <motion.div className='l11' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}}>
    <label>Email</label>
    <input type='text' placeholder='Enter Email' name='email' onChange={handledata} value={data.email} autoComplete='off'></input>
    </motion.div>
    <motion.div className='l11' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}}>
    <label>Password</label>
    <input type='text' placeholder='Enter Password' name='password' onChange={handledata} value={data.password} autoComplete='off'></input>
    </motion.div>
    <motion.button type='submit' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}}>Signup</motion.button>
    <NavLink to='/Login'>Already An user?</NavLink>
    </div>
    </motion.form>
    <motion.div className='l1' initial={{x:-1000}} animate={{x:10}} transition={{duration:1}}>
    <img src={trade1} alt='TRADE IN CRYPTO'></img>
    </motion.div>
    </motion.div>
    <Footer/>
    </>
  )
}

export default Signup