import { useState, useEffect } from 'react';
// This imports a TypeScript file from JavaScript.
import listItemFn from './list-item';
import listItemStyles from './list-item.module.css';

// ignoreLoad allows us to prevent the "act" warning from react-testing-library
// by skipping useEffect. We should only pass true here when we care about
// testing the loading UI, and this should never see use in production code.
export default (ignoreLoad) => {
  const ListItem = listItemFn(listItemStyles);
  const component = (props) => {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);
    if (!ignoreLoad) {
      useEffect(() => {
        fetch('/api/v1/jobs').then((res) => {
          return res
            .json()
            .then(res.status < 400 ? setJobs : setError);
        });
      }, []);
    }
    if (jobs.length > 0) {
      return (
        <ul>
          {jobs.map((job, i) => {
            return (
              <ListItem key={i}>
                <h2 className="company-line">{job.company}</h2>
                <h3 className="position-line">{job.position}</h3>
                <a className="link-line" href={job.link}>
                  Link
                </a>
                <div className="salary-line">{job.salary}</div>
              </ListItem>
            );
          })}
        </ul>
      );
    } else if (error != null) {
      return (
        <span style={{ color: 'red' }}>{JSON.stringify(error)}</span>
      );
    } else {
      return <span data-testid="job-loader">Loading Jobs!</span>;
    }
  };
  component.displayName = 'JobList';
  return component;
};
