const puppeteer = require('puppeteer');

describe("Sample Test Suite2",()=>{

    test("Test3",async ()=>{
        const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:[
                '--start-fullscreen','it-IT' // //launch chromium *
            ]});
        const page = await browser.newPage(); //create a new blank page*
        await page.setViewport({width: 1366, height: 768}); // sets the height and width of the window
        await page.goto('https://github.com/login');//* navigate url
        await page.type('input#login_field','arunk2493',{delay:100});
        await page.focus('input#password');
        await page.type('input#password','arunk2493');
        const elem =  await page.$x('//input[@type="submit"]');
        await elem[0].click();
        await page.waitForSelector('button[aria-label="Dismiss this message"]');
        const errorMsg = await page.$('.flash >div');
        const value =  await page.evaluate(n => n.innerText, errorMsg);
        console.log("The Error Message:"+value);
        reporter.description('Start Assertion')
            .epic('Login')
        reporter.startStep('Verify the Error Message');
        expect(value).toEqual('Incorrect username or password.');
        reporter.endStep();
        const screenshotBuffer = await page.screenshot('/Users/arunkumaraswamy/Documents/projects/Study/Puppeteer/JestPuppeteerAllure/screenshots/test1.png')
        reporter.addAttachment('ScreenShot',screenshotBuffer,'image/png');
        //reporter.endStep(Status.Passed);
        await page.close();
        await browser.close();
    })
    test("Test4",async ()=>{
        const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:[
                '--start-fullscreen','it-IT' // //launch chromium *
            ]});
        const page = await browser.newPage(); //create a new blank page*
        await page.setViewport({width: 1366, height: 768}); // sets the height and width of the window
        await page.goto('https://github.com/login');//* navigate url
        await page.type('input#login_field','arunk2493',{delay:100});
        await page.focus('input#password');
        await page.type('input#password','arunk2493');
        const elem =  await page.$x('//input[@type="submit"]');
        await elem[0].click();
        await page.waitForSelector('button[aria-label="Dismiss this message"]');
        const errorMsg = await page.$('.flash >div');
        const value =  await page.evaluate(n => n.innerText, errorMsg);
        console.log("The Error Message:"+value);
        //reporter.description('Start Assertion');
        expect(value).toEqual('Incorrect username or passwo');
        //reporter.endStep(Status.Passed);
        const screenshotBuffer2 = await page.screenshot('/Users/arunkumaraswamy/Documents/projects/Study/Puppeteer/JestPuppeteerAllure/screenshots/test2.png')
        reporter.addAttachment('ScreenShot2',screenshotBuffer2,'image/png');
        await page.close();
        await browser.close();

    });
})
