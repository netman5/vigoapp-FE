import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import followersReducer from '../features/follows/followersSlice';
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    followers: followersReducer,
    users: usersReducer,
  },
});

export default store;
