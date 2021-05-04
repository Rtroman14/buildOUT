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
        id: "2720",
        name: "Dept of the CA Highway Patrol",
    },
    {
        id: "2720",
        name: "Dept of the CA Highway Patrol",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "8940",
        name: "Military Department",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "840",
        name: "State Controller",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "6800",
        name: "CSU, San Francisco",
    },
    {
        id: "77601",
        name: "DGS - Statewide Procurement",
    },
    {
        id: "5160",
        name: "Department of Rehabilitation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "8940",
        name: "Military Department",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "7920",
        name: "State Teachers' Retirement Sys",
    },
    {
        id: "4250",
        name: "First 5 California",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "4300",
        name: "Dept of Developmental Services",
    },
    {
        id: "2720",
        name: "Dept of the CA Highway Patrol",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3600",
        name: "Department of Fish & Wildlife",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "3860",
        name: "Department of Water Resources",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2720",
        name: "Dept of the CA Highway Patrol",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "5420",
        name: "Prison Industry Authority",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "8955",
        name: "Dept of Veterans Affairs",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "77601",
        name: "DGS - Statewide Procurement",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "3790",
        name: "Dept of Parks & Recreation",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "6810",
        name: "CSU, San Jose",
    },
    {
        id: "8955",
        name: "Dept of Veterans Affairs",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "3900",
        name: "State Air Resources Board",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "2720",
        name: "Dept of the CA Highway Patrol",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "5180",
        name: "Department of Social Services",
    },
    {
        id: "3600",
        name: "Department of Fish & Wildlife",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "3600",
        name: "Department of Fish & Wildlife",
    },
    {
        id: "3600",
        name: "Department of Fish & Wildlife",
    },
    {
        id: "6740",
        name: "CSU, Long Beach",
    },
    {
        id: "3600",
        name: "Department of Fish & Wildlife",
    },
    {
        id: "77601",
        name: "DGS - Statewide Procurement",
    },
    {
        id: "3600",
        name: "Department of Fish & Wildlife",
    },
    {
        id: "3600",
        name: "Department of Fish & Wildlife",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "5160",
        name: "Department of Rehabilitation",
    },
    {
        id: "3600",
        name: "Department of Fish & Wildlife",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "8940",
        name: "Military Department",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "845",
        name: "Department of Insurance",
    },
    {
        id: "820",
        name: "Department of Justice",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "7350",
        name: "Dept of Industrial Relations",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "3860",
        name: "Department of Water Resources",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "3900",
        name: "State Air Resources Board",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "4300",
        name: "Dept of Developmental Services",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "2720",
        name: "Dept of the CA Highway Patrol",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "840",
        name: "State Controller",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "6240",
        name: "School for the Deaf-Fremont",
    },
    {
        id: "6240",
        name: "School for the Deaf-Fremont",
    },
    {
        id: "6200",
        name: "CA School for the Blind",
    },
    {
        id: "77601",
        name: "DGS - Statewide Procurement",
    },
    {
        id: "2720",
        name: "Dept of the CA Highway Patrol",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3860",
        name: "Department of Water Resources",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3860",
        name: "Department of Water Resources",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3790",
        name: "Dept of Parks & Recreation",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "7100",
        name: "Employment Development Dept",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "968",
        name: "Tax Credit Allocation Commitee",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "3600",
        name: "Department of Fish & Wildlife",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "6770",
        name: "Polytechnic University Pomona",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3790",
        name: "Dept of Parks & Recreation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "3600",
        name: "Department of Fish & Wildlife",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "4300",
        name: "Dept of Developmental Services",
    },
    {
        id: "4300",
        name: "Dept of Developmental Services",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "4265",
        name: "Department of Public Health",
    },
    {
        id: "3960",
        name: "Dept. Toxic Substances Control",
    },
    {
        id: "7100",
        name: "Employment Development Dept",
    },
    {
        id: "890",
        name: "Secretary of State",
    },
    {
        id: "5160",
        name: "Department of Rehabilitation",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "3720",
        name: "CA Coastal Commission",
    },
    {
        id: "77601",
        name: "DGS - Statewide Procurement",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "4300",
        name: "Dept of Developmental Services",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "4260",
        name: "State Dept Hlth Care Services",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "6240",
        name: "School for the Deaf-Fremont",
    },
    {
        id: "2720",
        name: "Dept of the CA Highway Patrol",
    },
    {
        id: "2720",
        name: "Dept of the CA Highway Patrol",
    },
    {
        id: "2720",
        name: "Dept of the CA Highway Patrol",
    },
    {
        id: "3600",
        name: "Department of Fish & Wildlife",
    },
    {
        id: "2720",
        name: "Dept of the CA Highway Patrol",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "3600",
        name: "Department of Fish & Wildlife",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "3790",
        name: "Dept of Parks & Recreation",
    },
    {
        id: "77601",
        name: "DGS - Statewide Procurement",
    },
    {
        id: "3970",
        name: "Resources Recycling & Recovery",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "690",
        name: "Office of Emergency Services",
    },
    {
        id: "820",
        name: "Department of Justice",
    },
    {
        id: "4260",
        name: "State Dept Hlth Care Services",
    },
    {
        id: "8955",
        name: "Dept of Veterans Affairs",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "4100",
        name: "Developmental Disabilities",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "SS135",
        name: "Superior Court of San Bernardi",
    },
    {
        id: "4300",
        name: "Dept of Developmental Services",
    },
    {
        id: "6790",
        name: "CSU, San Diego",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "6790",
        name: "CSU, San Diego",
    },
    {
        id: "3790",
        name: "Dept of Parks & Recreation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "820",
        name: "Department of Justice",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "820",
        name: "Department of Justice",
    },
    {
        id: "5420",
        name: "Prison Industry Authority",
    },
    {
        id: "6710",
        name: "CSU, Fullerton",
    },
    {
        id: "3820",
        name: "SF Bay Conservation Commission",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "77601",
        name: "DGS - Statewide Procurement",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "SS135",
        name: "Superior Court of San Bernardi",
    },
    {
        id: "6240",
        name: "School for the Deaf-Fremont",
    },
    {
        id: "6630",
        name: "CSU Systemwide Offices",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "6660",
        name: "CSU, San Bernardino",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2720",
        name: "Dept of the CA Highway Patrol",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "3790",
        name: "Dept of Parks & Recreation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "3600",
        name: "Department of Fish & Wildlife",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "6690",
        name: "CSU, Dominguez Hills",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3340",
        name: "CA Conservation Corps",
    },
    {
        id: "3790",
        name: "Dept of Parks & Recreation",
    },
    {
        id: "3340",
        name: "CA Conservation Corps",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3340",
        name: "CA Conservation Corps",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "6680",
        name: "CSU, Chico",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "6756",
        name: "CSU, Monterey Bay",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3860",
        name: "Department of Water Resources",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "7900",
        name: "Public Employees' Retirement",
    },
    {
        id: "521",
        name: "Sec., Transportation Agency",
    },
    {
        id: "2720",
        name: "Dept of the CA Highway Patrol",
    },
    {
        id: "3340",
        name: "CA Conservation Corps",
    },
    {
        id: "6100",
        name: "Department of Education",
    },
    {
        id: "3340",
        name: "CA Conservation Corps",
    },
    {
        id: "3790",
        name: "Dept of Parks & Recreation",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "989",
        name: "Educational Facilities Auth",
    },
    {
        id: "977",
        name: "Health Facilities Fin Auth",
    },
    {
        id: "3540",
        name: "CAL FIRE",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "3480",
        name: "Department of Conservation",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "845",
        name: "Department of Insurance",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "8955",
        name: "Dept of Veterans Affairs",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "6630",
        name: "CSU Systemwide Offices",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "6820",
        name: "Cal-Poly San Luis Obispo",
    },
    {
        id: "3860",
        name: "Department of Water Resources",
    },
    {
        id: "3860",
        name: "Department of Water Resources",
    },
    {
        id: "77601",
        name: "DGS - Statewide Procurement",
    },
    {
        id: "8855",
        name: "CA State Auditor's Office",
    },
    {
        id: "6770",
        name: "Polytechnic University Pomona",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "2740",
        name: "Department of Motor Vehicles",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "3790",
        name: "Dept of Parks & Recreation",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "650",
        name: "Office of Planning & Research",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "8570",
        name: "Dept of Food & Agriculture",
    },
    {
        id: "3790",
        name: "Dept of Parks & Recreation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "4300",
        name: "Dept of Developmental Services",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "6650",
        name: "CSU, Bakersfield",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "6780",
        name: "CSU, Sacramento",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "3100",
        name: "Exposition Park",
    },
    {
        id: "3860",
        name: "Department of Water Resources",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "8940",
        name: "Military Department",
    },
    {
        id: "4260",
        name: "State Dept Hlth Care Services",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "954",
        name: "Scholarshare Investment Board",
    },
    {
        id: "77601",
        name: "DGS - Statewide Procurement",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "8660",
        name: "Public Utilities Commission",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "6710",
        name: "CSU, Fullerton",
    },
    {
        id: "531",
        name: "Office of Systems Integration",
    },
    {
        id: "4260",
        name: "State Dept Hlth Care Services",
    },
    {
        id: "6690",
        name: "CSU, Dominguez Hills",
    },
    {
        id: "75021",
        name: "Statewide STPD",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "7501",
        name: "Department of Human Resources",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "2660",
        name: "Department of Transportation",
    },
    {
        id: "5225",
        name: "Dept of Corrections & Rehab",
    },
    {
        id: "7502",
        name: "Department of Technology",
    },
    {
        id: "7760",
        name: "Department of General Services",
    },
    {
        id: "531",
        name: "Office of Systems Integration",
    },
    {
        id: "75021",
        name: "Statewide STPD",
    },
    {
        id: "531",
        name: "Office of Systems Integration",
    },
    {
        id: "531",
        name: "Office of Systems Integration",
    },
    {
        id: "531",
        name: "Office of Systems Integration",
    },
    {
        id: "840",
        name: "State Controller",
    },
    {
        id: "7100",
        name: "Employment Development Dept",
    },
    {
        id: "4440",
        name: "Department of State Hospitals",
    },
    {
        id: "3760",
        name: "State Coastal Conservancy",
    },
    {
        id: "75021",
        name: "Statewide STPD",
    },
    {
        id: "75021",
        name: "Statewide STPD",
    },
    {
        id: "531",
        name: "Office of Systems Integration",
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
