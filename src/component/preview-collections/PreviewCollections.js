import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//style
import './PreviewCollections.scss';
import CollectionsItem from '../collections-item/CollectionsItem';

const PreviewCollections = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(item => (
            <CollectionsItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

PreviewCollections.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired
};

export default PreviewCollections;
