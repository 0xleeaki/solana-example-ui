import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { load, save } from 'redux-localstorage-simple';
import application, { initialState } from './application/reducer';
const PERSISTED_KEYS: string[] = ['application.theme'];
const PERSISTED_NAMESPACE = '__iron_finance';

export const store = configureStore({
  reducer: {
    application,
  },
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    save({
      states: PERSISTED_KEYS,
      namespace: PERSISTED_NAMESPACE,
    }),
  ],
  preloadedState: load({
    states: PERSISTED_KEYS,
    disableWarnings: true,
    namespace: PERSISTED_NAMESPACE,
    preloadedState: {
      application: { ...initialState },
    },
  }),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
