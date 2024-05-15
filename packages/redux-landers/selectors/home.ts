import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../types';

const selectLandersHomeDomain = (state: RootState) => state.landersHome;

export const makeSelectLandersBannerSlider = () =>
  createSelector(selectLandersHomeDomain, state => state.bannerSlider);
