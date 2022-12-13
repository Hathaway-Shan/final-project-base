-- Use this file to define your SQL tables.
-- The SQL in this file will be executed when you run `npm run setup-db`.

DROP TABLE IF EXISTS jobs, site_users, users_jobs;


CREATE TABLE jobs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  company VARCHAR,
  position VARCHAR,
  link VARCHAR,
  salary VARCHAR
);

CREATE TABLE site_users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_hash VARCHAR NOT NULL
);

CREATE TABLE users_jobs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id BIGINT,
  job_id BIGINT,
  FOREIGN KEY (user_id) REFERENCES site_users(id),
  FOREIGN KEY (job_id) REFERENCES jobs(id)
);



INSERT INTO
  jobs (company, position, link, salary)
VALUES
  ('Test Job 1', 'Example#1', 'https://example.com/example1', '$-$$$')
  ;
