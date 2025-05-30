import React from 'react'
import '../css/Home.css'

function Home() {
  return (
    <>
        <div className='main-home'>
            <div id="main-home-first">
                <div id="my-pic">
                    <img src="/mypic.png" style={{height:"260px",width:"260px", borderRadius:"40px 0 40px 0"}}/>

                  <div id="my-name">
                          <p style={{color:"#ff0000", backgroundColor:"transparent", fontSize:"40px", fontWeight:"700", textAlign:"center"}}>Thakur Shivam Kumar</p>
                          <p style={{color:"#ffffffd1", backgroundColor:"transparent", fontSize:"20px"}}>Senior Software Engineer</p>
                          <p style={{color:"#ffffffd1", backgroundColor:"transparent", fontSize:"20px"}}>Corporate & Technical Trainer</p>
                          
                  </div>
                </div>

                <div id="my-pages">
                    <div id='marquee-text'>
                        <marquee behaviour="alternate">Thakur Shivam Kumar | Senior Software Engineer | Corporate & Technical Trainer</marquee>
                    </div>

                    <div style={{display:"flex",flexWrap:"wrap", alignItems:"center",justifyContent:"center",columnGap:"10px",rowGap:"10px"}}>

                        <div id="my-about-page">
                            <img src="/name.png" style={{backgroundColor:"transparent"}}/>

                            <div style={{backgroundColor:"transparent",display:"flex", alignItems:"center",justifyContent:"center",columnGap:"10px"}}>
                              <p style={{backgroundColor:"transparent",color:"white",fontSize:"20px"}}>More about me</p>
                              <img src="/icon.svg" style={{backgroundColor:"transparent",width:"40px"}}/>
                            </div>
                        </div>

                        <div id="my-services-page">
                            <img src="/code.webp" style={{backgroundColor:"transparent",width:"230px"}}/>

                            <div style={{backgroundColor:"transparent",display:"flex", alignItems:"center",justifyContent:"center",columnGap:"10px"}}>
                              <p style={{backgroundColor:"transparent",color:"white",fontSize:"20px"}}>Check my services</p>
                              <img src="/icon.svg" style={{backgroundColor:"transparent",width:"40px"}}/>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Home