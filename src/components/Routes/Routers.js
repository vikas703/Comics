import React from 'react';
import './Routers.css';
import { Routes, Route } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Products from '../Header/Products/Products';
import Head from '../Head/Head';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Video from '../Video/Video'

const Routers = ({productItems , cartItems , handleAddProduct , handleRemoveProduct , handleCartClear}) => {
  
  return (
    <div className='Routers'>
    <Head  />
    <About />
    <Products productItems={productItems} handleAddProduct={handleAddProduct} />
      <Routes>
      <Route path='/cart'  element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear} />} />
      </Routes>
      <Video />
      <Footer />
    </div>
  )
}

export default Routers
