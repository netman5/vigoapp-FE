import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../features/posts/postsSlice';
import Styles from './Home.module.css';
import FollowersSection from './followers/FollowersSection';
import Feeds from './Feeds';
import UserInfo from './user-info/UserInfo';
import SearchPage from '../searchPage/SearchPage';
import { fetchAllUsers } from '../../features/users/usersSlice';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const storedPosts = useSelector((state) => state.posts.data.posts);
  const { query, data } = useSelector((state) => state.users);

  return (
    <div className={Styles.home}>
      {query ? <SearchPage query={query} data={data} /> : (
        <>
          <section className={Styles.UserInfo}>
            <UserInfo />
          </section>

          <section className={Styles.Feeds}>
            <Feeds posts={storedPosts} />
          </section>

          <section className={Styles.Followers}>
            <FollowersSection />
          </section>
        </>
      )}
    </div>
  );
}

export default Home;
