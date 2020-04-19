import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import './CartDropdown.scss'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CartDropdown)
