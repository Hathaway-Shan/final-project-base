import React, { useEffect, useState } from 'react';

import styles from './JobList.module.css';
import JobCard from '../JobCard/JobCard';
import AstroNaught from '../AstroNaught/AstroNaught';
import ReactPaginate from 'react-paginate';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import { useJobs } from '../../context/JobContext';

export default function JobList() {
  const { jobsFilterArr, error, loading } = useJobs();

  //pagination logic begins here

  const [pageNumber, setPageNumber] = useState(0);
  const jobsPerPage = 12;
  const pagesVisited = pageNumber * jobsPerPage; //returns 0*12, 1*12 etc
  const pageCount = Math.ceil(jobsFilterArr.length / jobsPerPage); //accounts for indivisible number of pages
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  console.log('JOBS FILTER ARR IS: ', jobsFilterArr);

  const displayJobs = jobsFilterArr
    .slice(pagesVisited, pagesVisited + jobsPerPage)
    .map((job) => {
      return jobsFilterArr && <JobCard key={job.id} {...job} />;
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

  if (jobsFilterArr.length === 0) {
    return (
      <div className={styles.wrapper}>
        <AstroNaught />
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
