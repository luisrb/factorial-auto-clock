const randomNumber = require('../utils/random');

let allHours = [];
try{
     allHours = process.env.HOURS_RANDOM.split("//").map(_ => {
        const data = JSON.parse(_);
        return Object.values(data)
    })
}catch(e){
    console.log('Error parsing hours');
    return;
}

const writeHours = async (element, page) => {

    try{
        // get random hours
        const hours = allHours[Math.floor(Math.random() * allHours.length)];

        const inputs = await element.$$('input')

        for (const [index, input] of inputs.entries()) {
            await page.evaluate((element) => { element.value = ''; }, input);
            await input.focus();
            await input.type(hours[index], { delay: randomNumber() });
        }
    }catch(e){
        console.log('Error writing hours');
        return;
    }

}

module.exports = writeHours;