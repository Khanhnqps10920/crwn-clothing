import React from 'react';

//styled

import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.style';

import PropTypes from 'prop-types';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps}></WrappedComponent>
  );
};

WithSpinner.propTypes = {};

export default WithSpinner;
