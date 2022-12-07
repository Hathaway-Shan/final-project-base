import React, { useEffect, useState } from 'react';
import styles from './JobList.module.css';
import JobCard from '../jobCard/jobCard';

export default function JobList() {
  //break this out into it's own hook with state and error
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobs();
  }, []);
  function getJobs() {
    fetch('/api/v1/jobs').then((response) => {
      return response
        .json()
        .then((data) => {
          setJobs(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(`${response.status}: ${error.message}`);
          setLoading(false);
        });
    });
  }

  if (error != '') {
    return <h3 style={{ color: 'red' }}>{JSON.stringify(error)}</h3>;
  }

  if (loading) {
    return (
      <div className={styles.wrapper}>
        <h3>Loading Jobs...</h3>
      </div>
    );
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
