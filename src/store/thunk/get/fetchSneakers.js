import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSneakers = createAsyncThunk('users/fetchSneakers', async () => {
  const responce = await axios.get('https://62c29b14ff594c65675fefd6.mockapi.io/items');
  return responce.data;
});
