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
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
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

#notification-wrapper {
  position: fixed;
  bottom: 25px;
  right: 25px;
  display: flex;
  flex-direction: column-reverse;
}

.notification {
  display: block;
  position: relative;
}

.notification-enter {
  opacity: 0;
  transform: translateY(100%);
}
.notification-enter-active {
  transition: transform 0.2s ease-in, opacity 0.4s ease-in;
  transform: translateY(0);
  opacity: 1;
}
.notification-exit {
  transform: translateY(0);
  opacity: 1;
}
.notification-exit-active {
  transition: transform 0.2s ease-in, opacity 0.4s ease-in;
  transform: translateY(100%);
  opacity: 0;
}

.containerAnim-enter {
    opacity: 0;
  }
  .containerAnim-enter-active {
    transition: opacity 0.2s ease-in;
    opacity: 1;
  }
  .containerAnim-exit {
    opacity: 1;
  }
  .containerAnim-exit-active {
    transition: opacity 0.2s ease-in;
    opacity: 0;
  }
`;

export default GlobalStyle;
