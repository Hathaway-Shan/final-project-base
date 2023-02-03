import React from 'react';
import styles from './About.module.css';

export default function About() {
  const disclaimer = ` it is not intended to function as a real job board.`;
  const inProgress = '(currently in progress)';
  return (
    <div className={styles.aboutWrapper}>
      <h1 className={styles.title}>About This Project</h1>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.textColumnOne}>
            <p>
              This project was built as a solo proof of concept by a
              single developer over the course of an Agile sprint
              spanning roughly two weeks.
              <strong>{disclaimer}</strong>
            </p>
            <p>
              All jobs here are gathered by web scraper built into a
              Node.js backend. Their original source is{' '}
              <a
                href="https://remoteok.com/remote-javascript-jobs"
                target="_blank"
              >
                <strong>remoteok.com</strong>
              </a>{' '}
              please direct any job searching traffic to them.
            </p>
            <p>
              All icons are sourced from{' '}
              <a href="https://www.flaticon.com/" target="_blank">
                <strong>flaticon.com</strong>
              </a>
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <img
            src="/images/programing.png"
            className={styles.devImage}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.textColumn}>
            <p>
              I built this project as a proof of concept for a tool to
              assist in the job hunt for junior tech positions. The
              idea was to hook a <strong>Node.js</strong> backend
              containing a web scraper to a{' '}
              <strong>Postgres SQL</strong> database. Running the web
              scraper picks up the job listings from another site and
              upserts them into the database where they can then be
              searched and filtered on a <strong>React</strong>{' '}
              frontend. The result of that work is the site you are
              currently on.
            </p>
            <p>
              Although I am ultimately pretty happy with how the site
              turned out I will be adding some additional upgrades and
              features as I go. Mostly for fun and as a learning
              experience but a general overview of the versions, both
              finished and in progress will be posted here as I go.
            </p>
            <p>
              <strong>Version 1.0</strong>: Contained the basic proof
              of concept. The site successfully scrapes jobs from a
              single site and displays them.
            </p>
            <p>
              <strong>Version 1.1</strong>: Added Users. Site visitors
              can now sign up, and sign in. Somewhat tautologically
              this only gives them the option to sign out currently.
            </p>
            <p>
              <strong>Version 1.2</strong> {inProgress}: Will add a
              many to many join in the database for Users and Jobs. A
              signed in user will be able to add job cards to their
              own private board.
            </p>
            <p>
              If you would like to check out the codebase for yourself
              I have supplied a link to the mono repo on Github below.
              There are also links to my Github as a whole and my
              Linkedin if you would like to check out other work I've
              done or get in touch with me.
            </p>
            <p>Thank you for taking the time to visit!</p>
            <p>
              Sincerely, <i>Shan Hathaway</i>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.linkOne}>
            <a
              href="https://github.com/Hathaway-Shan"
              target="_blank"
            >
              <img
                className={styles.aboutImg}
                src="/images/github.png"
              />
              <div className={styles.aboutLinks}>My Github</div>
            </a>
            <a
              href="https://www.linkedin.com/in/shan-hathaway/"
              target="_blank"
            >
              <img
                className={styles.aboutImg}
                src="/images/linkedin.png"
              />
              <div className={styles.aboutLinks}>My Linkedin</div>
            </a>
            <a
              href="https://github.com/Hathaway-Shan/final-project-base"
              target="_blank"
            >
              <img
                className={styles.aboutImg}
                src="/images/Logo.png"
              />
              <div className={styles.aboutLinks}>Project Repo</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
