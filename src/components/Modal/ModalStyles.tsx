import styled from 'styled-components';
import { screenUp } from '../../utils/styles';

type ModalSize = 'xs' | 'sm' | 'md' | 'lg';
export interface ModalProps {
  onDismiss?: () => void;
  size?: ModalSize;
}

const getModalSize = (size: ModalSize = 'sm') => {
  switch (size) {
    case 'xs':
      return 400;
    case 'sm':
      return 500;
    case 'md':
      return 800;
    case 'lg':
      return 1140;
    default:
      return 300;
  }
};

export const Modal = styled.div<{ size?: ModalSize }>`
  margin: 0;
  width: 100%;
  max-width: ${(p) => getModalSize(p.size)}px;
  z-index: 1000;
  background: ${(p) => p.theme.modal.background};
  border-radius: 0;
  ${screenUp('lg')`
    margin: 0 auto;
    border-radius: 20px;
  `}
`;

export const ModalContent = styled.div`
  padding: 0px 20px 26px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 20px;
  color: ${({ theme }) => theme.modal.content};
`;

export const ModalTitle = styled.div`
  color: ${({ theme }) => theme.modal.content};
  font-weight: 600;
  font-size: 1.2rem;
`;

export const ModalCloseButton = styled.button.attrs({
  children: <i className="fal fa-times" />,
})`
  order: 9;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.2rem;
  margin-left: auto;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default Modal;
