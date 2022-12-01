import request from 'supertest';
import app from '../app';
import { describe, expect, it } from '@jest/globals';
import setupDb from '../setup-data.js';

describe('the server', () => {
  beforeEach(() => {
    setupDb();
  });
  it('#get /jobs returns a list of jobs', async () => {
    const response = await request(app).get('/jobs');
    console.log('RESPONSE BODY IS: ', response.body);
    expect(response.body.length).toEqual(1);
  });
});
