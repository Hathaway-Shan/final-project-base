const pageScraper = require('./pageScraper.cjs');

/*
This code exports a function that takes in the browser instance and passes
it to a function called scrapeAll(). This function, in turn, passes this instance
to pageScraper.scraper() as an argument which uses it to scrape pages
*/

async function scrapeAll(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    await pageScraper.scraper(browser);
  } catch (error) {
    console.log('could not create a browser instance: ', error);
  }
}

module.exports = (browserInstance) => scrapeAll(browserInstance);
