import React, { Fragment, useMemo } from 'react'
import { useSelector } from 'react-redux';
import AfterCart from './AfterCart'
import BeforeCart from './BeforeCart'

const CartButton = ({ product }) => {
    console.log(product, "==Id");
    const { cartList } = useSelector((state) => state.cart)
    console.log(cartList);
    const cartCount = cartList.find(item=>item.id===product.id)
    console.log(cartCount, "list");
    return (
        <Fragment>
            <AfterCart product={product} cartCount={cartCount}/>
            <BeforeCart products={product} />
        </Fragment>
    )
}

export default CartButton;