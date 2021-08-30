import styled from 'styled-components';
import { screenUp } from '../utils/styles';

export const Container = styled.div`
  padding: 0px 15px;
  max-width: 1000px;
  margin: auto;
  ${screenUp('lg')`
    min-height: calc(100vh - 57px - 70px);
    padding: 0 20px;
  `}
`;
