const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// Prevent detection as a bot
puppeteer.use(StealthPlugin())

const browserConfig = async () => {
    try {

        const browser = await puppeteer.launch({
            headless: process.env.HEADLESS === 'true',
            defaultViewport: null
        });

        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 })

        return { browser, page };
    } catch (e) {
        console.log('Error browser config');
        return;
    }
}

module.exports = browserConfig;