import { createAction } from '@reduxjs/toolkit';

export const updateBlockNumber = createAction<{
  blockNumber: number;
}>('app/updateBlockNumber');

export const toggleTheme = createAction('app/toggleTheme');
