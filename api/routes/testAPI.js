var express = require('express');
var router = express.Router();
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
    
    return {names};
}

router.get('/', async function(req, res, next) {
    var info = await scrapeProduct('https://shoreline.ucsb.edu/club_signup');
    res.send(info);
});

module.exports = router;