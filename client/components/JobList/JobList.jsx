import React, { useEffect, useState } from 'react';
import styles from './JobList.module.css';
import JobCard from '../jobCard/jobCard';
import ReactPaginate from 'react-paginate';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

export default function JobList() {
  //break this out into it's own useJobs hook with state and error
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');
  //loading may eventually need to be broken out into it's own component
  const [loading, setLoading] = useState(true);
  //pagination logic begins here

  const [pageNumber, setPageNumber] = useState(0);
  const jobsPerPage = 12;
  const pagesVisited = pageNumber * jobsPerPage; //returns 0*12, 1*12 etc
  const pageCount = Math.ceil(jobs.length / jobsPerPage); //accounts for indivisible number of pages
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayJobs = jobs
    .slice(pagesVisited, pagesVisited + jobsPerPage)
    .map((job) => {
      return jobs && <JobCard key={job.id} {...job} />;
    });

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
          console.log(error.message);
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
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <>
      <div className={styles.wrapper}>{displayJobs}</div>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        pageCount={pageCount}
        onPageChange={changePage}
        pageClassName={styles.pageIcon}
        containerClassName={styles.pagination}
        previousLinkClassName={styles.paginationBttn}
        nextLinkClassName={styles.paginationBttn}
        activeClassName={styles.paginationActive}
      />
    </>
  );
}
