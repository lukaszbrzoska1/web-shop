import React from 'react';
import { withRouter } from 'react-router';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewComponent,
  PreviewCollection,
  TitleContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewComponent>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewCollection>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewCollection>
  </CollectionPreviewComponent>
);

export default withRouter(CollectionPreview);
