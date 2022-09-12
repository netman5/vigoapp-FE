/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';

const SearchPage = ({ data, query }) => {
  const users = data || [];
  return (
    <div>
      {users.filter((user) => {
        if (query === '') {
          return user;
        } if (user.name.toLowerCase().includes(query.toLowerCase())) {
          return user;
        }
      }).map((user) => (
        <div key={user.id}>
          <span>{user.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
