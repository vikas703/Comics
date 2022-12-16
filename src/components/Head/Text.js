import React from 'react';
import thunder from '../../assets/thunder.png';


const Text = () => {
  return (
    <div className='In_Text'>
    <div className='img1'>
    <img src={thunder} alt='thunder'  className='thunder'/>
    </div>

    <div className='text'>
    <h1>COMICS</h1>
    <h3>WORLD</h3>
    </div>
    
    <div className='img2'>
    <img src={thunder} alt='thunder'  className='thunder1'/>
    </div>
      
    </div>
  )
}

export default Text
