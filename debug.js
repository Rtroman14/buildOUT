// -------------- ID IS UNDEFINDED --------------//

let departments = [
    { id: "1700", name: "Dept. Fair Employment & Housg" },
    { id: "5180", name: "Department of Social Services" },
    { id: "6511", name: "UC Davis Medical Center" },
    { id: "2660", name: "Department of Transportation" },
    { id: "4440", name: "Department of State Hospitals" },
    { id: "5160", name: "Department of Rehabilitation" },
    { id: "3600", name: "Department of Fish & Wildlife" },
    { id: "6630", name: "CSU Systemwide Offices" },
    { id: "650", name: "Office of Planning & Research" },
    { id: "2740", name: "Department of Motor Vehicles" },
    { id: "7760", name: "Department of General Services" },
    { id: "3790", name: "Dept of Parks & Recreation" },
    { id: "SS140", name: "Superior Court of San Mateo Co" },
    { id: "2240", name: "Housing & Community Developmnt" },
    { id: "5420", name: "Prison Industry Authority" },
    { id: "1111", name: "Department of Consumer Affairs" },
    { id: "4265", name: "Department of Public Health" },
    { id: "3860", name: "Department of Water Resources" },
    { id: "5225", name: "Dept of Corrections & Rehab" },
    { id: "6100", name: "Department of Education" },
    { id: "2720", name: "Dept of the CA Highway Patrol" },
    { id: "2665", name: "High Speed Rail Authority" },
    { id: "8940", name: "Military Department" },
    { id: "6780", name: "CSU, Sacramento" },
    { id: "77601", name: "DGS - Statewide Procurement" },
    { id: "8570", name: "Dept of Food & Agriculture" },
    { id: "7600", name: "Dept of Tax and Fee Admin" },
    { id: "4300", name: "Dept of Developmental Services" },
    { id: "3540", name: "Dept. Forestry & Fire Protectn" },
    { id: "968", name: "Tax Credit Allocation Commitee" },
    { id: "8120", name: "Peace Officer Standards & Trng" },
    { id: "1701", name: "Dept of Business Oversight" },
    { id: "7100", name: "Employment Development Dept" },
    { id: "690", name: "Office of Emergency Services" },
    { id: "3480", name: "Department of Conservation" },
    { id: "3105", name: "CA African American Museum" },
    { id: "8955", name: "Dept of Veterans Affairs" },
    { id: "7502", name: "Department of Technology" },
    { id: "3900", name: "State Air Resources Board" },
    { id: "SS112", name: "Superior Court of Imperial Cou" },
    { id: "6790", name: "CSU, San Diego" },
    { id: "4140", name: "Statewide Health Planning" },
    { id: "6670", name: "CSU, Stanislaus" },
    { id: "5227", name: "State & Community Corrections" },
    { id: "4260", name: "State Dept Hlth Care Services" },
    { id: "8660", name: "Public Utilities Commission" },
    { id: "7910", name: "Office of Administrative Law" },
    { id: "8260", name: "CA Arts Council" },
    { id: "531", name: "Office of Systems Integration" },
    { id: "515", name: "Bus, Consmer Svcs & Hsng Secty" },
    { id: "3760", name: "State Coastal Conservancy" },
    { id: "6240", name: "School for the Deaf-Fremont" },
    { id: "6690", name: "CSU, Dominguez Hills" },
    { id: "75021", name: "Statewide STPD" },
    { id: "SS135", name: "Superior Court of San Bernardi" },
    { id: "3930", name: "Dept of Pesticide Regulation" },
    { id: "0981", name: "California ABLE Act Board" },
    { id: "SS106", name: "Superior Court of Contra Costa" },
    { id: "3340", name: "CA Conservation Corps" },
    { id: "6730", name: "CSU, Humboldt" },
    { id: "0820", name: "Department of Justice" },
    { id: "1701", name: "Dept of Finan Protec and Innov" },
    { id: "7350", name: "Dept of Industrial Relations" },
    { id: "3970", name: "Resources Recycling & Recovery" },
    { id: "3540", name: "CAL FIRE" },
    { id: "6770", name: "Polytechnic University Pomona" },
    { id: "0840", name: "State Controller" },
    { id: "3560", name: "State Lands Commission" },
    { id: "7730", name: "Franchise Tax Board" },
    { id: "7120", name: "CA Workforce Investment Board" },
    { id: "6820", name: "Cal-Poly San Luis Obispo" },
    { id: "4150", name: "Dept of Managed Health Care" },
    { id: "0540", name: "Sec., Natural Resources" },
    { id: "7900", name: "Public Employees' Retirement" },
    { id: "6710", name: "CSU, Fullerton" },
    { id: "SS134", name: "Superior Court of San Benito C" },
    { id: "6255", name: "State Summer School for Arts" },
    { id: "6700", name: "CSU, Fresno" },
    { id: "6680", name: "CSU, Chico" },
    { id: "0530", name: "Sec., Health & Human Services" },
    { id: "7920", name: "State Teachers' Retirement Sys" },
    { id: "8140", name: "State Public Defender" },
    { id: "4250", name: "First 5 California" },
    { id: "6756", name: "CSU, Monterey Bay" },
    { id: "2320", name: "Department of Real Estate" },
    { id: "8940", name: "Military Department" },
    { id: "2100", name: "Dept. Alcoholic Beverage Cntrl" },
    { id: "0511", name: "Sec., Gov't Operations Agency" },
    { id: "6830", name: "CSU, Sonoma" },
    { id: "0559", name: "Sec., Labor/Workforce Develop" },
    { id: "4170", name: "Department of Aging" },
];

let bids = [];

let tableRowsSelector = "#datatable-ready > tbody > tr";
let tableRows = document.querySelectorAll(tableRowsSelector);

for (let tableRow of tableRows) {
    let bid = {};
    let eventName = tableRow.querySelector(".bold").innerText;

    if (true) {
        let tableCols = tableRow.querySelectorAll("td");
        let bidId = tableCols[1].innerText;
        bid.title = eventName;
        bid.category = "TRANSPORTATION";
        bid.agencyName = tableCols[3].innerText;
        bid.rfpDueDate = tableCols[4].innerText;
        let [department] = departments.filter((dept) => dept.name === bid.agencyName);
        let deptId = department.id;
        bid.urlLink = `https://www.caleprocure.ca.gov/event/${deptId}/${bidId}`;
        bids.push(bid);
    }
}
