import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001/api/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/signup', credentials);
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('auth/login', credentials);
    setAuthHeader(data.token);

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('auth/logout');

    clearAuthHeader();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    if (!token) return rejectWithValue('Oops');

    setAuthHeader(token);

    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
