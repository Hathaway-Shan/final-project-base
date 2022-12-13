import { useState } from 'react';
import JobList from '../JobList/JobList';
import styles from './SearchBar.module.css';

export default function Search() {
  const [searchInput, setSearchInput] = useState(
    'search for jobs...'
  );
  const searchJobs = (searchValue) => {
    setSearchInput(searchValue);
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchInput}>
        <input
          type="text"
          placeholder={searchInput}
          onChange={(e) => searchJobs(e.target.value)}
        ></input>
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
