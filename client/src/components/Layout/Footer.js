import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
      <h4 className='text-center'>All Rights reserved
      &copy; Sushant
      <p className='text-center mt-3'></p>
      <Link to="/about">About</Link>
      |<Link to="/contact">Contact</Link>
      |<Link to="/policy">Privacy Policy</Link>
      
      </h4>
      </div>
  )
}

export default Footer