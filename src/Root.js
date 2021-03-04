import React from 'react';
import styled from 'styled-components';
import MainTemplate from './components/templates/MainTemplate';

const StyledASD = styled.div`
  color: white;
`;

const Root = () => (
  <MainTemplate>
    <StyledASD> Hello Flashcards</StyledASD>
  </MainTemplate>
);

export default Root;
