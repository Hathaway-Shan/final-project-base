import React, { useEffect, useState } from 'react';
import JobCard from '../jobCard/jobCard';

export default function JobList() {
  //break this out into it's own hook with state and error
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    getJobs();
  }, []);
  function getJobs() {
    fetch('/api/v1').then((response) => {
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
  // return <div>{jobs ? jobs : 'there is no job data available'}</div>;
  if (error != '') {
    return <h3 style={{ color: 'red' }}>{JSON.stringify(error)}</h3>;
  }
  return (
    <div>
      {jobs &&
        jobs.map((job) => {
          return <JobCard key={job.id} {...job} />;
        })}
    </div>
  );
}
