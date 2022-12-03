/*
import insert function from model change out console log on 13 
for insert method from Jobs Model log number of scraped jobs
*/
import Job from './server/models/Jobs.js';
// const browserObject = require('./browser.cjs');
import browserObject from './browser.js';

// const Job = require('./server/models/Jobs.cjs');
// const pageScraper = require('./pageScraper.cjs');
import pageScraper from './pageScraper.js';
(async () => {
  // const Job = await import('./server/models/Jobs.js');
  //Start Browser and create a browser instance
  let browserInstance = await browserObject.startBrowser();
  //returns scraped data which we need to capture
  const scrapedData = await pageScraper.scraper(browserInstance);

  //around here is where we should stuff it into the DB
  console.log('SCRAPED DATA IS: ', scrapedData);
  scrapedData.forEach((element) => {
    Job.insert(element);
    console.log(`${element} successfully inserted`);
  });
  /*
  we are dealing with an array of job objects each of which
  needs to be inserted into our table via the function in our model

  Possible approaches

  1. forEach 
  benefits: could use insert as the callback function for each element in the array.
  drawbacks: filtering for jobs with matching properties could be tricky syntactically

  2. Standard for loop
  benefits: readable, adding filtering fits better in the body
  cons: not clean, will result in a long block of code

  Thoughts
  Perhaps filtering for duplicate entries should occur at the model level?

  */
})();
