var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');
const Club = require('../models/club');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const names = await page.evaluate(() => Array.from(
        document.querySelectorAll('.header-cg--h4 > a'),
        club => club.innerText,
    ));
    
    const links = await page.evaluate(() => Array.from(
        document.querySelectorAll('.header-cg--h4 > a'),
        club => club.href,
    ));

    const images = await page.evaluate(() => Array.from(
        document.querySelectorAll('.media-left > a > img'),
        club => club.src,
    ));
    
    
    return [names, links, images];
}

router.get('/', async function(req, res, next) {
    var info = await scrapeProduct('https://shoreline.ucsb.edu/club_signup');
    const links = info[1];
    const images = info[2];
    const names = info[0];
    // for(let i = 0; i < 26; i++) {
    //     const newClub = new Club({
    //         name: names[i],
    //         link: links[i],
    //         image: images[i]
    //     });
    //     const post = await newClub.save(function(err){
    //         if(err) console.log(err); 
    //     });
    // }
    let response = new Array(26);
    for(let i = 0; i < 26; i++) {
        const newClub = {
            name: names[i],
            link: links[i],
            image: images[i]
        };
        response[i] = newClub;
    }
    // console.log(response)
    res.json(response);
});

module.exports = router;