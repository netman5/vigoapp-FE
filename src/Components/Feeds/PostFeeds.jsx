/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';

// const baseUrl = process.env.REACT_APP_BASE_URL;

function PostFeeds(props) {
  const [users, setUsers] = React.useState([]);
  const data = props.posts || [];

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:3000/api/auth/users');
    setUsers(response.data);
  };

  React.useEffect(() => {
    // fetchUsers();

  }, [users, data]);

  // console.log(users);
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
