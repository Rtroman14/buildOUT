const axios = require("axios");
const slackNotification = require("./src/slackNotification");

const { getWixBids, postWixBids, deleteWixBids } = require("./src/database/wixDatabase");
const removeOutdatedBids = require("./src/removeOutdatedBids");
const departments = require("./src/departments");

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
    // await postWixBids(newBids[0]);
    // let bids = await getWixBids();
    // console.log(bids);
    // await deleteWixBids(newBidId);
    // await removeOutdatedBids();
    // slackNotification("hello world");
})();

const newDepartments = [
    {
        id: 2660,
        name: "Department of Transportation",
    },
    {
        id: 5160,
        name: "Department of Rehabilitation",
    },
    {
        id: 7760,
        name: "Department of General Services",
    },
    {
        id: 2720,
        name: "Dept of the CA Highway Patrol",
    },
    {
        id: 5420,
        name: "Prison Industry Authority",
    },
    {
        id: 2740,
        name: "Department of Motor Vehicles",
    },
    {
        id: 3540,
        name: "CAL FIRE",
    },
    {
        id: 3790,
        name: "Dept of Parks & Recreation",
    },
    {
        id: 3860,
        name: "Department of Water Resources",
    },
    {
        id: 6250,
        name: "School for the Deaf-Riverside",
    },
    {
        id: 3970,
        name: "Resources Recycling & Recovery",
    },
    {
        id: 5225,
        name: "Dept of Corrections & Rehab",
    },
    {
        id: 820,
        name: "Department of Justice",
    },
    {
        id: 4265,
        name: "Department of Public Health",
    },
    {
        id: 3600,
        name: "Department of Fish & Wildlife",
    },
    {
        id: 7502,
        name: "Department of Technology",
    },
    {
        id: 4140,
        name: "Statewide Health Planning",
    },
    {
        id: 8955,
        name: "Dept of Veterans Affairs",
    },
    {
        id: 2320,
        name: "Department of Real Estate",
    },
    {
        id: 650,
        name: "Office of Planning & Research",
    },
    {
        id: 3960,
        name: "Dept. Toxic Substances Control",
    },
    {
        id: 4440,
        name: "Department of State Hospitals",
    },
    {
        id: 3900,
        name: "State Air Resources Board",
    },
    {
        id: 6700,
        name: "CSU, Fresno",
    },
    {
        id: 6790,
        name: "CSU, San Diego",
    },
    {
        id: 3340,
        name: "CA Conservation Corps",
    },
    {
        id: 7730,
        name: "Franchise Tax Board",
    },
    {
        id: 77601,
        name: "DGS - Statewide Procurement",
    },
    {
        id: 8660,
        name: "Public Utilities Commission",
    },
    {
        id: 690,
        name: "Office of Emergency Services",
    },
    {
        id: 531,
        name: "Office of Systems Integration",
    },
    {
        id: 6850,
        name: "CSU, Channel Islands",
    },
    {
        id: 3720,
        name: "CA Coastal Commission",
    },
    {
        id: 2665,
        name: "High Speed Rail Authority",
    },
    {
        id: 840,
        name: "State Controller",
    },
    {
        id: 845,
        name: "Department of Insurance",
    },
    {
        id: 971,
        name: "Alternative Energy & Adv Trans",
    },
    {
        id: 6820,
        name: "Cal-Poly San Luis Obispo",
    },
    {
        id: 8570,
        name: "Dept of Food & Agriculture",
    },
    {
        id: 4300,
        name: "Dept of Developmental Services",
    },
    {
        id: 6100,
        name: "Department of Education",
    },
    {
        id: 5180,
        name: "Department of Social Services",
    },
    {
        id: 3940,
        name: "State Water Resources Control",
    },
    {
        id: 6780,
        name: "CSU, Sacramento",
    },
    {
        id: 6690,
        name: "CSU, Dominguez Hills",
    },
    {
        id: 75021,
        name: "Statewide STPD",
    },
    {
        id: 7900,
        name: "Public Employees' Retirement",
    },
    {
        id: 7501,
        name: "Department of Human Resources",
    },
    {
        id: 6740,
        name: "CSU, Long Beach",
    },
    {
        id: 4260,
        name: "State Dept Hlth Care Services",
    },
    {
        id: 3760,
        name: "State Coastal Conservancy",
    },
    {
        id: 7100,
        name: "Employment Development Dept",
    },
    {
        id: "SS135",
        name: "Superior Court of San Bernardi",
    },
];

const allDepartments = [...departments, ...newDepartments];

// remove duplicates
const allDepartmentsString = new Set(allDepartments.map((e) => JSON.stringify(e)));
const allDepartmentsUnique = Array.from(allDepartmentsString).map((e) => JSON.parse(e));

// for (let i of allDepartmentsUnique) {
//     console.log(i, ",");
// }

console.log(newDepartments.length);
console.log(departments.length);
console.log(allDepartmentsUnique);

for (let dept of allDepartmentsUnique) {
    console.log(dept, ",");
}
