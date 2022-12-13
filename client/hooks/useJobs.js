import { useEffect, useState } from 'react';

export default function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getJobs = () => {
      fetch('/api/v1/jobs').then((response) => {
        return response
          .json()
          .then((data) => {
            setJobs(data);
            setLoading(false);
          })
          .catch((error) => {
            setError(`${response.status}: ${error.message}`);
            console.log(error.message);
            setLoading(false);
          });
      });
    };
    getJobs();
  }, []);
  return { jobs, setJobs, loading, error };
}
