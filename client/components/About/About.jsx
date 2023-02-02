import React from 'react';
import styles from './About.module.css';

export default function About() {
  //
  return (
    <div class={styles.aboutWrapper}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div class={styles.blueColumn}>text in column 1</div>
        </div>
        <div className={styles.column}>
          <div class={styles.greenColumn}>text in column 2</div>
        </div>
      </div>
    </div>
  );
}
