import React from 'react';
import styles from './Search.module.css';

//we pass props to search here
export default function Search({ placeholder, data }) {
  //functions for search go here
  return (
    <div className={styles.search}>
      <div className={styles.searchInput}>
        <input type="text" placeholder={placeholder}></input>
        <a className={styles.searchButton}>
          <img
            className={styles.searchIcon}
            src="/images/magnifying-glass.png"
            alt="Search Icon"
          />
        </a>
      </div>
      <div className={styles.dataResults}></div>
    </div>
  );
}
