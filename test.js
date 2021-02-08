const axios = require("axios");
const slackNotification = require("./src/slackNotification");

const { getWixBids, postWixBids, deleteWixBids } = require("./src/database/wixDatabase");
const removeOutdatedBids = require("./src/removeOutdatedBids");

const allBids = [
    {
        title: "EXEC-OS 2020-01 ENGINEERING & ENERGY SERVICES",
        urlLink: "https://www.caleprocure.ca.gov/event/7760/0000017087",
    },
    {
        title: "Flood Management Construction Project Management Services",
        urlLink: "https://www.caleprocure.ca.gov/event/3860/10161727",
    },
    {
        title: "Quality Assurance Inspection Services",
        urlLink: "https://www.caleprocure.ca.gov/event/3860/10161565",
    },
    {
        title: "A&E Program/Project Management Services for Districts 1, 2, and 3",
        urlLink: "https://www.caleprocure.ca.gov/event/2660/03A3120",
    },
    {
        title: "20-21008 Architectural and Engineering",
        urlLink: "https://www.caleprocure.ca.gov/event/7760/0000017087",
    },
    {
        title: "NEW BID",
        urlLink: "https://www.caleprocure.ca.gov/event/7760/000000",
    },
];
const wixBids = [
    {
        title: "EXEC-OS 2020-01 ENGINEERING & ENERGY SERVICES",
        urlLink: "https://www.caleprocure.ca.gov/event/7760/0000017087",
    },
    {
        title: "Flood Management Construction Project Management Services",
        urlLink: "https://www.caleprocure.ca.gov/event/3860/10161727",
    },
    {
        title: "Quality Assurance Inspection Services",
        urlLink: "https://www.caleprocure.ca.gov/event/3860/10161565",
    },
    {
        title: "A&E Program/Project Management Services for Districts 1, 2, and 3",
        urlLink: "https://www.caleprocure.ca.gov/event/2660/03A3120",
    },
    {
        title: "20-21008 Architectural and Engineering",
        urlLink: "https://www.caleprocure.ca.gov/event/7760/0000017087",
    },
];

const newBids = [
    {
        title: "NEW BID2",
        category: "TRANSPORTATION",
        agencyName: "Housing & Community Developmnt",
        rfpDueDate: "10/04/2020  3:00PM PDT",
        urlLink: "https://www.caleprocure.ca.gov/event/2240/00000",
    },
];

(async () => {
    await postWixBids(newBids[0]);
    // let bids = await getWixBids();
    // console.log(bids);
    // await deleteWixBids(newBidId);
    // await removeOutdatedBids();
    // slackNotification("hello world");
})();
