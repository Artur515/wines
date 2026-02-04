import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

function Header() {
  return (
    <div className={styles.body}>
      <span className={styles.span1}><span className={styles.span2} /></span>
      <div className={styles.wrap}>
        <Link className={styles.a} to="/reds">
          <div />
        </Link>
        <Link className={styles.a} to="/whites">
          <div />
        </Link>
        <Link className={styles.a} to="/sparkling">
          <div />
        </Link>
        <Link className={styles.a} to="/rose">
          <div />
        </Link>
        <div className={styles.a}>
          <div />
        </div>
      </div>
    </div>

  );
}

export default Header;
