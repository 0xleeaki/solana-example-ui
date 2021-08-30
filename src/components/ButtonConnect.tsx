import React, { useEffect } from 'react';
import { useWallet } from '../providers/WalletProvider';

export const ButtonConnect: React.FC = () => {
  const { connected, wallet, connect, disconnect } = useWallet();
  const publicKey = (connected && wallet?.publicKey?.toBase58()) || '';

  useEffect(() => {
    console.log('publicKey', publicKey);
  }, [publicKey]);

  return (
    <div>
      {publicKey}
      <button onClick={publicKey ? disconnect : connect}>
        {publicKey ? 'disconnect' : 'connect'}
      </button>
    </div>
  );
};
