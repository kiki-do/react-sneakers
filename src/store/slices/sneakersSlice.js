import { createSlice } from '@reduxjs/toolkit';

import { fetchSneakers } from '../thunk/get/fetchSneakers';

const initialState = {
  items: [],
  searchValue: '',
  totalPrice: 0,
  modalOpened: false,
};

const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },

    setModalOpened(state, action) {
      state.modalOpened = action.payload;
    },

    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { setSearchValue, setIsAdded, setModalOpened, setItems } = sneakersSlice.actions;

export default sneakersSlice.reducer;
