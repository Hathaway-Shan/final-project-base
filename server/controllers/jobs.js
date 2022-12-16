import { Router } from 'express';
import db from '../database.js';
import Job from '../models/Jobs.js';
// import promisifyRequest from './promiseErrorHandling.js';

export default Router()
  .get('/', (req, res, next) => {
    return Job.getAll().then((result) => res.json(result));
  })
  .post('/', async (req, res) => {
    return Job.insert(req.body).then((result) => res.json(result));
  })
  .post('/upsert', (req, res) => {
    return Job.upsert(req.body)
      .then((result) => res.json(result))
      .catch((error) => {
        console.error('error handling request', error);
        res.status(500).send('internal server error');
      });
  });
