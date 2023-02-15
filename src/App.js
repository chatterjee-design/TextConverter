import React, { useState } from 'react'
import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  const toggleMode=()=>{
    if(mode.backgroundColor==='#f9d3cc'){
      setMode(
        {backgroundColor: "black"
          
      })
      setColor({
        color: "white"
      })
      document.body.style.backgroundColor = "rgb(1 85 106)"
      
    }
    else{
      setMode(
        {
          backgroundColor: "#f9d3cc"
            
          }
      )
      setColor({
        color: "black"
      })
      document.body.style.backgroundColor = "#f9f3f3"
      
    }
  }
  const [mode, setMode] = useState(
    {
      
    backgroundColor: "#f9d3cc"
    }
  )
  const [color, setColor] = useState(
    {
      color: "black"
    }
  )
  return (

    <>
    <Navbar brand='Text-Converter' mode={mode} color={color} toggleMode={toggleMode}></Navbar>
    <Textbox color={color} mode={mode}></Textbox>
    <Footer mode={mode}></Footer>
    </>
  );
}

export default App;
