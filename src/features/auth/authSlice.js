/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const initialState = {
  token: '',
  loading: false,
  error: null,
};

// register user
export const registerUser = createAsyncThunk('auth/registerUser', async (data, thunkAPI) => {
  const response = await axios.post(`${baseUrl}/auth/register`, data);
  return response.data;
});

// login user
export const loginUser = createAsyncThunk('auth/loginUser', async (data, thunkAPI) => {
  const response = await axios.post(`${baseUrl}/auth/login`, data);
  return response.data;
});

// logout user
export const logoutUser = createAsyncThunk('auth/logoutUser', async (data, thunkAPI) => {
  const response = await axios.post(`${baseUrl}/auth/logout`, data);
  return response.data;
});

// Create auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.loading = true;
    } ,
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;

    }
  }

});


export const { setLoading } = authSlice.actions;
export default authSlice.reducer;