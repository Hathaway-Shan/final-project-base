import { Router } from 'express';
import db from '../database.js';
import Job from '../models/Jobs.js';

export default Router()
  .get('/', (req, res, next) => {
    return Job.getAll().then((result) => res.json(result));
  })
  .post('/', async (req, res) => {
    return Job.insert(req.body).then((result) => res.json(result));
  })
  .post('/', async (req, res) => {
    return Job.upsert(req.body).then((result) => res.json(result));
  });
