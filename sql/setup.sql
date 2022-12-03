-- Use this file to define your SQL tables.
-- The SQL in this file will be executed when you run `npm run setup-db`.

drop table if exists jobs;


create table jobs (
  id bigint generated always as identity primary key,
  company varchar,
  position varchar,
  link varchar,
  salary varchar
);

insert into
  jobs (company, position, link, salary)
values
  ('Test Job 1', 'Site Reliability Engineer', 'https://remoteok.com/remote-jobs/remote-site-reliability-engineer-sticker-mule-154372', '120k-150k')
  ;
