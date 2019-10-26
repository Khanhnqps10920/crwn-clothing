import React from 'react';
import PropTypes from 'prop-types';
//style
import './CollectionsItem.scss';
const CollectionsItem = ({ name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="">{price}</span>
      </div>
    </div>
  );
};

CollectionsItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default CollectionsItem;
