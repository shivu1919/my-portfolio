import React from 'react'
import '../css/About.css'

function About() {
  return (
    <>
        <div className='about-container'>
            <h1 style={{fontSize:"50px",color:"white"}}>Self Summary</h1>

            <div id="about-first">
                <div>
                   <img id="mypic2" src="/mypic2.png" />
                </div>

                <div id="about-education">
                  <h1 style={{background:"transparent",color:"white"}}>Education...</h1>
                <div style={{background:"transparent",padding:"8px",border:"0.3px solid white", borderRadius:"8px", color:"white"}}>
                  <h1 className="about-heading">Bachelor of Technology (CSE)</h1>
                  <h2 className='about-subheading'>Insitute of Technoogy & Management, Aligarh</h2>
                </div>
                <div style={{background:"transparent" ,padding:"8px",border:"0.3px solid white", borderRadius:"8px", color:"white"}}>
                  <h1 className="about-heading">Senior Secondary (12th)</h1>
                  <h2 className='about-subheading'>Ketan Convent School, Aligarh</h2>
                </div>

                <div style={{background:"transparent",padding:"8px",border:"0.3px solid white", borderRadius:"8px", color:"white"}}>
                  <h1 className='about-subheading'>Secondary (10th)</h1>
                  <h2 className='about-subheading'>Ketan Convent School, Aligarh</h2>
                </div>

              </div>
            </div>

            <div id="about-second">
                <div>
                  <h1 style={{background:"transparent",color:"white"}}>Experience</h1>
                </div>

                <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",rowGap:"10px",columnGap:"10px"}}>
                <div style={{border:"0.8px solid white",width:"385px",height:"142px",padding:"20px",color:"white"}}>
                    <h1>Co-founder & CEO</h1>
                    <h2>AbhyaasIndia</h2>
                    <p>Oct 2021 - Present</p>
                </div>

                <div style={{border:"0.8px solid white",width:"385px",height:"142px",padding:"20px",color:"white"}}>
                    <h1>Senior Software Engineer</h1>
                    <h2>ThingMZing Zee(Group)</h2>
                    <p>Oct 2021 - May 2022</p>
                </div>

                <div style={{border:"0.8px solid white",width:"385px",height:"142px",padding:"20px",color:"white"}}>
                    <h1>Sofware Engineer</h1>
                    <h2>Channel 176</h2>
                    <p>Oct 2020 - sept 2021</p>
                </div>
                <div style={{border:"0.8px solid white",width:"385px",height:"142px",padding:"20px",color:"white"}}>
                    <h1>Web development Intern</h1>
                    <h2>Ekart</h2>
                    <p>Mar 2020 - September 2020</p>
                </div>   

                </div>

           
            </div>

            <div id="about-third">
                  <h1 style={{color:"white"}}>Technical skill set</h1>
                  
                  <div id="tech-stack-box">
                      <h1>Backend</h1>
                      <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",rowGap:"10px",columnGap:"10px"}}>
                      <button id="tech-btn">Java</button>
                      <button id="tech-btn">Spring Boot</button>
                      <button id="tech-btn">Spring Data JPA</button>
                      <button id="tech-btn">Spring Web MVC</button>
                      <button id="tech-btn">Hibernate</button>
                      </div>

                  </div>

                  <div id="tech-stack-box">
                      <h1>Frontend</h1>
                      <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",rowGap:"10px",columnGap:"10px"}}>
                      <button id="tech-btn">React</button>
                      <button id="tech-btn">Angular</button>
                      <button id="tech-btn">HTML 5</button>
                      <button id="tech-btn">CSS 3</button>
                      <button id="tech-btn">Javascript</button>
                      <button id="tech-btn">Typescript</button>
                      <button id="tech-btn">Bootstrap</button>
                      <button id="tech-btn">Tailwind CSS</button>
                      </div>

                  </div>

                    <div id="tech-stack-box">
                      <h1>Databases</h1>
                      <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",rowGap:"10px",columnGap:"10px"}}>
                      <button id="tech-btn">MySQL</button>
                      <button id="tech-btn">Oracle</button>
                      <button id="tech-btn">MongoDB</button>
                      </div>

                  </div>

                  <div id="tech-stack-box">
                      <h1>Tools</h1>
                      <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",rowGap:"10px",columnGap:"10px"}}>
                      <button id="tech-btn">Git</button>
                      <button id="tech-btn">Github</button>
                      <button id="tech-btn">Maven</button>
                      <button id="tech-btn">Docker</button>
                      <button id="tech-btn">Postman</button>
                      <button id="tech-btn">Swagger</button>
                      </div>

                  </div>
                  <div id="tech-stack-box">
                      <h1>Architecture</h1>
                      <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",rowGap:"10px",columnGap:"10px"}}>
                      <button id="tech-btn">Microservices</button>
                      <button id="tech-btn">Monolithic</button>
                      <button id="tech-btn">MVC</button>
                      </div>

                  </div>
            </div>

        </div>
    </>
  )
}

export default About
