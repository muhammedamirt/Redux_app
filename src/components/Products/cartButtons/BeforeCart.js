import React from 'react'
import { useDispatch } from 'react-redux'
import "./cartButton.css"
import { addToCart } from '../../../Redux/cart'
const BeforeCart = ({products}) => {
  const dispatch = useDispatch()

  return (
    <div className="before-cart">
         <button className="add-cart-button" onClick={()=>dispatch(addToCart(products))}>
            Add to cart
         </button>
      </div>
  )
}

export default BeforeCart