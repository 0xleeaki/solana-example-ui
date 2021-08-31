import React from 'react';
import styled from 'styled-components';
import { useWallet } from '../providers/WalletProvider';
import { shortenAddress } from '../utils/addresses';
import { Button } from './Buttons';

export const ButtonConnect: React.FC = () => {
  const { connected, wallet, connect, disconnect } = useWallet();
  const publicKey = (connected && wallet?.publicKey?.toBase58()) || '';
  const shortenAccount = shortenAddress(publicKey || '');

  return (
    <StyledContainer>
      {shortenAccount}
      <Button onClick={publicKey ? disconnect : connect}>
        {publicKey ? 'disconnect' : 'connect'}
      </Button>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 14px 20px;
  border-bottom: 1px solid #cdcdcd;
  button {
    margin-left: 10px;
  }
`;
