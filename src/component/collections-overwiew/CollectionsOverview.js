import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopDataForReview } from '../../redux/reducer/shop.selector';
import PreviewCollections from '../preview-collections/PreviewCollections';
import './CollectionsOverview.scss';

const CollectionsOverview = ({ history, shopData, loading }) => {
  const handleCollectionClick = routeName => {
    history.push(`/shop/${routeName.toLowerCase()}`);
  };

  return (
    <div className="collections-overview">
      {shopData.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollections
          onClick={handleCollectionClick}
          key={id}
          {...otherCollectionProps}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopData: selectShopDataForReview
});

export default withRouter(connect(mapStateToProps)(CollectionsOverview));
