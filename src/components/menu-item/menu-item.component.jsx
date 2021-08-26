import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ConentTitle, ContentSubtitle } from './menu-item.styles';

const MenuItem = ({ title, imageURL, size, history, linkURL, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkURL}`)}
  >
    <BackgroundImageContainer className='background-image'
      imageURL = {imageURL}
    />
    <ContentContainer className='content'>
      <ConentTitle>{title.toUpperCase()}</ConentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
