var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');
const Club = require('../models/club');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });

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

    const categories = await page.evaluate(() => Array.from(
        document.getElementsByClassName("h5 media-heading grey-element"),
        club => club.innerText,
    ));
    
    console.log(names)
    return [names, links, images, categories];
}

router.get('/', async function(req, res, next) {
    var info = await scrapeProduct('https://shoreline.ucsb.edu/club_signup?view=all&');
    const links = info[1];
    const images = info[2];
    const names = info[0];
    const categories = info[3];
    let response = new Array(names.length);
    //  for(let i = 0; i < names.length; i++) {
    //      const newClub = new Club({
    //          name: names[i],
    //         link: links[i],
    //         image: images[i],
    //         categories: categories[i]
    //     });
    //     response[i] = newClub;
    //     const post = await newClub.save(function(err){
    //         if(err) console.log(err); 
    //     });
    //  }
    for(let i = 0; i < response.length; i++) {
        const newClub = {
            name: names[i],
            link: links[i],
            image: images[i],
            categories: categories[i]
        };
    }
    // console.log(response)
    res.json(response);
});

// async function post(){
//     var info = await scrapeProduct('https://shoreline.ucsb.edu/club_signup?view=all&');
//     const links = info[1];
//     const images = info[2];
//     const names = info[0];
//     const categories = info[3];
//      for(let i = 0; i < 26; i++) {
//          const newClub = new Club({
//              name: names[i],
//             link: links[i],
//             image: images[i],
//             categories: categories[i]
//          });
//         const post = await newClub.save(function(err){
//             if(err) console.log(err); 
//         });
//      }
//     // let response = new Array(names.length);
//     // for(let i = 0; i < response.length; i++) {
//     //     const newClub = {
//     //         name: names[i],
//     //         link: links[i],
//     //         image: images[i],
//     //         categories: categories[i]
//     //     };
//     //     response[i] = newClub;
//     // }
//     // // console.log(response)
//     // res.json(response);
// }

// (async function(){
//     await post();
//   })()
// scrapeProduct('https://shoreline.ucsb.edu/club_signup?view=all&')

module.exports = router;