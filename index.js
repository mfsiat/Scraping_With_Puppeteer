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
    // const innerText = await page.evaluate(() => document.body.innerText);
    console.log(`The Title: `+title);
    // console.log(`The innerTest: `+innerText);

    // get the links from the page 
    // const links = await page.evaluate(() => 
    //     Array.from(document.querySelectorAll('a'), (e) => e.href)
    // );

    // get them out as array 
    const links = await page.evaluate(() => 
        Array.from(document.querySelectorAll('#container .F4BJV'), (e) => ({
            url: e.href,
            title: e.querySelector('F4BJV h6').innerText,
        })));

    console.log(links);

    // close the browser
    await browser.close();

}

run();