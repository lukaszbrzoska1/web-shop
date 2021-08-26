import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {CartIconComponent, ShoppingIconComponent, ItemCountComponent} from './cart-icon.styles'

const CartIcon = ({ itemCount, dispatch }) => (
  <CartIconComponent onClick={() => dispatch(toggleCartHidden())}>
    <ShoppingIconComponent/>
    <ItemCountComponent>{itemCount}</ItemCountComponent>
  </CartIconComponent>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
