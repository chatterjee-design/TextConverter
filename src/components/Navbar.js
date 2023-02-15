import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Navbar.css';


export default function Navbar(props) {

 

 
  return (
    <>
    <nav style={props.mode}>
    <ul className='navber'>
    <div className='brand'>
          <li className='brandItems' > <a>{props.brand}</a></li>
          </div>
        
      <div className='items'>
   
    <li><div class="form-check form-switch">
  <input onClick={props.toggleMode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  
</div>
</li> 
</div> 

    
    </ul>
    </nav>
    </>
  )
}
