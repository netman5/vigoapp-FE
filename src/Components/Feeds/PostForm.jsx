import React, { useState, useRef } from 'react';
import Styles from './PostForm.module.css';
import PhotoIcon from './PhotoIcon';

function PostForm() {
  const [file, setFile] = useState('');
  const content = useRef('');
  const user = JSON.parse(localStorage.getItem('user'));

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      user_id: user.id,
      content: content.current.value,
    };

    if (file) {
      const data = new FormData();
      data.append('file', file);
      data.append('name', file.name);
      newPost.image = file.name;
    }
    try {
      await fetch(`${baseUrl}/posts`,
        {
          method: 'POST',
          body: JSON.stringify(newPost),
        });
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }

    setFile('');
  };

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
