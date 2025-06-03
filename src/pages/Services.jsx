import React from 'react'
import '../css/Services.css'

function Services() {
  return (
    <>
        <div className='services-container'>
            <div id="services-first">
                <p style={{color:"white", width:"70%",fontSize:"20px",textAlign:"justify"}}>I am a highly skilled and results-driven Full-Stack Software Developer with over 5 years of hands-on experience in designing, developing, and deploying scalable enterprise applications using modern technologies. Specialized in Java (Spring Boot, Hibernate) on the backend and React & Angular on the frontend, with solid proficiency in MySQL for relational database management. 
                
                In addition to development expertise, I offer corporate and technical training programs tailored to professionals and organizations aiming to build or upskill their development teams in cutting-edge technologies and best practices.</p>
            </div>
            <br/>
            <br/>
            <h1 style={{color:"white",letterSpacing:"2px",textAlign:"center"}}>Service Offerings</h1>
            <br/>
            <div id="services-second">
                <div className="service">
                  <button className='service-btn'>Web Development</button>
                  <p style={{textAlign:"center",height:"40%"}}>Web development including personal portfolio, business, school and ecommerce website</p>
                </div>

                <div className="service">
                  <button className='service-btn'>Mobile App Dev.</button>
                  <p style={{textAlign:"center",height:"40%"}}>Offers service related to mobile app development using React Native</p>
                </div>  

                <div className="service">
                  <button className='service-btn'>Full Stack App dev.</button>
                  <p style={{textAlign:"center",height:"40%"}}>End-to-end design and implementation of web apps using Java, Spring Boot, React/Angular, and MySQL.</p>
                </div>                
                
                <div className="service">
                  <button className='service-btn'>API Dev. & Integration</button>
                  <p style={{textAlign:"center",height:"40%"}}>Secure and scalable REST API development with Swagger documentation.</p>
                </div>

                <div className="service">
                  <button className='service-btn'>Database Design</button>
                  <p style={{textAlign:"center",height:"40%"}}>Schema design, query tuning, normalization, and performance optimization in MySQL.</p>
                </div>

                <div className="service">
                  <button className='service-btn'>Technical training</button>
                  <p style={{textAlign:"center",height:"40%"}}>Role-based technical courses with live coding, assignments, and evaluation.</p>
                </div>
                <div className="service">
                  <button className='service-btn'>Code Review</button>
                  <p style={{textAlign:"center",height:"40%"}}>Review of existing codebases to improve performance, security, and maintainability.</p>
                </div>
                <div className="service">
                  <button className='service-btn'>Personal mentorship</button>
                  <p style={{textAlign:"center",height:"40%"}}>Provide one to one mentorship about personal and professional aspects.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services