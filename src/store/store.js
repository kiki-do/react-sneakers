import { configureStore } from '@reduxjs/toolkit';
import sneakersSlice from './slices/sneakersSlice';
import cartSlice from './slices/cartSlice';
import favouriteSlice from './slices/favouriteSlice';

export const store = configureStore({
  reducer: {
    sneakersSlice,
    cartSlice,
    favouriteSlice,
  },
});
