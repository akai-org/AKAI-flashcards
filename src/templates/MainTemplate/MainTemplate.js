import React from 'react';
import SnackbarProvider from 'context/snackbar/index';
import propTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../style/GlobalStyle';
import theme from '../../style/theme';
import 'style/fonts/Averta/averta.css';

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <SnackbarProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SnackbarProvider>
  </>
);

MainTemplate.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
};

export default MainTemplate;
