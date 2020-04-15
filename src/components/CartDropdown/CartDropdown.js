import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import './CartDropdown.scss'

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>Go to checkout</CustomButton>
      </div>
    </div>
  )
}

export default CartDropdown
