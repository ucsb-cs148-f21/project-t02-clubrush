const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    
    const names = await page.evaluate(() => Array.from(
        document.querySelectorAll('.media-heading > a'),
        club => club.href,
    ));

    console.log(names);
    
    // const [el3] = await page.$x('//*[@id="priceblock_ourprice"]');
    // const txt2 = await el3.getProperty('textContent');
    // const price = await txt2.jsonValue();
}



scrapeProduct('https://shoreline.ucsb.edu/club_signup');