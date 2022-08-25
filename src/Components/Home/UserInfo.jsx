import React from 'react';

function UserInfo() {
  const user = localStorage.getItem('token');
  return (
    <div>
      <p>{`Welcome ${user}!`}</p>
    </div>
  );
}

export default UserInfo;
