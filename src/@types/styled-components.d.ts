import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      background: string;
      foreground: string;
      foregroundHighlight: string;
      success: string;
      secondary: string;
      danger: string;
      primary: string;
    };
    modal: {
      background: string;
      content: string;
    };
    input: {
      background: string;
      disabledBackground: string;
      foreground: string;
      border: string;
    };
    separatorLine: string;
  }
}
