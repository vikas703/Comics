import React from 'react';
import './Footer.css'
import FooterImg from './FooterImg';
import FooterText from './FooterText';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='footer_img'>
      <FooterImg/>
      </div>
      <div className='footer_text'>
      <FooterText />
      </div>
    </div>
  )
}

export default Footer
