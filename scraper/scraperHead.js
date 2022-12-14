import Job from '../server/models/Jobs.js';
import browserObject from './browser.js';
import pageScraper from './pageScraper.js';

(async () => {
  let jobsInserted = 0;

  //Start Browser and create a browser instance
  let browserInstance = await browserObject.startBrowser();
  //returns scraped data which we need to capture
  const scrapedData = await pageScraper.scraper(browserInstance);

  //around here is where we should stuff it into the DB
  // console.log('SCRAPED DATA IS: ', scrapedData);
  scrapedData.forEach((element) => {
    Job.insert(element);
    jobsInserted++;
    console.log(`${jobsInserted} job successfully inserted`);
  });

  console.log(`${jobsInserted} jobs added to DB`);
})();
