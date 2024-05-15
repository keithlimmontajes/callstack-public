import { ModalTypes } from './types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: ModalTypes = {
  showLoginModal: false,
};

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setShowLoginModal: (state, action: PayloadAction<boolean>) => {
      state.showLoginModal = action.payload;
    },
  },
});

/** export action reducer here */
export const { setShowLoginModal } = modalSlice.actions;
export default modalSlice;
