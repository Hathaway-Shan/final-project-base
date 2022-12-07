import React, { useEffect, useState } from 'react';
import styles from './JobList.module.css';
import JobCard from '../jobCard/jobCard';

export default function JobList() {
  //break this out into it's own hook with state and error
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getJobs();
  }, []);
  function getJobs() {
    fetch('/api/v1/jobs').then((response) => {
      return response
        .json()
        .then((data) => {
          setJobs(data);
        })
        .catch((error) => {
          setError(`${response.status}: ${error.message}`);
        });
    });
  }

  if (error != '') {
    return <h3 style={{ color: 'red' }}>{JSON.stringify(error)}</h3>;
  }

  return (
    <div className={styles.wrapper}>
      {jobs &&
        jobs.map((job) => {
          return <JobCard key={job.id} {...job} />;
        })}
    </div>
  );
}
