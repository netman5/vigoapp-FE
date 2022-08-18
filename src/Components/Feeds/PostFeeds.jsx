/* eslint-disable no-sequences */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function PostFeeds(props) {
  // const [users, setUsers] = React.useState([]);
  const data = props.posts || [];

  return (
    <div>
      {data.map((post) => (
        <ul key={post.id}>
          <li>
            <p>{post.text}</p>
            <img src={post.image_url} alt={post.content} />
          </li>
        </ul>
      )).reverse()}
    </div>
  );
}

export default PostFeeds;
