const puppeteer = require("puppeteer");
(async function(){
    let browser =await puppeteer.launch({
        headless : false,
        slowMo : 150,
        defaultViewport:null,
        args:["--start-maximized"]
        
    })
    let newPage = await browser.newPage();
    await newPage.goto("https://www.google.com/");
    await newPage.type(".gLFyf.gsfi","pepcoding");
    await newPage.keyboard.press("Enter");
})();