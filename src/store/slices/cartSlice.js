import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../components/utils/getCartFromLS';
import { calcTotalPrice } from '../../components/utils/calcTotalPrice';

const { items, totalPrice } = getCartFromLS();

const initialState = {
  items,
  totalPrice,
  cartOpened: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartOpened(state, action) {
      state.cartOpened = action.payload;
    },

    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) state.items.liked = true;
      else {
        state.items.push({
          ...action.payload,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
  },
});

export const { addItem, removeItem, setCartOpened, setLiked } = cartSlice.actions;

export default cartSlice.reducer;
