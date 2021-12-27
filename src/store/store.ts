import { __PROD__ } from '../utils/constants';
import { configureStore, Middleware } from '@reduxjs/toolkit';
import configReducer from './config';
import modalsReducer from './modals';
import sideDrawerReducer from './sideDrawer';
import connectionReducer from './connection';

const customMiddleware: Middleware[] = !__PROD__ ? [] : [];

export const store = configureStore({
  reducer: {
    config: configReducer,
    modals: modalsReducer,
    sideDrawer: sideDrawerReducer,
    connection: connectionReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(customMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
