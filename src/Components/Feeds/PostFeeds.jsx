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
        console.log(post),
          <ul key={post.id}>
            <li>
              <p>{post.text}</p>
              <img src={`http://127.0.0.1:3000/${post.image_url.url}`} alt={post.content} />
            </li>
          </ul>
      )).reverse()}
    </div>
  );
}

export default PostFeeds;
