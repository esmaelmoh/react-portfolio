import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className="showcase-container">
        <div className="show-text">
          <h1 data-aos="fade-down" data-aos-duration="1700" >We are Software Developers</h1>
          <br />
          <h3 data-aos="zoom-in-right" data-aos-duration="1500" >With the synergy of Excellent communication, Experienced Engineers, and Latest technology trends, we will provide you with the best quality services and products Take on the software challenges and develop premium solutions with a robust technical partner. We provide comprehensive solutions in software outsourcing: from tailor made softwares to support in product development, general digital transformation, testing, and maintenance.</h3>
          <br />
          <button data-aos="fade-up" data-aos-duration="1700"  className='show-btn'>Contact</button>
        </div>
        <div className="show-image-container" data-aos="fade-up"  data-aos-duration="2000">
         <img src="images/building-website.png" alt="" />
        </div>
        
        </div>
    </div>
  )
}

export default Home