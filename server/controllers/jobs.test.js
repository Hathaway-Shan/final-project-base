import request from 'supertest';
import app from '../app';
import { describe, expect, it } from '@jest/globals';
import setupDb from '../setup-data.js';

describe('the server', () => {
  beforeEach(() => {
    setupDb();
  });
  it('#get /jobs returns a list of jobs', () => {
    return request(app)
      .get('/jobs')
      .then((res) => {
        console.log('RESPONSE BODY IS: ', res.body);
        expect(res.body.length).toEqual(1);
      });
  });
});
