const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch();

    // init the browser
    const page = await browser.newPage();
    await page.goto('https://bangla.bdnews24.com/');

    // take respected url screenshot
    // await page.screenshot({path: 'bdnews24.png', fullPage: true});

    // take page screenshot in pdf 
    // await page.pdf({path: 'bdnews24.pdf', format: 'A4'});

    // get the all html 
    // const html = await page.content()
    // console.log(html)

    const title = await page.evaluate(() => document.title);
    console.log(title);

    // close the browser
    await browser.close();

}

run();