// const { Router } = require('express');

// const Job = require('../models/Jobs');

import { Router } from 'express';
import db from '../database.js';
import Job from '../models/Jobs.js';

// const router = Router();

export default Router()
  .get('/', (req, res, next) => {
    // return db
    // .query('select * from jobs;')
    return Job.getAll().then((result) => res.json(result));
  })
  //   try {
  //     const jobs = await Job.getAll();
  //     res.json(jobs);
  //   } catch (error) {
  //     /* eslint-disable no-console */
  //     console.log('JOBS GET ALL', error);
  //     next(error);
  //   }
  // })
  .post('/', async (req, res) => {
    return Job.insert(req.body).then((result) => res.json(result));
  });
