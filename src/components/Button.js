import React from 'react'
import './Button.css';

export default function Button() {
  return (
   <>
  <div className='bttn'>
   <div className='buttons'>
    <div className='round'>
   <button className='btn'>
     <span className='clickMe'>UPPERCASE</span>
    </button>
    </div>
   </div>
   <div className='bttn'>
   <div className='buttons'>
    <div className='round'>
   <button  className='btn'>
     <span className='clickMe'>CLICK ME</span>
    </button>
    </div>
    </div></div></div>
   
   </>
  )
}
