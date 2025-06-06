import React from 'react'
import '../css/Home.css'
import {useNavigate} from "react-router-dom"

function Home() {

  const navigate = useNavigate()
    
  return (
    <>
        <div className='main-home'>
            <div id="main-home-first">
                <div id="my-pic">
                    <img src="/mypic.png" style={{height:"260px",width:"260px", borderRadius:"40px 0 40px 0"}}/>

                  <div id="my-name">
                          <p style={{color:"#ffffff", backgroundColor:"transparent", fontSize:"40px", fontWeight:"700", textAlign:"center"}}>Thakur Shivam Kumar</p>
                          <p style={{color:"#ffffffd1", backgroundColor:"transparent", fontSize:"20px"}}>Senior Software Engineer</p>
                          <p style={{color:"#ffffffd1", backgroundColor:"transparent", fontSize:"20px"}}>Corporate & Technical Trainer</p>
                          
                  </div>
                </div>

                <div id="my-pages">
                    <div id='marquee-text'>
                        <marquee behaviour="alternate" loop="infinite">Thakur Shivam Kumar | Senior Software Engineer | Corporate & Technical Trainer</marquee>
                    </div>

                    <div style={{display:"flex",flexWrap:"wrap", alignItems:"center",justifyContent:"center",columnGap:"10px",rowGap:"10px"}}>

                        <div id="my-about-page">
                            <img src="/name.png" style={{backgroundColor:"transparent"}}/>

                            <div style={{backgroundColor:"transparent",display:"flex", alignItems:"center",justifyContent:"center",columnGap:"10px"}}>
                              <p style={{backgroundColor:"transparent",color:"white",fontSize:"20px"}}>More about me</p>
                              <img onClick={()=>{navigate("/about")}}  src="/icon.svg" style={{backgroundColor:"transparent",width:"40px", cursor:"pointer"}}/>
                            </div>
                        </div>

                        <div id="my-services-page">
                            <img src="/code.webp" style={{backgroundColor:"transparent",width:"230px"}}/>

                            <div style={{backgroundColor:"transparent",display:"flex", alignItems:"center",justifyContent:"center",columnGap:"10px"}}>
                              <p style={{backgroundColor:"transparent",color:"white",fontSize:"20px"}}>Check my services</p>
                              <img onClick={()=>{navigate("/services")}} src="/icon.svg" style={{backgroundColor:"transparent",width:"40px", cursor:"pointer"}}/>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div id='main-home-second'>
                  <div id='my-home-stats'>
                      <div id="years" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"transparent", border:"0.3px solid white",padding:"30px", borderRadius:"12px", height:"100px",width:"250px"}}>
                          <p style={{backgroundColor:"transparent",color:"white",fontSize:"42px",fontWeight:"700"}}>5+</p>
                          <p style={{backgroundColor:"transparent",fontSize:"24px",fontWeight:"400",color:"white"}}>years of experience</p>
                      </div>

                      <div id="projects" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"transparent" , border:"0.3px solid white",padding:"30px" , borderRadius:"12px" , height:"100px",width:"250px"}}>
                          <p style={{backgroundColor:"transparent",color:"white",fontSize:"42px",fontWeight:"700"}}>100+</p>
                          <p style={{backgroundColor:"transparent",fontSize:"24px",fontWeight:"400",color:"white"}}>Projects</p>
                      </div>

                      <div id="students" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"transparent" , border:"0.3px solid white",padding:"30px" , borderRadius:"12px" , height:"100px",width:"250px"}}>
                        <p style={{backgroundColor:"transparent",color:"white",fontSize:"42px",fontWeight:"700"}}>10000+</p>
                        <p style={{backgroundColor:"transparent",fontSize:"24px",fontWeight:"400",color:"white"}}>Students taught</p>
                      </div>
                  </div>

                  <div id='home-social-links'>
                      <p style={{fontSize:"18px",fontWeight:"700",textDecoration:"underline",color:"white",backgroundColor:"transparent"}}>Connect with me</p>
                      <div id='home-social-link'>
                        <img onClick={()=>{window.open("https://github.com/shivu1919", "_blank")}} src="/github.png" alt="" width="58" style={{backgroundColor:"transparent", cursor:"pointer"}}/>
                        <img onClick={()=>{window.open("https://www.linkedin.com/in/shivam1919/")}} src="linkedin.png" alt="" width="58" style={{backgroundColor:"transparent", cursor:"pointer"}}/>
                        <img onClick={()=>{window.open("https://instagram.com/_imshivam.01")}} src="instagram.png" alt="" width="58" style={{backgroundColor:"transparent", cursor:"pointer"}}/>
                        <img onClick={()=>{window.open("https://wa.me/8630444460")}} src="whatsapp.png" alt="" width="58" style={{backgroundColor:"transparent", cursor:"pointer"}}/>
                        </div>
                      </div>
                      
            </div>
        </div>
    </>
  )
}

export default Home