import React, { useRef } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {BiShoppingBag} from 'react-icons/bi'
import {FaBars,FaTimes} from 'react-icons/fa';
import {AiFillUnlock} from 'react-icons/ai';

const Header = ({cartItems}) => {
  const NavRef = useRef();

  const showNavbar = () => {
    NavRef.current.classList.toggle("responsive_nav");
  }
  return (
    <header className='header'>
    <div className='nav_heading'>
    <h1>
    <a href='#product' className='none1'>COMICS.</a>
    
    </h1>
    </div>


    <div className='header1' ref={NavRef}>
    <span>
    <a href='#' className='none' onClick={showNavbar}>HOME</a>
    </span>
    <span>
    <a href='#about' className='none'onClick={showNavbar} >ABOUT</a>
    </span>
    <span>
    <a href='#product' className='none' onClick={showNavbar} >COMICS</a>
    </span>
    <button className='nav_btn nav_close_btn' onClick={showNavbar}><FaTimes/>  </button>

    </div>
    <button className='btn123'>TRY IT FREE</button>


    <div className='icons'>
    <span>
    <div className='cart_count'>
    <Link to='/cart' className='icon'> <BiShoppingBag /> </Link>
    <span >{cartItems.length === 0 ? '' : <span className='count'>{cartItems.length}</span>   } </span>
    </div>
    </span>
    <button className='nav_btn ' onClick={showNavbar} ><FaBars/></button>
    </div>

    </header>
  )
}

export default Header

/*<a href='#'>HOME</a>*/