import React from 'react';
import spider from '../../assets/spiderM.png';
import ironM from '../../assets/ironM.png';
import capM from '../../assets/capM.png';
import warM from '../../assets/warM.png';
import hulk from '../../assets/hulk.png';

const Images = () => {
  return (
    <div className='Images'>
    <img src={warM} alt='all'  className='Images1'/>
    <img src={spider} alt='all'  className='Images1'/>
    <img src={ironM} alt='all'  className='Images1'/>
    <img src={capM} alt='all'  className='Images1'/>
    <img src={hulk} alt='all'  className='Images1'/>
    </div>
  )
}

export default Images
