const waitUntilLoaded = async (page) => {
    await page.waitForNavigation({
        // wait until don't have network request for 500ms
        waitUntil: 'networkidle0',
    });
}

module.exports = waitUntilLoaded;