import { useState } from 'react';
import { useJobs } from '../../context/JobContext';
import JobList from '../JobList/JobList';
import styles from './SearchBar.module.css';

export default function Search() {
  const { setSearchTerm, searchTerm, filterJobs } = useJobs();

  const searchJobs = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchInput}>
        <input
          type="text"
          placeholder={searchTerm}
          onChange={(e) => searchJobs(e.target.value)}
        ></input>
        <a className={styles.searchButton} onClick={filterJobs}>
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
