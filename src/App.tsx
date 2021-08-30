import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from './components/Container';
import { Theme } from './providers/Theme';
import Modals from './providers/Modals';
import WalletProvider from './providers/WalletProvider';
import { store } from './state';
import { ButtonConnect } from './components/ButtonConnect';

export const App: React.FC = () => {
  return (
    <Providers>
      <ButtonConnect></ButtonConnect>
      <Wrapper></Wrapper>
    </Providers>
  );
};

const Wrapper = styled(Container)`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export default App;

const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <WalletProvider>
        <Theme>
          <Modals>
            <BrowserRouter>{children}</BrowserRouter>
          </Modals>
        </Theme>
      </WalletProvider>
    </Provider>
  );
};
