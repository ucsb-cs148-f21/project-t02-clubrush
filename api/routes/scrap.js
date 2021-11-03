const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const names = await page.evaluate(() => Array.from(
        document.querySelectorAll('.header-cg--h4 > a'),
        club => club.innerText,
    ));

    console.log(names);
    
    const links = await page.evaluate(() => Array.from(
        document.querySelectorAll('.header-cg--h4 > a'),
        club => club.href,
    ));

    console.log(links);
    
    // const [el3] = await page.$x('//*[@id="priceblock_ourprice"]');
    // const txt2 = await el3.getProperty('textContent');
    // const price = await txt2.jsonValue();

    const images = await page.evaluate(() => Array.from(
        document.querySelectorAll('.media-left > a > img'),
        club => club.src,
    ));

    // const [el] = await page.$x('//*[@id="landingImage"]');
    // const src = await el.getProperty('src');
    // const imageURL = await src.jsonValue();

    console.log(images);
    return names;
}



scrapeProduct('https://shoreline.ucsb.edu/club_signup');