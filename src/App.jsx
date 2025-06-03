import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './Navbar'
import Home from "./pages/Home"
import About from "./pages/About"
import Services from './pages/Services'

function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar />

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path="/services" element={<Services/>}></Route>
            </Routes>
        </BrowserRouter>
    </>    
  )
}

export default App