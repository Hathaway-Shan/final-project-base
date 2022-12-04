import { useEffect, useState } from 'react';
import { getAllJobs } from '../services/job-utils.js';

export default function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const jobList = await getAllJobs();
        setJobs(jobList);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { jobs, setJobs, loading, setLoading };
}
