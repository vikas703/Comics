import React from 'react';
import spiderman2 from '../../assets/spider4.png';


const FooterImg = () => {
  return (
    <div className='footer1'>
    <div className='footer2'>
    <span><img src={spiderman2} alt='spiderman' className='spiderman' /></span>
    <h1>SUBSCRIBE <br/>  <b>TO OUR NEWSLETTER</b></h1>
    </div>

    <div className='footer_btns'>
    <input type='email' placeholder='email'  />
    <button>SEND</button>
    </div>

    </div>
  )
}

export default FooterImg
