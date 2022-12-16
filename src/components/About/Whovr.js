import React from 'react';
import cloud from '../../assets/cloud.png';

const Whovr = () => {
  return (
    <div className='Whovr'>
      <div className='Whovr_text1'>
      <h1>
      YOUR DESTINATION FOR OVER <br/>
      <b>3000 COMICS</b> THE ENTIRE <br/>
      MARVEL UNIVERSE.
      </h1>
      <p>We are the platform for comic lover's</p>
      </div>
      <div className='Whovr_img'>
      <img src={cloud} alt='cloud' className='cloud'/>
      </div>
    </div>
  )
}

export default Whovr
