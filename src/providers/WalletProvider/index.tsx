import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Wallet from '@project-serum/sol-wallet-adapter';
import {
  WalletAdapter,
  LedgerWalletAdapter,
  MathWalletAdapter,
  PhantomWalletAdapter,
} from '../../wallet-adapters';
import { SolletExtensionAdapter } from '../../wallet-adapters/sollet-extension';
import { SolflareExtensionWalletAdapter } from '../../wallet-adapters/solflare-extension';
import { Button } from '../../components/Buttons';

const ASSET_URL = 'https://cdn.jsdelivr.net/gh/solana-labs/oyster@main/assets/wallets';

export const WALLET_PROVIDERS = [
  {
    name: 'sollet.io',
    url: 'https://www.sollet.io',
    icon: `${ASSET_URL}/sollet.svg`,
  },
  {
    name: 'Sollet Extension',
    url: 'https://www.sollet.io/extension',
    icon: `${ASSET_URL}/sollet.svg`,
    adapter: SolletExtensionAdapter as any,
  },
  {
    name: 'Ledger',
    url: 'https://www.ledger.com',
    icon: `${ASSET_URL}/ledger.svg`,
    adapter: LedgerWalletAdapter,
  },
  {
    name: 'Solflare',
    url: 'https://solflare.com/access-wallet',
    icon: `${ASSET_URL}/solflare.svg`,
  },
  {
    name: 'Solflare Extension',
    url: 'https://solflare.com',
    icon: `${ASSET_URL}/solflare.svg`,
    adapter: SolflareExtensionWalletAdapter,
  },
  {
    name: 'Phantom',
    url: 'https://www.phantom.app',
    icon: `https://www.phantom.app/img/logo.png`,
    adapter: PhantomWalletAdapter,
  },
  {
    name: 'MathWallet',
    url: 'https://www.mathwallet.org',
    icon: `${ASSET_URL}/mathwallet.svg`,
    adapter: MathWalletAdapter,
  },
];

const WalletContext = React.createContext<any>(null);

const WalletProvider: React.FC = ({ children }) => {
  const endpoint = 'https://solana-api.projectserum.com/';

  const [autoConnect, setAutoConnect] = useState(false);
  const [providerUrl, setProviderUrl] = useState('');
  const [connected, setConnected] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const provider = useMemo(
    () => WALLET_PROVIDERS.find(({ url }) => url === providerUrl),
    [providerUrl],
  );

  const wallet = useMemo(
    function () {
      if (provider) {
        return new (provider.adapter || Wallet)(providerUrl, endpoint) as WalletAdapter;
      }
    },
    [provider, providerUrl, endpoint],
  );

  const select = useCallback(() => setIsModalVisible(true), []);

  const close = useCallback(() => setIsModalVisible(false), []);

  useEffect(() => {
    if (wallet && autoConnect) {
      wallet.connect();
      setAutoConnect(false);
    }

    return () => {};
  }, [wallet, autoConnect]);

  useEffect(() => {
    if (wallet) {
      wallet.on('connect', () => {
        if (wallet.publicKey) {
          setConnected(true);
          const walletPublicKey = wallet.publicKey.toBase58();
          const keyToDisplay =
            walletPublicKey.length > 20
              ? `${walletPublicKey.substring(0, 7)}.....${walletPublicKey.substring(
                  walletPublicKey.length - 7,
                  walletPublicKey.length,
                )}`
              : walletPublicKey;
          console.log('Connected to wallet ' + keyToDisplay);
          close();
        }
      });

      wallet.on('disconnect', () => {
        setConnected(false);
        console.log('Disconnected from wallet');
      });
    }

    return () => {
      setConnected(false);
      if (wallet) {
        wallet.disconnect();
        setConnected(false);
      }
    };
  }, [close, wallet]);

  return (
    <WalletContext.Provider
      value={{
        wallet,
        connected,
        select,
        providerUrl,
        setProviderUrl,
        providerName:
          WALLET_PROVIDERS.find(({ url }) => url === providerUrl)?.name ?? providerUrl,
      }}
    >
      {children}
      {isModalVisible
        ? WALLET_PROVIDERS.map((provider) => {
            const onClick = function () {
              setProviderUrl(provider.url);
              setAutoConnect(true);
            };

            return (
              <Button key={provider.name} onClick={onClick}>
                {provider.name}
              </Button>
            );
          })
        : null}
    </WalletContext.Provider>
  );
};

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('Missing wallet context');
  }

  const wallet = context.wallet;
  return {
    connected: context.connected,
    wallet: wallet,
    providerUrl: context.providerUrl,
    setProvider: context.setProviderUrl,
    providerName: context.providerName,
    select: context.select,
    connect() {
      context.select();
    },
    disconnect() {
      wallet?.disconnect();
    },
  };
}

export default WalletProvider;
