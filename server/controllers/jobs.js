const { Router } = require('express');

const Job = require('../models/Jobs');

const router = Router();

router
  .get('/', async (req, res, next) => {
    try {
      const jobs = await Job.getAll();
      res.json(jobs);
    } catch (error) {
      /* eslint-disable no-console */
      // console.log('JOBS GET ALL', error);
      next(error);
    }
  })
  .post('/', async (req, res) => {
    try {
      const newJob = await Job.insert(req.body);
      res.json(newJob);
    } catch (error) {
      /* eslint-disable no-console */
      console.log('JOBS INSERT', error);
    }
  });

module.exports = router;
