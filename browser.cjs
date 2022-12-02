const puppeteer = require('puppeteer');

async function startBrowser() {
  try {
    console.log('Opening browser instance...');
    //puppeteer launch method creates a browser instance and returns a promise check with await
    return await puppeteer.launch({ headless: false });
  } catch (error) {
    console.log('could not create a browser instance: ', error);
    //bubble the error and shut down everything
    throw error;
  }
}

module.exports = { startBrowser };
