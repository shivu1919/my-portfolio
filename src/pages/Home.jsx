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
                        <p style={{color:"#ffffff", backgroundColor:"transparent", fontSize:"40px", fontWeight:"700", textAlign:"center"}}>Thakur Shivam Kumar</p>
                        <p style={{color:"#ffffffaa", backgroundColor:"transparent", fontSize:"20px"}}>Senior Software Engineer</p>
                        <p style={{color:"#ffffffaa", backgroundColor:"transparent", fontSize:"20px"}}>Corporate & Technical Trainer</p>
                        
                </div>
                </div>


            </div>
        </div>
    </>
  )
}

export default Home