import React, { useEffect, useState } from 'react';
import JobCard from '../jobCard/jobCard';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    getJobs();
  }, []);
  //break this out into it's own hook maybe?
  function getJobs() {
    fetch('/api/v1/jobs').then((response) => {
      return response.json().then((data) => {
        console.log('DATA IS: ', data);
        setJobs(data);
      });
    });
  }
  // return <div>{jobs ? jobs : 'there is no job data available'}</div>;
  return (
    <div>
      {jobs &&
        jobs.map((job) => {
          console.log('JOB IS: ', job);
          return <JobCard key={job.id} {...job} />;
        })}
    </div>
  );
}
