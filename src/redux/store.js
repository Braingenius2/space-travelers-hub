import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { RocketsSlice } from './rockets/rocketsSlice';

const rootReducer = combineReducers({
  rockets: RocketsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
