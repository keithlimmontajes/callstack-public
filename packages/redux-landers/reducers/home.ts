import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  bannerSlider: [],
  loading: false,
  error: {},
  data: {},
};

export const homeSlice = createSlice({
  name: 'landersHome',
  initialState,
  reducers: {
    loadBannerSlider: (state, action: PayloadAction<any>) => {
      state.bannerSlider = action.payload;
    },
    setLoading: (state, action: PayloadAction<any>) => {
      state.bannerSlider = action.payload;
    },
    setData: (state, action: PayloadAction<any>) => {
      state.bannerSlider = action.payload;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.bannerSlider = action.payload;
    },
  },
});

/**
 * HOME ACTIONS:
 * Add actions to reducers and export below
 **/
export const { loadBannerSlider } = homeSlice.actions;
export default homeSlice;
