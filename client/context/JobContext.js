import {
  useEffect,
  useState,
  createContext,
  useContext,
} from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [jobsFilterArr, setJobsFilterArr] = useState([]);

  useEffect(() => {
    const getJobs = () => {
      fetch('/api/v1/jobs').then((response) => {
        return response
          .json()
          .then((data) => {
            setJobs(data);
            setJobsFilterArr(data);
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

  const filterJobs = () => {
    const filteredJobs = jobs.filter(
      (job) =>
        job.company
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        job.position
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        job.salary.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('FILTERED JOBS IS: ', filteredJobs);
    setJobsFilterArr(filteredJobs);
  };
  const value = {
    jobs,
    loading,
    error,
    filterJobs,
    searchTerm,
    setSearchTerm,
    setLoading,
    jobsFilterArr,
  };
  return (
    <JobContext.Provider value={value}>
      {children}
    </JobContext.Provider>
  );
};

export function useJobs() {
  const context = useContext(JobContext);
  return context;
}
