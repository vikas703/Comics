import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import data from './Data/Data';
import Header from './components/Header/Header';
import Routers from './components/Routes/Routers';
import { useState } from 'react';

function App() {
  const {productItems} = data;
  const [cartItems , SetCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if(productExist){
      SetCartItems(cartItems.map((item) => item.id === product.id ? 
      {...productExist , quantity: productExist.quantity + 1 } : item ))
    } else {
      SetCartItems([...cartItems, { ...product, quantity:1}])
    }
  }

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if(productExist.quantity === 1){
      SetCartItems(cartItems.filter((item) => item.id !== product.id  ));
    }else{
      SetCartItems(
        cartItems.map((item) => item.id === product.id ?  {...productExist, quantity: productExist.quantity - 1} : item)
      )
    }
  }

  const handleCartClear = () => {
    SetCartItems([]);
  }

  return (
    <div className='App'>
    <Router>
    <Header cartItems={cartItems} />
    <Routers 
    productItems={productItems} 
    cartItems={cartItems} 
    handleAddProduct={handleAddProduct}
    handleRemoveProduct={handleRemoveProduct}
    handleCartClear={handleCartClear}
    />
    </Router>
    </div>
  );
}

export default App;
