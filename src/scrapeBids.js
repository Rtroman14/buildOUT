const slackNotification = require("./slackNotification");

const keywords = require("../keyWords");
const departments = require("../src/departments");

module.exports = async (page) => {
    try {
        let scrapedBids = await page.evaluate(
            (keywords, departments) => {
                const re = new RegExp(keywords, "i");
                let bids = [];

                const tableRowsSelector = "#datatable-ready > tbody > tr";
                const tableRows = document.querySelectorAll(tableRowsSelector);

                for (let tableRow of tableRows) {
                    let bid = {};
                    let eventName = tableRow.querySelector(".bold").innerText;

                    if (re.test(eventName)) {
                        let tableCols = tableRow.querySelectorAll("td");
                        let bidId = tableCols[1].innerText;
                        bid.title = eventName;
                        // bid.category = "TRANSPORTATION";
                        bid.agencyName = tableCols[3].innerText;
                        bid.rfpDueDate = tableCols[4].innerText;
                        let [department] = departments.filter(
                            (dept) => dept.name === bid.agencyName
                        );
                        let deptId = department.id;
                        bid.urlLink = `https://www.caleprocure.ca.gov/event/${deptId}/${bidId}`;
                        bids.push(bid);
                    }
                }
                return bids;
            },
            keywords,
            departments
        );
        // console.log({ scrapedBids });

        return scrapedBids;
    } catch (error) {
        console.log("SCRAPEBIDS ERROR ---", error);

        // notify me about this in Slack
        await slackNotification("BuildOut", "scrapeBids.js Error. Add more departments.");
    }
};
