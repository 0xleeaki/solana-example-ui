import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${(p) => p.theme.colors.background};
    color: ${(p) => p.theme.colors.foreground};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
    min-height: 100vh;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
  }

  button {
    font-family: inherit;
    color: ${(p) => p.theme.colors.foreground};
    border: none;
    background: transparent;

    &:not(:disabled) {
      cursor: pointer;
    }

    &:focus,
    &:active {
      outline: none;
    }

    :disabled {
      pointer-events: none;
    }
  }
`;
