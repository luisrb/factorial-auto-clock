const getDaysToFill = async (page) => {
    const elements = await page.$$('tr:has(> td:nth-child(3) > div:nth-child(2))');
    console.log(`Found ${elements.length} elements`);

    return elements;
}

module.exports = getDaysToFill;