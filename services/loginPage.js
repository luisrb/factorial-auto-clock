const randomNumber = require('../utils/random');

require('dotenv').config();

const loginPage = async (page, months = null) => {
    const date = new Date();
    const actualMonth = date.getMonth() + 1;
    const actualYear = date.getFullYear();
    let url = '';

    try {
        const specificUrl = process.env.URL_FACTORIAL_SPECIFIC_MONTH
            .replace("{{YEAR}}", actualYear)
            .replace("{{MONTH}}", actualMonth - months);

        url = process.env.URL_LOGIN_BASE + specificUrl;
    } catch (e) {
        console.log('Error url');
        return;
    }

    try {
        await page.goto(url);
        await page.type('#user_email', process.env.USER_FACTORIAL, { delay: randomNumber() });
        await page.type('#user_password', process.env.PASS_FACTORIAL, { delay: randomNumber() });
        await page.click('input[type="submit"]');
        console.log('Login success');
    } catch (e) {
        console.log('Error login');
        return;
    }
}


module.exports = loginPage;