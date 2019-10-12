import React, { useState } from 'react';
//shop data
import SHOP_DATA from './ShopData';
import PreviewCollections from '../../component/preview-collections/PreviewCollections';

const ShopPage = props => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...ortherCollectionProps }) => (
        <PreviewCollections key={id} {...ortherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
