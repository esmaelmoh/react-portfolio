import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
    {/* <h1 className='about-title'>About Us</h1> */}
    <div className='about-container'>
      <div className="about-img-container"data-aos="fade-up-right" data-aos-duration="1500" >
        <img src="images/about.png" alt="" />
      </div>
      <div className="about-content-container">
          <h1>About</h1>
          <p>Founded in 2014 by three college friends in Addis Ababa. Minab IT Solutions Plc is a technology solutions provider with teams in Addis Ababa, Hawassa, Mekelle, Adama, Diredawa, Debre Birhan, Bahir Dar, Bulbula, Bure, Yirgalem and Kombolcha. Minab is a technology consulting and cloud platforms development firm that has worked on several governments and international development organization projects in Ethiopia, Nigeria, Mali, Morocco, Ghana, etc. Among others, our implementation sector includes jobs matching services, data analysis, and reporting tools, enterprise process automation, and property management solutions affording us an excellent reputation with our clients in delivering outstanding results as evidenced in their testimonies. We have a testified willingness to take ownership of issue analysis and resolution efforts and commitment to resolving technical issues regardless of effort or time scoped of any engagement.

      </p>
      </div>
    </div>
    </>
  )
}

export default About