import React from 'react';
import styles from './jobCard.module.css';

export default function JobCard(props) {
  let jobImagePath = '';

  if (props.position.includes('Engineer')) {
    jobImagePath = '/images/Engineer.png';
  } else if (props.position.includes('Developer')) {
    jobImagePath = '/images/Developer.png';
  } else {
    jobImagePath = '/images/Binary.png';
  }
  return (
    <div className={styles.card} key={props.id}>
      <img src={jobImagePath}></img>
      <h3 className="company-line">{props.company}</h3>
      <h4 className="position-line">{props.position}</h4>
      <div className="salary-line">{props.salary}</div>
      <a className={styles.link} href={props.link}>
        Go to Site
      </a>
    </div>
  );
}
