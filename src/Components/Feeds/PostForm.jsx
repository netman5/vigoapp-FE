import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Styles from './PostForm.module.css';
import PhotoIcon from './PhotoIcon';
import { createPost } from '../../features/posts/postsSlice';

function PostForm() {
  const [file, setFile] = useState('');
  // filepreview: URL.createObjectURL(event.target.files[0]),
  const content = useRef('');
  const btnRef = useRef(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', content.current.value);
    formData.append('image', file);
    try {
      dispatch(createPost(formData));
      content.current.value = '';
      setFile('');
      btnRef.current.disabled = true;
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (content.current.value.length > 0) {
      btnRef.current.disabled = false;
    } else {
      btnRef.current.disabled = true;
    }
  }, [content.current.value]);

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
            ref={btnRef}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
