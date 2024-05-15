import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../types';

const selectAuthenticationDomain = (state: RootState) => state.modalSlice;

export const makeSelectLoginModal = () => {
  return createSelector(
    selectAuthenticationDomain,
    state => state.showLoginModal,
  );
};
