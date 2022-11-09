const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launc();
    const page = await browser.newPage();
    await page.goto('');


    await browser.close();

}
