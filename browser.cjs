const puppeteer = require('puppeteer');

async function startBrowser() {
  let browser;

  try {
    console.log('Opening browser instance...');
    //puppeteer launch method creates a browser instance and returns a promise check with await
    browser = await puppeteer.launch({ headless: false });
  } catch (error) {
    console.log('could not create a browser instance: ', error);
  }
  return browser;
}

startBrowser();

module.exports = { startBrowser };
