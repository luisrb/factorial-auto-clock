const getDayOfRow = async (element) => {
    await element.$('tr > td > div > span:nth-child(1)').then(async (item) => {
        const text = await item.evaluate(node => node.innerText);
        console.log(`Working in day: ${text}`);
    });
}

module.exports = getDayOfRow;