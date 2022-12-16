import React from 'react'
import './Products.css'

const Products = ({productItems , handleAddProduct}) => {
  return (
    <div className='products' id='product' >
    <div className='product_heading'><b>LATEST</b> COMICS</div>
    <div className='product_items'>
      {productItems.map((productItem) => (
        <div className='card'>
        <div className='product_img_back'>
        <img src={productItem.imgUrl} alt='r' className='product_img'  />
        </div>
        <div className='product_names'>
        <p>{productItem.name}</p>
        <p>${productItem.price}</p>
        </div>
        <div className='add_cart'>
        <button className='btn1' onClick={() => handleAddProduct(productItem)} >Add +</button>
        </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Products
