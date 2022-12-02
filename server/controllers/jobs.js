// const { Router } = require('express');

// const Job = require('../models/Jobs');

import { Router } from 'express';
import db from '../database.js';

// const router = Router();

export default Router()
  .get('/', async (req, res, next) => {
    return db
      .query('select * from jobs;')
      .then((result) => res.send(result.rows));
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
    try {
      const newJob = await Job.insert(req.body);
      res.json(newJob);
    } catch (error) {
      /* eslint-disable no-console */
      console.log('JOBS INSERT', error);
    }
  });
