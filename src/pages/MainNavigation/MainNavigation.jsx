import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const MainNavigation = () => (
  <div className={styles.wrapper}>
    <span className={styles.trigger}><span className={styles.triggerLine} /></span>
    <div className={styles.container}>
      <Link className={styles.link} to="/reds">
        <div />
      </Link>
      <Link className={styles.link} to="/whites">
        <div />
      </Link>
      <Link className={styles.link} to="/sparkling">
        <div />
      </Link>
      <Link className={styles.link} to="/rose">
        <div />
      </Link>
      <div className={styles.link}>
        <div />
      </div>
    </div>
  </div>

);

export default MainNavigation;
