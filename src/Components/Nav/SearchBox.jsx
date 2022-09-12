import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './Layout.module.css';
import { updateQuery } from '../../features/users/usersSlice';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
    dispatch(updateQuery(e.target.value));
  };

  return (
    <div className={classes.dropdown}>
      <input placeholder="Search Users" value={query} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
