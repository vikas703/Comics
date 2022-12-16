import React from 'react';
import './Routers.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Products from '../Header/Products/Products';
import Head from '../Head/Head';
import About from '../About/About';
import Footer from '../Footer/Footer';

const Routers = ({productItems , cartItems , handleAddProduct , handleRemoveProduct , handleCartClear}) => {
  return (
    <div className='Routers'>
    <Head  />
    <About />
      <Routes>
      <Route path='/'  element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />} />
      <Route path='/cart'  element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Routers
