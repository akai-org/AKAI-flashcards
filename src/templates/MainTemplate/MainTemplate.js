import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import WrapperContext from 'context/notification';
import GlobalStyle from '../../style/GlobalStyle';
import theme from '../../style/theme';
import 'style/fonts/Averta/averta.css';

const MainTemplate = ({ children }) => {
  const { NotificationWrapperElement } = useContext(WrapperContext);

  return (
    <>
      {NotificationWrapperElement}
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
};

export default MainTemplate;
