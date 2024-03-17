import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About'

function App() {

  return (
    <>
      <Navbar title="Nevubar"></Navbar> 
      <TextForm heading="Enter the text to analyze"></TextForm>
      <About></About>
    </>
  )
}

export default App
