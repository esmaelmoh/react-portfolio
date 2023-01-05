import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='foot-container'>
        <div className='foot-info'>
            <div className='foot-logo' data-aos="zoom-right" data-aos-duration="1500">
            <img src="images/logo7.png" alt="" />
            </div>
            <div className='foot-about' >
            <h1>ABOUT</h1>
            <p>We are ESAM Technologies. <br /> If you are looking for Brand new, Gaming And used Laptops, You are in the right place! With one year guarantee <br /> “Quality product with Affordable price”
                location: Megenagna Betelehem building ground floor no 17</p>
            </div>
            <div className='foot-contact' data-aos="zoom-left" data-aos-duration="1500">
            <h1>CONTACT US</h1>
            <p>ESAM Technologies</p>
            <p>Megenaga Maraton Building, Ground Floor, No 17</p>
            <p>+251 912 75 99 00 <br />
                +251 920 15 33 33 </p>
            <p>esmaelmoh0132@gmail.com</p>
            </div>
        </div>
        <hr  className='horizontal-line'/>
        <br />
        <p className='developer'>Developed by <span style={{color:'rgb(255, 0, 106)'}}>Esmael Mohammed</span>  | © ESAM Technologies</p>
        <br />
    </div>
  )
}

export default Footer