import NetInfo, {
  NetInfoState,
  NetInfoSubscription,
} from '@react-native-community/netinfo';
import { ThunkDispatch } from '@reduxjs/toolkit';
import {
  AppState,
  AppStateStatus,
  NativeEventSubscription,
} from 'react-native';

let initialized = false;

export const setupListenersRN = (
  dispatch: ThunkDispatch<any, any, any>,
  {
    onFocus,
    onFocusLost,
    onOnline,
    onOffline,
  }: {
    onFocus: () => void;
    onFocusLost: () => void;
    onOffline: () => void;
    onOnline: () => void;
  },
) => {
  let unsubscribeOnChange: NativeEventSubscription | null = null;
  let unsubscribeOnNetworkStatusChange: NetInfoSubscription | null = null;

  if (!initialized) {
    // Handle focus events
    unsubscribeOnChange = AppState.addEventListener(
      'change',
      (state: AppStateStatus) => {
        if (state === 'active') {
          dispatch(onFocus());
        } else if (state === 'background') {
          dispatch(onFocusLost());
        }
      },
    );

    // Handle connection events
    unsubscribeOnNetworkStatusChange = NetInfo.addEventListener(
      (state: NetInfoState) => {
        if (state.isConnected) {
          dispatch(onOnline());
        } else {
          dispatch(onOffline());
        }
      },
    );
    initialized = true;
  }

  const unsubscribe = () => {
    unsubscribeOnChange?.remove();
    unsubscribeOnNetworkStatusChange?.();
    initialized = false;
  };

  return unsubscribe;
};
