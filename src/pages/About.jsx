import React from 'react'
import '../css/About.css'

function About() {
  return (
    <>
        <div className='about-container'>
            <h1 style={{fontSize:"50px",color:"white"}}>Self Summary</h1>

            <div id="about-first">
                <div>
                   <img src="/mypic2.png" style={{borderRadius:"50%",width:"350px"}}/>
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


        </div>
    </>
  )
}

export default About