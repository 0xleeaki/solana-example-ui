import styled from 'styled-components';

export const Button = styled.button`
  padding: 4px 10px;
  margin: 0px 2px;
  border: 1px solid #ffffff;
  :not(:disabled) {
    :hover {
      border: 1px solid #ffb03c;
    color: #ffb03c;
    }
  }
  :disabled {
    pointer-events: none;
  }
`;
