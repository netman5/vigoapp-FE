/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const initialState = {
  data: {},
  loading: false,
  error: null,
};

// register user
export const registerUser = createAsyncThunk('auth/registerUser', async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/register`, data);
    const { token } = response.data;
    localStorage.setItem('token', token);
    window.history.pushState({}, '', '/login');
    window.location.reload();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// login user
export const loginUser = createAsyncThunk('auth/loginUser', async (loginData, thunkAPI) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, loginData);
    const { token, user } = response.data;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('isLoggedIn', true);
    window.history.pushState({}, '', '/');
    window.location.reload();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// logout user
export const logoutUser = createAsyncThunk('auth/logoutUser', async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/logout`, data);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    window.history.pushState({}, '', '/login');
    window.location.reload();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// Create auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [logoutUser.pending]: (state) => {
      state.loading = true;
    },
    [logoutUser.fulfilled]: (state) => {
      state.loading = false;
      state.data = {};
    },
    [logoutUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { setLoading } = authSlice.actions;
export default authSlice.reducer;
