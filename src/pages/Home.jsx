import React from 'react'
import '../css/Home.css'

function Home() {
  return (
    <>
        <div className='main-home'>
            <div id="main-home-first">
                <div id="my-pic">
                    <img src="/mypic.png" style={{height:"260px",width:"260px", borderRadius:"35px 0 35px 0"}}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home