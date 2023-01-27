const puppeteer = require("puppeteer");

const functions = require("@google-cloud/functions-framework");

const slackNotification = require("./src/slackNotification");
const scrapeBids = require("./src/scrapeBids");
const Wix = require("./src/Wix");
const filterBids = require("./src/filterBids");
const getNewBidDescription = require("./src/getNewBidDescription");

let browserPromise = puppeteer.launch({ headless: true, args: ["--no-sandbox"] });

functions.http("buildout", async (req, res) => {
    try {
        await Wix.removeOutdatedBids(process.env.DATABASE);

        const browser = await browserPromise;
        const context = await browser.createIncognitoBrowserContext();
        const page = await context.newPage();

        await page.setViewport({ width: 1366, height: 768 });

        // robot detection incognito - console.log(navigator.userAgent);
        page.setUserAgent(
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36"
        );

        let website = "https://caleprocure.ca.gov/pages/Events-BS3/event-search.aspx";

        try {
            // navigate to website
            await page.goto(website, { waitUntil: "networkidle2" });
            let elementAtBottom =
                "#searchForm > section:nth-child(2) > div:nth-child(5) > div > div:nth-child(1)";
            await page.waitForSelector(elementAtBottom);
            await page.waitFor(20000);
            console.log("Page loaded...");
        } catch (error) {
            console.log("ERROR NAVIGATING TO WEBSITE ---", error);
        }

        let scrapedBids = await scrapeBids(page);

        try {
            if (scrapedBids.length > 0) {
                console.log(`Scraped ${scrapedBids.length} bids`);

                // get wix database
                let wixBids = await Wix.getWixBids(process.env.DATABASE);

                let newBids = filterBids(scrapedBids, wixBids);

                console.log(`There are ${newBids.length} new bids`);

                if (newBids) {
                    for (let newBid of newBids) {
                        const { urlLink } = newBid;
                        await page.goto(urlLink, { waitUntil: "networkidle2" });
                        await page.waitFor(20000);
                        const projectDescription = await getNewBidDescription(page);

                        const newBidWithDescription = {
                            ...newBid,
                            projectDescription,
                        };

                        // post to wix database
                        const newBidToJson = JSON.stringify(newBidWithDescription);
                        await Wix.postWixBids(process.env.DATABASE, newBidToJson);
                    }
                }
            }
        } catch (error) {
            console.log("PARSING SCRAPED BIDS ERROR ---", error);
        }

        // close browser
        // await browser.close();
        await context.close();
        console.log("Browser closed");

        res.status(200).send("Scraped Bids");
    } catch (error) {
        console.log(`INDEX.JS ERROR --- ${error}`);

        // notify me about this in Slack
        await slackNotification("BuildOut", `Error: ${error.message}`);

        res.status(500).send(error);
    }
});
