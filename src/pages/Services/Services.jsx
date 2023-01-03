import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <section className='service-container'>
    <div class="header">
    <h4 className='services-title'>Services</h4>
    <br />
    <br />
    <br />
  </div>
  <div class="row1-container" >
    <div class="box box-down cyan" data-aos="fade-right"
                              data-aos-duration="3000">
      <h2>Outsourcing</h2>
      <br />
      <p>ESAM offers developer hours, offshore dedicated developer capacity, and organization IT department outsourcing services to all corporations through our well-experienced team in the sector of operation.</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
    </div>

    <div class="box red" data-aos="fade-down"
                              data-aos-duration="2000">
      <h2>Software Development</h2>
      <br />
      <p>ESAM is a reputable firm in delivering various types of software development services based on both liners as well as dynamic specifications from our clients following all the industry standards.

</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>

    <div class="box box-down blue" data-aos="fade-left"
                              data-aos-duration="3000">
      <h2>SaaS Solutions</h2>
      <br />
      <p>Running cloud technologies that help to use the software as an online service without installing it through a browser or API, stay cost-effective, agile and versatile with low cost and high effectiness and effeciency

</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
    </div>
  </div>
  <div class="row2-container" >
    <div class="box orange" data-aos="fade-up"
                              data-aos-duration="2000">
      <h2>Technology Consultancy</h2>
      <br />
      <p>ESAM offers technical consultancy services to both local and international organizations in three primary areas, data collection and analysis, process automation, and standard operation procedure designs.</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
    </div>
  </div>
  {/* <div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Course</h6>
			<h2>JavaScript Fundamentals</h2>
			<a href="#">View all chapters <i class="fas fa-chevron-right"></i></a>
		</div>
		<div class="course-info">
			<div class="progress-container">
				<div class="progress"></div>
				<span class="progress-text">
					6/9 Challenges
				</span>
			</div>
			<h6>Chapter 4</h6>
			<h2>Callbacks & Closures</h2>
			<button class="btn">Continue</button>
		</div>
	</div>
</div> */}
    </section>
  )
}

export default Services