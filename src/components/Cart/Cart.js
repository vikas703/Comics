import React from 'react';
import './Cart.css';
import empty from '../../assets/empty.png'
import {AiOutlinePlusSquare , AiOutlineMinusSquare} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Cart = ({cartItems , handleAddProduct , handleRemoveProduct , handleCartClear}) => {

    const totalPrice = cartItems.reduce((price , item) => price + item.quantity * item.price, 0)

  return (
    <div className='cart_items'>
    <div className='cart_header'> Cart</div>
      <div className='clear_cart'>
      {cartItems.length >= 1 && (
        <button className='clear_cart_btn' onClick={ handleCartClear}  >Clear Cart</button>
      )}
      </div>

    {cartItems.length === 0 && 
      <div className='empty_cart_img'>
      <img className='emptycart' src={empty} alt='cart' />
      <Link to='/product' className='goback_link' > Gone Back to Comics</Link>
      </div>
    }
    <div className='main_cart'>
    {cartItems.map((item) => (
        <div key={item.id} className='final_cart'>
        <div className='final_cart_img_back'>
        <img src={item.imgUrl} alt='dv' className='final_cart_img' />
        </div>
        <div className='final_cart_name'>{item.name}</div>

        <div className='final_cart_function'>
        <span className='cart_add'onClick={() => handleAddProduct(item)} ><AiOutlinePlusSquare/></span>
        <span className='cart_quantity'> {item.quantity}</span>
        <span className='cart_remove' onClick={() => handleRemoveProduct(item)}><AiOutlineMinusSquare/></span>
        </div>

        <div className='quantity'>
        ${item.price}
        </div>

        </div>
    ))}
    </div>
      <div className='total_price'>
      <h3>Total price : </h3>
      <span>${totalPrice}</span>
      </div>
    </div>
  )
}

export default Cart
