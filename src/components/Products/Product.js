import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import products from "../../Api/Product.json"
import CartButton from './cartButtons';

import "./Product.css"

export const Product = () => {
   const { cartList } = useSelector((state) => state.cart)
   console.log(cartList);
   return (
      <section className="container">
         {products?.map((product, key) => (
            <div className="product-container" key={key}>
               <img src={product?.image} alt="" />
               <h3>{product?.title}</h3>
x               <CartButton product={product} />
            </div>
         ))}
      </section>
   )
}
