import request from 'supertest';
import app from '../app';
import { describe, expect, it } from '@jest/globals';
import setupDb from '../setup-data.ts';

const testJob = {
  company: 'Test Job 1',
  position: 'Example#1',
  link: 'https://example.com/example1',
  salary: '$-$$',
};

const testJob2 = {
  company: 'Upsert',
  position: 'Example#2',
  link: 'https://example.com/example1',
  salary: '$$-$$$',
};

describe('jobs', () => {
  beforeEach(() => {
    return setupDb();
  });
  it('#get /jobs returns a list of jobs', () => {
    return request(app)
      .post('/jobs')
      .send(testJob)
      .then(() => request(app).get('/jobs'))
      .then((res) => {
        expect(res.body).toEqual([
          {
            id: '1',
            company: 'Test Job 1',
            position: 'Example#1',
            link: 'https://example.com/example1',
            salary: '$-$$',
          },
        ]);
      });
  });
  it.skip('#post /jobs inserts a job to jobs table', () => {
    return request(app)
      .post('/jobs')
      .send(testJob)
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  it.skip('#post /jobs/upsert does not add entries with duplicate urls', () => {
    return request(app)
      .post('/jobs')
      .send(testJob)
      .then(() => request(app).post('/jobs/upsert').send(testJob2))
      .then(() => request(app).get('/jobs'))
      .then((res) => {
        expect(res.body.length).toBe(1);
        expect(res.body).toStrictEqual([
          {
            id: '1',
            company: 'Upsert',
            position: 'Example#2',
            link: 'https://example.com/example1',
            salary: '$$-$$$',
          },
        ]);
      });
  });
});
