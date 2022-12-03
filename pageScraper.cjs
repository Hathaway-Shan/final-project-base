const scraperObject = {
  url: 'https://remoteok.com/remote-javascript-jobs?order_by=date',
  async scraper(browser) {
    let page = await browser.newPage();
    // we cannot read console logs outside the browser instance without this code
    page.on('console', async (e) => {
      const args = await Promise.all(
        e.args().map((a) => a.jsonValue())
      );
      console[e.type() === 'warning' ? 'warn' : e.type()](...args);
    });
    console.log(`navigating to ${this.url}...`);
    await page.goto(this.url, { waitUntil: 'networkidle0' });

    //we call puppeteers evaluate method to select specific information from the page
    const data = await page.evaluate(() => {
      const jobList = [];

      const jobs = document.querySelectorAll('.job');

      for (const job of jobs) {
        jobList.push({
          company: job
            .querySelector('h3[itemprop]')
            .innerHTML.replace(/[\n]/gm, ''),
          position: job
            .querySelector('h2[itemprop]')
            .innerHTML.replace(/[\n]/gm, ''),
          link: job.querySelector('.preventLink[itemprop]').href,
          salary: job
            .querySelector('.company.position.company_and_position')
            .innerText.match(/[a-zA-Z0-9]+/gm)
            .slice(-2)
            .toString()
            .replace(/[,]/, '-'),
        });
      }
      return jobList;
    });
    console.log('data is: ', data);
    await browser.close();
  },
};

module.exports = scraperObject;
