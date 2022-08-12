/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const initialState = {
  data: [],
  loading: false,
  error: null,
};

// get all posts
export const getAllPosts = createAsyncThunk('posts/getAllPosts', async (data, thunkAPI) => {
  try {
    const response = await axios.get(`${baseUrl}/posts`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// get post by id
export const getPostById = createAsyncThunk('posts/getPostById', async (data, thunkAPI) => {
  try {
    const response = await axios.get(`${baseUrl}/posts/id/${data}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// get post by user id
export const getPostByUserId = createAsyncThunk('posts/getPostByUserId', async (data, thunkAPI) => {
  try {
    const response = await axios.get(`${baseUrl}/posts/user/${data}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// create slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.loading = true;
    },

    [getAllPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    [getAllPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    [getPostById.pending]: (state) => {
      state.loading = true;
    },

    [getPostById.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    [getPostById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    [getPostByUserId.pending]: (state) => {
      state.loading = true;
    },

    [getPostByUserId.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    [getPostByUserId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
