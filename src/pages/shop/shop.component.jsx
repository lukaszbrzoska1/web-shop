import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionsPageContainer from '../collection/collection.container';

const ShopPage = ({ match, fetchCollectionStartAsync }) => {
  useEffect(() => {
    fetchCollectionStartAsync();
  }, [fetchCollectionStartAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
