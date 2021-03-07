import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledPageTemplate = styled.div`
  width: 992px;

  height: 300px;
  position: relative;
  margin: 0 auto;
`;

const PageTemplate = ({ children }) => <StyledPageTemplate>{children}</StyledPageTemplate>;

PageTemplate.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
};

export default PageTemplate;
