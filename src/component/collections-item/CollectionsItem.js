import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../custom-button/CustomButton';
// redux
import { connect } from 'react-redux';

// action
import { addItemToCart } from '../../redux/action/cart';
//style
import './CollectionsItem.scss';
const CollectionsItem = ({
  item: { id, name, price, imageUrl },
  addItemToCart
}) => {
  console.log(id, name, price);
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="">{price}</span>
      </div>
      <CustomButton
        onClick={() => addItemToCart({ id, name, price, imageUrl })}
        inverted
      >
        Add to card
      </CustomButton>
    </div>
  );
};

CollectionsItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addItemToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionsItem);
