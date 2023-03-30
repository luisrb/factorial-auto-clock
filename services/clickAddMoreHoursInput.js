const randomNumber = require("../utils/random");

const clickAddMoreHoursInput = async (element) => {

    try{
        await element.$('button:has(span > span)').then(async (button) => {
            await new Promise(r => setTimeout(r, randomNumber()));
            button.evaluate(b => b.click());
        });
    }catch(e){
        console.log('Error Add more hours');
        return;
    }
}


module.exports = clickAddMoreHoursInput;