
const browserConfig = require('./services/browserConfig');
const clickAddMoreHoursInput = require('./services/clickAddMoreHoursInput');
const clickSaveButton = require('./services/clickSaveButton');
const getDayOfRow = require('./services/getDayOfRow');
const getDaysToFill = require('./services/getDaysToFill');
const loginPage = require('./services/loginPage');
const { getMonths } = require('./services/months');
const writeHours = require('./services/writeHours');
const waitUntilLoaded = require('./utils/waitUntilLoaded');

require('dotenv').config();

(async () => {
    // get the months ago that you want to fill in(CLI)
    const months = getMonths();

    // get the browser and the page config
    const { browser, page } = await browserConfig();

    // login
    await loginPage(page, months);

    // go to the page with the hours and wait until the page is loaded
    await waitUntilLoaded(page);

    // wait until the table is loaded
    await page.waitForSelector('table').then(async () => {

        // get all the rows with the days to input hours
        const elements = await getDaysToFill(page);

        for (const element of elements) {

            // get the day of the month
            await getDayOfRow(element);

            // show 2 inputs more
            await clickAddMoreHoursInput(element);

            // write in the inputs with the hours
            await writeHours(element, page);

            // save the hours
            await clickSaveButton(element);

        }

    });

    console.log('Finish');

    // close the browser
    await browser.close();
})();