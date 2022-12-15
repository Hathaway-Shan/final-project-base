import { launch } from 'puppeteer';

async function startBrowser() {
  try {
    console.log('Opening browser instance...');
    //puppeteer launch method creates a browser instance and returns a promise check with await
    return await launch({ headless: true });
  } catch (error) {
    console.log('could not create a browser instance: ', error);
    //bubble the error and shut down everything
    throw error;
  }
}

export default { startBrowser };
