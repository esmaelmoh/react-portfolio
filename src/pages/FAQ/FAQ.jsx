import React, { useState } from 'react'
import {FaChevronDown} from 'react-icons/fa'
import FaqCard from '../../components/FaqCard/FaqCard'
import './FAQ.css'
const FAQ = () => {
  return (
    <>
      <h1 className='faq-title-one'>Why ESAM</h1>
      <h2 className='faq-title-two'>We Achieved People’s Trust By Our Great Service</h2>
    <div className='faq-container'>
      <div className="faq-img-container">
      <img src="images/faq-image.png" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="3000" alt="" />
      </div>
      <div className="faq-answers">
        {data.map((item)=>{
          return <FaqCard item= {item}/>
         
        })}
        
        </div>
    </div>
    </>
  )
}

export default FAQ

const data = [
  {
    faqQuesiion:'We create experiences',
    duration:1000,
    faqAnswer:'We create experiences that are attractive, simple to use, and drive results for your company. We are well experienced on software development, ERP deployment and website design, in addition we’re really focused on making things work for your audience … and your business.'
  },
  {
    faqQuesiion:'Do you offer cost-effective software and website outsourcing services?',
    duration:1300,
    faqAnswer:'Unlike other outsource development companies, we offer all the services at a competitive price. We believe in providing cost-effective, professional, and reliable services. Being one of the top outsourcing companies in India, our experts deliver high-quality solutions.'


  },
  {
    faqQuesiion:'Do you provide maintenance and support after deployment?',
    duration:1600,
    faqAnswer:'Yes we do, sustaining a software or website application is equally important as developing as it keeps the application healthy and relevant. Our maintenance services include feature enhancements, optimization, bug fixing, and preventive maintenance.'
  },
  {
    faqQuesiion:'What technologies do we use to develop Software websites?',
    duration:1900,
    faqAnswer:'We offer a variety of website and software development services that are inclusive of a range of technologies, diversified frameworks and programming languages. However, the selection of technology stack is completely dependent on the client for their project as to what brings the best of business performance for them. Although, we suggest and assist businesses by analyzing their business requirements, budget, future demands and available technology stack.'
  },
  {
    faqQuesiion:'Does it cost much after production?',
    duration:2200,
    faqAnswer:'Unlike other outsource development companies, we offer all the services at a competitive price. We believe in providing cost-effective, professional, and reliable services. Being one of the top outsourcing companies in India, our experts deliver high-quality solutions.'
  },
]
  {/* <div className="quesion-container">
      <p>Why you choose us</p>
      <button><FaChevronDown/></button>
  </div> */}