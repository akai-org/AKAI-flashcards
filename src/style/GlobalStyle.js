import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Averta', sans-serif;
  font-display: swap;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  padding: 0;
  border: none;
  outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyle;
