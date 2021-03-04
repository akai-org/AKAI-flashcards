import React from 'react';
import propTypes from 'prop-types';
import GlobalStyle from '../../style/GlobalStyle';

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

MainTemplate.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
};

export default MainTemplate;
