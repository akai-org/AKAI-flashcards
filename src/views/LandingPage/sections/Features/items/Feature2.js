import React from 'react';
// import propTypes from 'prop-types';
import { ReactComponent as Illustration } from 'assets/vectors/feature3_illustration.svg';
import StyledFeature from './Feature.styled';

const Feature2 = () => (
  <StyledFeature className="feature2">
    <Illustration className="feature2__illustration feature-illustration" />
  </StyledFeature>
);

// Feature2.propTypes = {
// }

export default Feature2;
