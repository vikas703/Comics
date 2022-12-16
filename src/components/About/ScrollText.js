import React from 'react'
import { Link } from 'react-router-dom'

const ScrollText = () => {
  return (
    <div>
    <div className='scroll_text'>
    <div className='scroll text1' >
    <div>
    Comics.<span>Comics.</span>Comics.<span>Comics.</span>
    Comics.<span>Comics.</span>Comics.<span>Comics.</span>

    </div>
    <div>
    Comics.<span>Comics.</span>Comics.<span>Comics.</span>
    Comics.<span>Comics.</span>Comics.<span>Comics.</span>

    </div>
    </div>

    <div className='scroll1 text2' >
    <div>
    Comics.<span>Comics.</span>Comics.<span>Comics.</span>
    Comics.<span>Comics.</span>Comics.<span>Comics.</span>

    </div>
    <div>
    Comics.<span>Comics.</span>Comics.<span>Comics.</span>
    Comics.<span>Comics.</span>Comics.<span>Comics.</span>

    </div>
    </div>
   
    </div>
    <div className='clickme'> 
    <button className='clickme_btn'><Link to='/' className='clickme_link' >Click to Shop.</Link> </button>
    </div>
    </div>
  )
}

export default ScrollText
