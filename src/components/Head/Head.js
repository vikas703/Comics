import React from 'react';
import './Head.css';
import Images from './Images';
import Text from './Text';


const Head = () => {
  return (
    <div className='head'>

      <div className='Text'>
      <Text />
      </div>

      <div className='Imgs'>
      <Images />
      </div>
    </div>
  )
}

export default Head
