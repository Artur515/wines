import React from 'react';

import styles from './loader.module.scss';

function Loader() {
  return (
    <div className={styles.holder}>
      <div className={styles.preloader}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
