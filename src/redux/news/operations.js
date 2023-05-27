import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getNews = createAsyncThunk('news', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/news/');

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
