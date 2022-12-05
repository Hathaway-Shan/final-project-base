import React from 'react';
import './jobCard.css';

export default function JobCard({ company, position, link, salary }) {
  <div className="job-card">
    <h2 className="company-line">{job.company}</h2>
    <h3 className="position-line">{job.position}</h3>
    <a className="link-line" href={job.link}>
      Link
    </a>
    <div className="salary-line">{job.salary}</div>
  </div>;
}
