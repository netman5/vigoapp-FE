import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import followersSlice from '../features/follows/followersSlice';
import postsReducer from '../features/posts/postsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    followers: followersSlice,
  },
});

export default store;
