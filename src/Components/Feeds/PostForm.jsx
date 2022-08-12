import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Styles from './PostForm.module.css';
import PhotoIcon from './PhotoIcon';
import { getAllPosts } from '../../features/posts/postsSlice';

function PostForm() {
  const [file, setFile] = useState('');
  const content = useRef('');
  const dispatch = useDispatch();
  // const user = JSON.parse(localStorage.getItem('user'));
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      // id: user.id,
      content: content.current.value,
    };

    if (file) {
      const data = new FormData();
      data.append('file', file);
      data.append('name', file.name);
      newPost.image = file.name;
      console.log(newPost);
    }
    // dispatch(createPost(newPost));
    const response = await axios.post(`${baseUrl}/posts`, newPost, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    setFile('');
  };

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <div className={Styles.container}>
      <div className={Styles.post}>
        <form className={Styles.form} onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            placeholder="What's on your mind?"
            ref={content}
          />
          <label htmlFor="file" className={Styles.shareOption}>
            <PhotoIcon />
            <span className={Styles.shareOptionText}>Photo or Video</span>
            <input
              style={{ display: 'none' }}
              type="file"
              id="file"
              accept=".png, .jpeg, .jpg"
              onChange={handleFileChange}
            />
          </label>
          <button
            type="submit"
            className={Styles.postBtn}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
