import React, { useEffect } from "react";

import collectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import { Route } from "react-router-dom";
import CollectionPageContainer from "../collection/collection.container";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

const ShopPage = ({fetchCollectionStart , match}) => {
  useEffect( () => {
    fetchCollectionStart();
  },[fetchCollectionStart]);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
         component= {collectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
         component={CollectionPageContainer}
        />
      </div>
    );
  }

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
 