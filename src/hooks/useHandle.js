import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: 10px;
  z-index: 100;
  font-size: 1.6rem;
  padding: 15px;
  color: ${({ theme }) => theme.colors.background};
`;

const useHandle = (type = 'error') => {
  //   const isOpen = useState(false);
  //   const rootElemRef = React.useRef(document.body);

  console.log(type);
  const handleError = () =>
    ReactDOM.createPortal(<StyledDiv>{type}</StyledDiv>, document.querySelector('html'));

  return handleError;
};

export default useHandle;
