import React, { useEffect, useState } from 'react';

import styles from './JobList.module.css';
import JobCard from '../JobCard/JobCard';
import ReactPaginate from 'react-paginate';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import useJobs from '../../hooks/useJobs';

export default function JobList() {
  const { jobs, loading, error } = useJobs();

  //pagination logic begins here

  const [pageNumber, setPageNumber] = useState(1);
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
