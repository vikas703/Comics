import React from 'react';
import Marvel from '../../assets/Marvel.mp4';
import './Video.css';

const video = () => {
  return (
    <div className='video_main'>
      <video src={Marvel} autoPlay loop muted />
    </div>
  )
}

export default video
