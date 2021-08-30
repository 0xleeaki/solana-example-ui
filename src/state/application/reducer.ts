import { createReducer } from '@reduxjs/toolkit';
import { updateBlockNumber, toggleTheme } from './actions';

export enum ConnectorNames {
  injected = 'injected',
  walletConnect = 'walletConnect',
}

export interface ApplicationState {
  blockNumber: number;
  theme: 'dark' | 'light';
}

export const initialState: ApplicationState = {
  blockNumber: 0,
  theme: 'dark',
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateBlockNumber, (state, action) => {
      const { blockNumber } = action.payload;
      if (typeof state.blockNumber !== 'number') {
        state.blockNumber = blockNumber;
      } else {
        state.blockNumber = Math.max(blockNumber, state.blockNumber);
      }
    })
    .addCase(toggleTheme, (state) => {
      if (state.theme === 'light') {
        state.theme = 'dark';
      } else {
        state.theme = 'light';
      }
    }),
);
