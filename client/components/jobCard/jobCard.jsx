import React from 'react';

export default function JobCard(props) {
  return (
    <div className="card" key={props.id}>
      <h3 className="company-line">{props.company}</h3>
      <h4 className="position-line">{props.position}</h4>
      <div className="salary-line">{props.salary}</div>
      <button className="link-line">
        <a href={props.link}>Go to Site</a>
      </button>
    </div>
  );
}
