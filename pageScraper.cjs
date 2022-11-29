const scraperObject = {
  url: 'https://remoteok.com/remote-javascript-jobs',
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`navigating to ${this.url}...`);
    await page.goto(this.url);
  },
};

module.exports = scraperObject;
