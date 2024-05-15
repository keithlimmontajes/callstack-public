import { combineSlices } from '@reduxjs/toolkit';

import landersHome from './reducers/home';

const rootReducers = combineSlices(landersHome);

export default rootReducers;
