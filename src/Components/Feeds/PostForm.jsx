import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Styles from './PostForm.module.css';
import PhotoIcon from './PhotoIcon';
import { createPost } from '../../features/posts/postsSlice';

function PostForm() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [file, setFile] = useState('');
  const content = useRef('');
  const btnRef = useRef(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        const newPost = {
          content: content.current.value,
        };
        dispatch(createPost(newPost));
        content.current.value = '';
        setFile('');
        btnRef.current.disabled = true;
      } else if (!content.current.value) {
        const data = new FormData();
        data.append('image', file);
        dispatch(createPost(data));
        content.current.value = '';
        setFile('');
        btnRef.current.disabled = true;
      } else {
        const data = new FormData();
        data.append('image', file);
        data.append('content', content.current.value);
        dispatch(createPost(data));
        content.current.value = '';
        setFile('');
        btnRef.current.disabled = true;
      }
    } catch (error) {
      console.log(error);
    }

    return null;
  };

  useEffect(() => {
    if (content) {
      btnRef.current.disabled = false;
    } else {
      btnRef.current.disabled = true;
    }
  }, [content.current.value]);

  useEffect(() => {
    if (file) {
      btnRef.current.disabled = false;
    } else {
      btnRef.current.disabled = true;
    }
  }, [file]);

  return (
    <div className={Styles.container}>
      <div className={Styles.post}>
        <form className={Styles.form} onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            placeholder={`What's on your mind? ${user.name}`}
            ref={content}
          />
          <label htmlFor="file">
            <input
              style={{ display: 'none' }}
              type="file"
              id="file"
              accept=".png, .jpeg, .jpg"
              onChange={handleFileChange}
            />
          </label>

          <div className={Styles.submit}>
            <div className={Styles.shareOption}>
              <PhotoIcon />
              <span className={Styles.shareOptionText}>Photo or Video</span>
            </div>
            <button
              type="submit"
              className={Styles.postBtn}
              ref={btnRef}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
