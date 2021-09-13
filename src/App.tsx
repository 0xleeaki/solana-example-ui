import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from './components/Container';
import { Theme } from './providers/Theme';
import WalletProvider from './providers/WalletProvider';
import { store } from './state';
import { ButtonConnect } from './components/ButtonConnect';
import Home from './views/Home';

export const App: React.FC = () => {
  return (
    <Providers>
      <ButtonConnect></ButtonConnect>
      <Wrapper>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Wrapper>
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
          <BrowserRouter>{children}</BrowserRouter>
        </Theme>
      </WalletProvider>
    </Provider>
  );
};
