import request from 'supertest';
import app from '../app';
import { describe, expect, it } from '@jest/globals';
import setupDb from '../setup-data.js';

describe('the server', () => {
  beforeEach(() => {
    return setupDb();
  });
  it('#get /jobs returns a list of jobs', () => {
    return request(app)
      .get('/jobs')
      .then((res) => {
        expect(res.body).toEqual([
          {
            id: '1',
            company: 'Test Job 1',
            position: 'Example#1',
            link: 'https://example.com/example1',
            salary: '$-$$$',
          },
        ]);
      });
  });
  it('#post /jobs inserts a job to jobs table', () => {
    return request(app)
      .post('/jobs')
      .send({
        company: 'Test Job 2',
        position: 'Example#2',
        link: 'https://example.com/example2',
        salary: '$-$$$',
      })
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});
