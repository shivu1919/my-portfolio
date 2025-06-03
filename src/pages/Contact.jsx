import React, { useState } from 'react'
import '../css/Contact.css'

function Contact() {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[msg,setMessage] = useState('')
  return (
    <>
        <div className='contact-container'>
            
            <div id="contact-details">
                <h1 style={{color:"white"}}>Contact me:</h1>
                <div id="email-contact">
                    <img src="/email.png" width="50"/>
                    <div>
                        <p style={{color:"white",fontSize:"20px",fontWeight:"700"}}>Email:</p>
                        <p style={{color:"white",fontSize:"18px",fontWeight:"600"}}>shivamthakur.ss129@gmail.com</p>
                    </div>
                </div>

                <div id="mob-contact">
                    <img src="/telephone.png" width="50"/>
                    <div>
                        <p style={{color:"white",fontSize:"20px",fontWeight:"700"}}>Mob:</p>
                        <p style={{color:"white",fontSize:"18px",fontWeight:"600"}}>8630444460</p>
                    </div>
                </div>

            </div>

            <div>
                <form id="contact-form" action="https://formspree.io/f/mdkzoybe" method="POST">
                        <input id="inp" type="text" name="name" required value={name} onChange={(event)=>{setName(event.target.value)}} placeholder='enter your name'/>
                        <input id="inp" type="email" name="email" required value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder='enter your email and whatsapp number'/>
                        <textarea id="inp"  name="message" required placeholder='enter your message' value={msg} onChange={(event)=>{setMessage(event.target.value)}}/>
                        <button id="submit-btn" type="submit">Submit</button>
                </form>

            </div>

        </div>
    </>
  )
}

export default Contact