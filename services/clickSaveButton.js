const randomNumber = require("../utils/random");

const clickSaveButton = async (element) => {


    try {
        const buttons = await element.$$('button:has(span > span)')

        for (const button of buttons) {
            await new Promise(r => setTimeout(r, randomNumber()*2));
            await button.evaluate(b => b.click());
        }

        // wait until is saved
        await new Promise(r => setTimeout(r, 1000));

    } catch (e) {
        console.log("Error save button");
        return;
    }

}

module.exports = clickSaveButton;