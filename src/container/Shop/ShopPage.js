import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CollectionsOverview from '../../component/collections-overwiew/CollectionsOverview';
import Category from '../Category/Category';
//shop data

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={Category} />
    </div>
  );
};

export default ShopPage;
