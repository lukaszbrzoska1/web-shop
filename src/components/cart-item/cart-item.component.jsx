import React from 'react';

import { CartItemComponent, CartItemImage, CartItemDetails} from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemComponent>
    <CartItemImage src={imageUrl} alt="item" />
    <CartItemDetails>
      <span>{name}</span>
      <span>
        {quantity} x {price}$
      </span>
    </CartItemDetails>
  </CartItemComponent>
);

export default CartItem;
