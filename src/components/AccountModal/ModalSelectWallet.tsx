import { useCallback } from 'react';
import styled from 'styled-components';
import { WALLET_PROVIDERS } from '../../providers/WalletProvider';
import Modal, {
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from '../Modal/ModalStyles';

export type ModalSelectWalletProps = {
  onDismiss?: () => void;
};

export const ModalSelectWallet: React.FC<ModalSelectWalletProps> = ({ onDismiss }) => {
  const connect = useCallback(() => {
    onDismiss && onDismiss();
  }, [onDismiss]);

  return (
    <Modal size="sm">
      <ModalHeader>
        <ModalTitle>Connect wallet</ModalTitle>
        <ModalCloseButton onClick={onDismiss} />
      </ModalHeader>
      <StyledModalContent>
        {WALLET_PROVIDERS.map((provider) => (
          <StyledWallet data-connector-name="injected" onClick={connect}>
            <img src={provider?.icon} alt="wallet-icon" />
            {provider.name}
          </StyledWallet>
        ))}
      </StyledModalContent>
    </Modal>
  );
};

const StyledModalContent = styled(ModalContent)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  padding-bottom: 34px;
`;

const StyledWallet = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.secondary};
  transition: color 0.5s ease-in-out 0s;
  font-size: 14px;
  img {
    width: 46px;
    height: 46px;
    margin-bottom: 6px;
  }
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
