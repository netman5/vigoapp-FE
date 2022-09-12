import React from 'react';
import { getSelectedUser } from '../../utils/utils';

const Profile = () => {
  const selectedId = getSelectedUser();
  console.log(selectedId);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Profile;
