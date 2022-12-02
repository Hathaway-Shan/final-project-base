//import insert function from model change out console log on 13 for insert method from Jobs Model log number of scraped jobs

const browserObject = require('./browser.cjs');
// const scraperController = require('./pageController.cjs');
const pageScraper = require('./pageScraper.cjs');
(async () => {
  //Start Browser and create a browser instance
  let browserInstance = await browserObject.startBrowser();
  //returns scraped data which we need to capture
  const scrapedData = await pageScraper.scraper(browserInstance);

  //around here is where we should stuff it into the DB
  console.log('SCRAPED DATA IS: ', scrapedData);
})();
