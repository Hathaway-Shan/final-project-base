-- Use this file to define your SQL tables.
-- The SQL in this file will be executed when you run `npm run setup-db`.

DROP TABLE IF EXISTS jobs, users, users_jobs CASCADE;


CREATE TABLE jobs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  company VARCHAR,
  position VARCHAR,
  link VARCHAR UNIQUE,
  salary VARCHAR
);

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_hash VARCHAR NOT NULL
);

-- CREATE TABLE users_jobs (
--   id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   user_id INT NOT NULL,
--   job_id INT NOT NULL,
--   FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE,
--   FOREIGN KEY (job_id) REFERENCES jobs(id) ON UPDATE CASCADE
-- );



-- INSERT INTO
--   jobs (company, position, link, salary)
-- VALUES
--   ('Test Job 1', 'Example#1', 'https://example.com/example1', '$-$$$')
--   ;

  INSERT INTO
  users (email, password_hash)
  VALUES
  ('existinguser@example.com', '$2b$10$j8yE9VueWx6DL8DDkDCPBugk8Ho8xFforCdx025HHxDcnmANYrwK2')
  ;
