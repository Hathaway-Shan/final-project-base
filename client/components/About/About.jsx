import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.blueColumn}>text in column 1</div>
        </div>
        <div className={styles.column}>
          <img
            src="/images/programing.png"
            className={styles.devImage}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.orangeColumn}>
            text in row 2 column 1
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.purpleRow}>
            <div className={styles.spacerRow}></div>
            <img
              className={styles.aboutImg}
              src="/images/github.png"
            />
            <img
              className={styles.aboutImg}
              src="/images/linkedin.png"
            />
            <img className={styles.aboutImg} src="/images/Logo.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
