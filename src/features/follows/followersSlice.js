/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const initialState = {
  data: [],
  message: '',
  loading: false,
  error: null,
};

export const followUser = createAsyncThunk('follow/FollowUser', async ({ currUserId, following_id }, thunkAPI) => {
  try {
    const response = await axios.post(`${baseUrl}/${currUserId}/follow`, { currUserId, following_id }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const fetchUserFollowers = createAsyncThunk('followers/getUserFollowers', async (userId, thunkAPI) => {
  try {
    const response = await axios.get(`${baseUrl}/${userId}/followers`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const followersSlice = createSlice({
  name: 'followers',
  initialState,
  reducers: {},

  extraReducers: {
    [fetchUserFollowers.pending]: (state) => {
      state.loading = true;
    },

    [fetchUserFollowers.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    [fetchUserFollowers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default followersSlice.reducer;
