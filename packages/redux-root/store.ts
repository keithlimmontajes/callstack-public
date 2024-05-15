import { TypedStartListening, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import rootMiddlewares from './rootMiddlewares';
import rootReducer from './rootReducers';
import { setupListenersRN } from './utils/setupListenersRN';

const setUpStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(rootMiddlewares),
  });

  setupListeners(store.dispatch, setupListenersRN);

  return store;
};

export const store = setUpStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
