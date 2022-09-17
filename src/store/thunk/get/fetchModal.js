import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchModal = createAsyncThunk('users/fetchModal', async (id) => {
  const responce = await axios.get('https://62c29b14ff594c65675fefd6.mockapi.io/items/' + id);
  return responce.data;
});
