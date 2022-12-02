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
            company: 'Sticker Mule',
            position: 'Site Reliability Engineer',
            link: 'https://remoteok.com/remote-jobs/remote-site-reliability-engineer-sticker-mule-154372',
            salary: '120k-150k',
          },
        ]);
      });
  });
  it('#post /jobs inserts a job to jobs table', () => {
    return request(app)
      .post('/jobs')
      .send({
        company: 'Mulligan Funding',
        position: 'Software Engineer',
        link: 'https://remoteok.com/remote-jobs/remote-software-engineer-mulligan-funding-146013',
        salary: '70k-120k',
      })
      .then((res) => {
        // console.log('RESPONSE BODY IS', res.body);
        expect(res.status).toBe(200);
      });
  });
});
