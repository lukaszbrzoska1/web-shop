import React from 'react';

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { AddButton, CollectionFooterContainer, CollectionItemContainer, CollectionImageContainer, NameContainer, PriceContainer} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <CollectionImageContainer imageUrl={imageUrl} className='image'/>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}$</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
