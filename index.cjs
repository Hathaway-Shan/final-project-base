const browserObject = require('./browser.cjs');
const scraperController = require('./pageController.cjs');

//Start Browser and create a browser instance
let browserInstance = browserObject.startBrowser();

//Here we pass the browser instance to the scraper controller
scraperController(browserInstance);