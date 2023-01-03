import React, { useRef } from 'react';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail,MdLocationOn} from 'react-icons/md'
import './Contact.css'
const Contact = () => {

  return (
    <div className='contact-container'>
             
            <form className='contactForm'>
              <h1>Contact Us</h1>
              <br />
                < input className='input-field' placeholder='Your Name' type="text" name="user_name" id="" />
                < input className='input-field' type="email" placeholder='Your email' name="user_email" id="" />
                < input className='input-field' type="text" placeholder='Subject' name="user_subject" id="" />
                < textarea className='text-field' placeholder='Message' type="text" name="message" id="" />
                <button type="submit" className='btn-contact'>Send Now</button>
            </form>  
            <div className="iframe-map">
                <h1>Get In Touch</h1>
                <p><BsFillTelephoneFill/>  +251118221001</p>
                <p><BsFillTelephoneFill/> +251118221001</p>
                <p> <MdEmail/>  info@minabtech.com</p>
                <p><MdLocationOn/> Addis Ababa, Ethiopia <br />
Bole, Behind DH-geda Tower, Afomi Building 3rd floor, Addis Ababa</p>
                <iframe  className='cont-map' frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=addis ababa university&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
    
    </div>
  )
}

export default Contact