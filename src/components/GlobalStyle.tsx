import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color:'#090a1f';
    color: '#fff';
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
    min-height: 100vh;
  }
`;
