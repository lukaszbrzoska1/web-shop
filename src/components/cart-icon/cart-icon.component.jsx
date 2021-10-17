import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
  CartIconComponent,
  ShoppingIconComponent,
  ItemCountComponent,
} from './cart-icon.styles';

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  return (
    <CartIconComponent onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIconComponent />
      <ItemCountComponent>{itemCount}</ItemCountComponent>
    </CartIconComponent>
  );
};

export default CartIcon;
