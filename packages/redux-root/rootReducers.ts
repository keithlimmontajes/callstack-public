import { combineSlices } from '@reduxjs/toolkit';
import { landersBaseApi } from '@superapp/api/landers';

// slices & reducers
import modalSlice from './global-modals/slice';

const rootReducer = combineSlices(modalSlice, landersBaseApi);

export default rootReducer;
