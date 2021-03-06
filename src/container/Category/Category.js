import React from 'react';
import './Category.scss';
import { connect } from 'react-redux';

import CollectionsItem from '../../component/collections-item/CollectionsItem';
import { selectCategory } from '../../redux/reducer/shop.selector';

const Category = ({ categoryItem }) => {
  const { title, items } = categoryItem;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionsItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  categoryItem: selectCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Category);
