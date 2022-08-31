import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../features/posts/postsSlice';
import Styles from './Home.module.css';
import FollowersSection from './FollowersSection';
import Feeds from './Feeds';
import UserInfo from './user-info/UserInfo';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const storedPosts = useSelector((state) => state.posts.data.posts);

  return (
    <div className={Styles.home}>
      <section className={Styles.UserInfo}>
        <UserInfo />
      </section>

      <section className={Styles.Feeds}>
        <Feeds posts={storedPosts} />
      </section>

      <section className={Styles.Followers}>
        <FollowersSection />
      </section>
    </div>
  );
}

export default Home;
