import React from 'react'
import { PRODUCTS } from '../../products'
import {ShopContext} from "../../context/shop-context";
import { useContext } from 'react';
import { CartItem } from './cart-Item';
import {useNavigate} from "react-router-dom";
import "./cart.css"
export const Cart = () => {
  const {cartItems,getTotalAmount} = useContext(ShopContext);
  const TotalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
      {PRODUCTS.map((product) =>{
        if(cartItems[product.id]!==0){
            return <CartItem data = {product}/>
        }
      }) }
      </div>
      {TotalAmount>0 ? (
      <div className='checkout'>
        <p>Subtotal: ${TotalAmount}</p>
        <button onClick={() => navigate("/")}> Continue Shopping</button>
        <button> Checkout</button>
      </div>
      ) : <h1>Your Cart is empty</h1>}
    </div>
  )
}
