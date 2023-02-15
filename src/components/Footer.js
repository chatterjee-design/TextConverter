import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css';
export default function Footer(props) {
  return (
    <>
    <footer style={props.mode} className='footer'>
      <p> CopyRight @2022 || All Rights Reserved </p>
      <p>Designed By: Mousumi chatterjee</p>
    </footer>
    </>
  )
}
