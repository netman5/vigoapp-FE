/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import usersDB from '../../utils/data';
// import axios from 'axios';

// const baseUrl = process.env.REACT_APP_BASE_URL;

const initialState = {
  data: usersDB,
  query: '',
  message: '',
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
  },

  // extraReducers: {
  //   [fetchAllUsers.pending]: (state) => {
  //     state.loading = true;
  //   },

  //   [fetchAllUsers.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.data = action.payload;
  //   },

  //   [fetchAllUsers.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.error;
  //   },
  // },
});

export const { updateQuery } = usersSlice.actions;
export default usersSlice.reducer;
