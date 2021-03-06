import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from 'components/organisms/Navbar/Navbar';
import MainTemplate from './components/templates/MainTemplate';

const StyledASD = styled.div`
  color: white;
`;

const Root = () => (
  <MainTemplate>
    <Router>
      <Navbar />
      <StyledASD> Hello Flashcards</StyledASD>
    </Router>
  </MainTemplate>
);

export default Root;
