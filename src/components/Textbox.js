import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Textbox.css';
import './Button.css';




export default function Textbox(props) {
  const handleUppercase =()=>{
    let upperCase= text.toUpperCase();
    setText(upperCase);
  }
  const handleLowercase =()=>{
    let lowerCase= text.toLowerCase();
    setText(lowerCase);
  }
  const handleSentencecase =()=>{
    let firstchar= text.slice(0,1).toUpperCase();
    let restChar= text.slice(1).toLowerCase();
    let sentenceCase= firstchar + restChar;
    setText(sentenceCase);
  }
  const handleCopyText =()=>{
    let copyText = document.getElementById("myTextBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }
  const handleItaliccase =()=>{
    let iText = document.getElementById("myTextBox");
    iText.style.fontStyle= 'italic';
  }
  const handleBoldcase =()=>{
   if ( mystyle.fontWeight==='normal'){
    setMystyle({
      fontWeight : 'bolder'
    })
  }
   else {
    setMystyle({
      fontWeight : 'normal'
    })}
  }
  const handleClearText =()=>{
   let clearText = '';
   setText(clearText)
  }
 /* const handleRemoveSpaces =()=>{
  let removeSpaces= text.replace(/\s+/g, ' ').trim()
    setText(removeSpaces.join(" "));
   
  }*/
   const handleOnchange =(event) =>{
    setText(event.target.value)
   }
    const [mystyle, setMystyle] = useState(
      {
        fontWeight: 'normal'

       
      }
    )
    const [text, setText] = useState( ' ' );
  return (

   <>
   <div className='textBox'> 
   <div className='header'>
    <div className='textBrand'>
    <h1>TEXT-CONVERTER</h1>
    </div>
      <div className='heading'>
        <button style={props.mode} onClick={handleItaliccase}><i style={props.color}>I</i></button>
       <button style={props.mode} onClick={handleBoldcase}><strong style={props.color}>B</strong></button>
       </div>
       </div>
     
    <textarea id="myTextBox" name="myTextBox" rows="7" cols="100" onChange={handleOnchange} value={text} style={mystyle}></textarea>
   
   
    <div className='bttn'>
   <div className='bttns'>
    <div className='round'style={props.mode}>
   <button onClick={handleUppercase} className='btn'>
     <span style={props.color} className='clickMe'>Upper Case</span>
    </button>
    </div>
   </div>
   <div className='buttons'>
    <div className='round'style={props.mode}>
   <button onClick={handleLowercase} className='btn'>
     <span style={props.color} className='clickMe'>Lower Case</span>
    </button>
    </div>
   </div>
   <div className='btns'>
    <div className='round' style={props.mode}>
   <button onClick={handleSentencecase} className='btn'>
     <span style={props.color} className='clickMe'>Sentence Case</span>
    </button>
    </div>
   </div>
   <div className='buttons'>
    <div className='round' style={props.mode}>
   <button onClick={handleCopyText} className='btn'>
     <span style={props.color} className='clickMe'>Copy Text</span>
    </button>
    </div>
   </div>
   <div className='buttons'>
    <div className='round' style={props.mode}>
   <button  onClick={handleClearText} className='btn'>
     <span style={props.color} className='clickMe'>Clear Text</span>
    </button>
   
   </div>
   
   </div>
   </div>
   <div className='summary'>
    <h1>Summary</h1>
    <p style={props.color}>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} charecters. </p>
    <p style={props.color}> {0.008 * text.split(/\s+/).filter((element)=> {return element.length!==0}).length } Minutes read. </p>
    <h1>Preview</h1>
    <p className='preview' style={props.color}>{text.length>0?text:"Nothing to preview! Write something..."}</p>
  </div>
   </div>
  
   
   </>
  )
}
