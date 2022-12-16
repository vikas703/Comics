import './About.css';
import React from 'react'
import Whovr from './Whovr'
import Numbers from './Numbers'
import ScrollText from './ScrollText';

const About = () => {
  return (
    <div className='About' id='about'>
      <div className='whovr'>
       <Whovr />
      </div>

      <div className='numbers'>
      <Numbers />
      </div>

      <div className='text_scroll'>
      <ScrollText />
      </div>
    </div>
  )
}

export default About
