import React from 'react';
import styles from './AstroNaught.module.css';

export default function AstroNaught() {
  //I will not be taking questions on the name of this file at this time
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
