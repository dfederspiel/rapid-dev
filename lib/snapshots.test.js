const puppeteer = require('puppeteer');

const deviceSpecs = {
    mobile: {
        width: 640,
        height: 960
    },
    tablet: {
        width: 768,
        height: 1024
    },
    desktop: {
        width: 1920,
        height: 1080
    }
};

const baseUrl = 'http://localhost:8080';
const pageSpecs = {
    base: {
        url: `${baseUrl}/base.html`
    },
    index: {
        url: `${baseUrl}/index.html`
    },
    articleDetail: {
        url: `${baseUrl}/article-detail.html?article=1`
    }
};

let browser;
beforeAll(async () => {
    browser = await puppeteer.launch();
    require('../index.js'); // TODO: don't do this. Instead, iimport server as a module and provide a way to stop the listener.
});

afterAll(async () => {
    await browser.close();
});

for (let page in pageSpecs) {

    let thePage = pageSpecs[page];
    describe(`the ${page} page`, () => {
        for (let spec in deviceSpecs) {

            let theSpec = deviceSpecs[spec];
            it(`for ${spec} (${theSpec.width}x${theSpec.height})`, async () => {
                const page = await browser.newPage();
                await page.setViewport({
                    width: theSpec.width,
                    height: theSpec.height,
                    deviceScaleFactor: 1
                });
                await page.goto(thePage.url);
                await page.evaluate(() => {
                    document.querySelectorAll('input').forEach((el) => { el.blur(); });
                });

                
                let image = await page.screenshot({fullPage: true }).catch(e => console.error(e));
                expect(image).toMatchImageSnapshot({
                    customSnapshotsDir: 'snapshots',
                    customDiffDir: 'snapshots/diff'
                });
            });
        }
    });
};