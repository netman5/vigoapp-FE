/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import usersDB from '../../utils/data';

const baseUrl = process.env.REACT_APP_BASE_URL;

const initialState = {
  data: usersDB,
  query: '',
  loading: false,
  error: null,
};

export const fetchAllUsers = createAsyncThunk('user/fetchAllUsers', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseUrl}/auth/users`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
  },

  extraReducers: {
    [fetchAllUsers.pending]: (state) => {
      state.loading = true;
    },

    [fetchAllUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    [fetchAllUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { updateQuery } = usersSlice.actions;
export default usersSlice.reducer;
