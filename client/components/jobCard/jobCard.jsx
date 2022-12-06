import React from 'react';
import './jobCard.css';

export default function JobCard({
  id,
  company,
  position,
  link,
  salary,
}) {
  return (
    <div className="job-card" key={id}>
      <h2 className="company-line">{company}</h2>
      <h3 className="position-line">{position}</h3>
      <a className="link-line" href={link}>
        Link
      </a>
      <div className="salary-line">{salary}</div>
    </div>
  );
}
