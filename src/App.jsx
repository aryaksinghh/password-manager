import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar"
import Manager from "./components/manager"
import Footer from "./components/footer"

function App() {
  

  return (
    <>
      <Navbar/>
      <Manager/>
      <Footer/>
    </>
  )
}

export default App