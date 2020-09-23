const puppeteer = require("puppeteer");
const scrapeBids = require("./src/scrapeBids");
const { getWixBids, postWixBids } = require("./src/database/wixDatabase");
const filterBids = require("./src/filterBids");
const checkIfBidsPage = require("./src/checkIfBidsPage");
const getNewBidDescription = require("./src/getNewBidDescription");

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.setViewport({ width: 1366, height: 768 });

        // robot detection incognito - console.log(navigator.userAgent);
        page.setUserAgent(
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36"
        );

        let website = "https://www.caleprocure.ca.gov/pages/public-search.aspx";

        try {
            // navigate to website
            await page.goto(website, { waitUntil: "networkidle2" });
            let seeBids = "div.row.padding-vertical-lg > div:nth-child(3) > a";
            await page.waitForSelector(seeBids);
            await page.click(seeBids);

            let elementAtBottom =
                "#searchForm > div:nth-child(5) > div:nth-child(6) > div > div:nth-child(1) > div";
            await page.waitForSelector(elementAtBottom);
            await page.waitFor(15000);
            console.log("Page loaded...");

            await checkIfBidsPage(page);
        } catch (error) {
            console.log("ERROR NAVIGATING TO WEBSITE ---", error);
        }

        let scrapedBids = await scrapeBids(page);

        if (scrapedBids.length > 0) {
            console.log(`Scraped ${scrapedBids.length} bids`);

            // get wix database
            let wixBids = await getWixBids();

            let newBids = filterBids(scrapedBids, wixBids);

            console.log(`There are ${newBids.length} new bids`);

            if (newBids) {
                for (let newBid of newBids) {
                    const { urlLink } = newBid;
                    await page.goto(urlLink, { waitUntil: "networkidle2" });
                    await page.waitFor(15000);
                    const projectDescription = await getNewBidDescription(page);

                    const newBidWithDescription = {
                        ...newBid,
                        projectDescription,
                    };

                    // post to wix database
                    const newBidToJson = JSON.stringify(newBidWithDescription);
                    await postWixBids(newBidToJson);
                }
            }
        }

        // close browser
        await browser.close();
        console.log("Browser closed");
    } catch (error) {
        console.log(`INDEX.JS ERROR --- ${error}`);
    }
})();
