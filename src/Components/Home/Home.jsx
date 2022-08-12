import React from 'react';
import Styles from './Home.module.css';
import FollowersSection from './FollowersSection';
import Feeds from './Feeds';
import UserInfo from './UserInfo';

function Home() {
  return (
    <div className={Styles.home}>
      <section className={Styles.UserInfo}>
        <UserInfo />
      </section>

      <section className={Styles.Feeds}>
        <Feeds />
      </section>

      <section className={Styles.Followers}>
        <FollowersSection />
      </section>
    </div>
  );
}

export default Home;
