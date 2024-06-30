import React from 'react'
import './footer.css'
import logo from '../../assets/GPT-3.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>do you want to step in the future before others?</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="Gpt3 logo" />
          <p>All rights reserved</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h5>Links</h5>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h5>Company</h5>
          <p>Terms And conditions</p>
          <p>Privacy policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h5>Get in touch</h5>
          <p>Terms And conditions</p>
          <p>Privacy policy</p>
          <p>info@payme.net</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer