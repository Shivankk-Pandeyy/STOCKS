import React, { useEffect, useState } from 'react'
import './style.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {motion} from 'framer-motion';
import AOS from 'aos'
const News = () => {
  const [news,setnews]=useState([]);
  useEffect(()=>{
    async function fetchdata(){
      const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8d203086577e448da4ad936bfb676ad1');
      const Data= await res.json();
      console.log(Data.articles);
      setnews(Data.articles);
    }
    fetchdata()
    AOS.init({duration:1000});
  },[]);
  console.log(news)
  return (
    <>
        <Header/>
        <div className='headline'>
          <motion.h2 initial={{opacity:0}} animate={{opacity:1}}  transition={{duration:1}}>Top Headlines For The Day</motion.h2>
        </div>
        <motion.div className='news'  initial={{opacity:0}} animate={{opacity:1}}  transition={{duration:1,delay:0.5}}>
        {
          news.map((val)=>{
            return(
              <div className='price1' data-aos="flip-left">
              <h2>Title</h2>
              <p>{val.title}</p>
              <h2>Content</h2>
              <p>{val.content}</p>
              <h2>Description</h2>
              <p>{val.description}</p>
              <h2>Author</h2>
              <p>{val.author}</p>
              <h2>Link</h2>
              <a href={val.url}  target="_blank">Click Here</a>
              </div>
            )
          })
        }
        </motion.div>
        <Footer/>
    </>
  )
}

export default News