import React from 'react';
import styles from './AstroNaught.module.css';

export default function AstroNaught() {
  return (
    <div className={styles.failToFindCard}>
      <img
        className={styles.failToFindImage}
        src="/images/404.png"
      ></img>
      <h3>THERE'S NOTHING HERE!</h3>
      <p>...or nothing matches the current search.</p>
    </div>
  );
}
