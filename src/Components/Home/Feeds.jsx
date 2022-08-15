/* eslint-disable react/prop-types */
import React from 'react';
import PostForm from '../Feeds/PostForm';
import PostFeeds from '../Feeds/PostFeeds';

function Feeds({ posts }) {
  return (
    <div>
      <div>
        <PostForm />
        <PostFeeds posts={posts} />
      </div>
    </div>
  );
}

export default Feeds;
