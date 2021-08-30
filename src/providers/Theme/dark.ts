import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    background: '#090a1f',
    foreground: '#fff',
    foregroundHighlight: '#fff',
    success: '#33cd77',
    secondary: '#adafb4',
    primary: '#ffb03c',
    danger: '#f93c3c',
  },
  header: {
    background: 'transparent',
    border: 'none',
    buttonAccount: {
      boxShadow: '0px 2px 0px 1px #ff6c30',
    },
    buttonBorder: '1px solid #34384a',
  },
  sidebar: {
    title: '#ffffff',
    background: 'rgb(24, 25, 26)',
    border: '1px solid #34384a',
    borderBottom: '1px dashed #34384a',
  },
  box: {
    content: {
      background: '#151839',
    },
    footer: {
      background: '#171720',
      border: 'solid 3px #3b3c42',
    },
  },
  boxEstimate: {
    borderGradient: 'linear-gradient(180deg, #34384a 0%, #34384a 20%, #58cc72 95%)',
    mainBg: '#2a304f',
  },
  modal: {
    background: '#151839',
    content: '#ffffff',
  },
  input: {
    background: '#1f2138',
    disabledBackground: '#f6f6f626',
    foreground: '#fff',
    border: '#34384a',
  },
  home: {
    title: '#ffffff',
    borderGradient: 'linear-gradient(180deg, #363954 0%, #a86ff5 100%);',
    border: 'solid 1px #1e274c',
  },
  swap: {
    title: '#ffffff',
    header: '#ffffff',
    border: 'solid 1px #34384a',
  },
  governance: {
    title: '#ffffff',
    content: '#ffffff',
    borderGradient: 'linear-gradient(180deg, #363954 0%, #a86ff5 100%);',
    unlock: 'linear-gradient(to bottom, #34384a, #34384a);',
    border: '1px solid #34384a',
  },
  farm: {
    background: '#151839',
    backgroundContent: '#252849',
    backgroundHeader: '#1c1f40',
    inputBackground: '#0d0f28',
    border: '1px solid #34384a',
    slider: {
      trackStyle: {
        background: '#f48023',
      },
      railStyle: {
        background: '#596b83',
      },
      handleStyle: {
        background: '#303243',
        border: '2px solid #f48023',
      },
      dotStyle: {
        background: '#303243',
        border: '1px solid #596b83',
      },
      activeDotStyle: {
        background: 'transparent',
        border: 'none',
      },
    },
  },
  slippage: {
    inputColor: '#fff',
    background: '#2a304f',
  },
  account: {
    header: '#34384a',
    content: '#ffffff',
    border: 'solid 1px #34384a',
  },
  separatorLine: '#34384a',
};

export default theme;
