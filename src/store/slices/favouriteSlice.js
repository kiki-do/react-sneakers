import { createSlice } from '@reduxjs/toolkit';
import getFavouriteFromLS from '../../components/utils/getFavouriteFromLS';

const { items, count } = getFavouriteFromLS();

const initialState = {
  items,
  favourited: false,
};

const favouriteSclice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addFavourite(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        state.items.favourited = true;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },

    removeFavourite(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearFavourite(state) {
      state.items = [];
    },
  },
});

export default favouriteSclice.reducer;

export const { addFavourite, removeFavourite, setFavorite, clearFavourite } =
  favouriteSclice.actions;
