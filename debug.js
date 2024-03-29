// -------------- ID IS UNDEFINDED --------------//

let departments = [
    { id: "0690", name: "Office of Emergency Services" },
    { id: "5225", name: "Dept of Corrections & Rehab" },
    { id: "77601", name: "DGS - Statewide Procurement" },
    { id: "7730", name: "Franchise Tax Board" },
    { id: "2720", name: "Dept of the CA Highway Patrol" },
    { id: "8940", name: "Military Department" },
    { id: "2660", name: "Department of Transportation" },
    { id: "1111", name: "Department of Consumer Affairs" },
    { id: "4440", name: "Department of State Hospitals" },
    { id: "3540", name: "CAL FIRE" },
    { id: "8955", name: "Dept of Veterans Affairs" },
    { id: "8660", name: "Public Utilities Commission" },
    { id: "2740", name: "Department of Motor Vehicles" },
    { id: "7760", name: "Department of General Services" },
    { id: "3600", name: "Department of Fish & Wildlife" },
    { id: "6810", name: "CSU, San Jose" },
    { id: "8570", name: "Dept of Food & Agriculture" },
    { id: "3790", name: "Dept of Parks & Recreation" },
    { id: "5420", name: "Prison Industry Authority" },
    { id: "4300", name: "Dept of Developmental Services" },
    { id: "7100", name: "Employment Development Dept" },
    { id: "5160", name: "Department of Rehabilitation" },
    { id: "0840", name: "State Controller" },
    { id: "2665", name: "High Speed Rail Authority" },
    { id: "6690", name: "CSU, Dominguez Hills" },
    { id: "6850", name: "CSU, Channel Islands" },
    { id: "SS106", name: "Superior Court of Contra Costa" },
    { id: "6740", name: "CSU, Long Beach" },
    { id: "6790", name: "CSU, San Diego" },
    { id: "3480", name: "Department of Conservation" },
    { id: "3860", name: "Department of Water Resources" },
    { id: "0820", name: "Department of Justice" },
    { id: "7350", name: "Dept of Industrial Relations" },
    { id: "5180", name: "Department of Social Services" },
    { id: "7920", name: "State Teachers' Retirement Sys" },
    { id: "5175", name: "Dept of Child Support Services" },
    { id: "6530", name: "UCLA" },
    { id: "6820", name: "Cal-Poly San Luis Obispo" },
    { id: "6680", name: "CSU, Chico" },
    { id: "0911", name: "Citizens Redistricting Comm." },
    { id: "SS135", name: "Superior Court of San Bernardi" },
    { id: "6630", name: "CSU Systemwide Offices" },
    { id: "3760", name: "State Coastal Conservancy" },
    { id: "6240", name: "School for the Deaf-Fremont" },
    { id: "0515", name: "Bus, Consmer Svcs & Hsng Secty" },
    { id: "3940", name: "State Water Resources Control" },
    { id: "6730", name: "CSU, Humboldt" },
    { id: "5227", name: "State & Community Corrections" },
    { id: "7900", name: "Public Employees' Retirement" },
    { id: "6756", name: "CSU, Monterey Bay" },
    { id: "3825", name: "San Gabriel & Lower LA Rivers" },
    { id: "75021", name: "Statewide STPD" },
    { id: "7501", name: "Department of Human Resources" },
    { id: "3360", name: "Energy Resources Conservation" },
    { id: "3900", name: "State Air Resources Board" },
    { id: "6770", name: "Polytechnic University Pomona" },
    { id: "0531", name: "Office of Systems Integration" },
    { id: "1700", name: "Dept. Fair Employment & Housg" },
    { id: "6511", name: "UC Davis Medical Center" },
    { id: "650", name: "Office of Planning & Research" },
    { id: "SS140", name: "Superior Court of San Mateo Co" },
    { id: "2240", name: "Housing & Community Developmnt" },
    { id: "4265", name: "Department of Public Health" },
    { id: "6100", name: "Department of Education" },
    { id: "6780", name: "CSU, Sacramento" },
    { id: "7600", name: "Dept of Tax and Fee Admin" },
    { id: "3540", name: "Dept. Forestry & Fire Protectn" },
    { id: "968", name: "Tax Credit Allocation Commitee" },
    { id: "8120", name: "Peace Officer Standards & Trng" },
    { id: "1701", name: "Dept of Business Oversight" },
    { id: "690", name: "Office of Emergency Services" },
    { id: "3105", name: "CA African American Museum" },
    { id: "7502", name: "Department of Technology" },
    { id: "SS112", name: "Superior Court of Imperial Cou" },
    { id: "4140", name: "Statewide Health Planning" },
    { id: "6670", name: "CSU, Stanislaus" },
    { id: "4260", name: "State Dept Hlth Care Services" },
    { id: "7910", name: "Office of Administrative Law" },
    { id: "8260", name: "CA Arts Council" },
    { id: "531", name: "Office of Systems Integration" },
    { id: "515", name: "Bus, Consmer Svcs & Hsng Secty" },
    { id: "3930", name: "Dept of Pesticide Regulation" },
    { id: "0981", name: "California ABLE Act Board" },
    { id: "3340", name: "CA Conservation Corps" },
    { id: "1701", name: "Dept of Finan Protec and Innov" },
    { id: "3970", name: "Resources Recycling & Recovery" },
    { id: "3560", name: "State Lands Commission" },
    { id: "7120", name: "CA Workforce Investment Board" },
    { id: "4150", name: "Dept of Managed Health Care" },
    { id: "0540", name: "Sec., Natural Resources" },
    { id: "6710", name: "CSU, Fullerton" },
    { id: "SS134", name: "Superior Court of San Benito C" },
    { id: "6255", name: "State Summer School for Arts" },
    { id: "6700", name: "CSU, Fresno" },
    { id: "0530", name: "Sec., Health & Human Services" },
    { id: "8140", name: "State Public Defender" },
    { id: "4250", name: "First 5 California" },
    { id: "2320", name: "Department of Real Estate" },
    { id: "2100", name: "Dept. Alcoholic Beverage Cntrl" },
    { id: "0511", name: "Sec., Gov't Operations Agency" },
    { id: "6830", name: "CSU, Sonoma" },
    { id: "0559", name: "Sec., Labor/Workforce Develop" },
    { id: "4170", name: "Department of Aging" },
    { id: "0845", name: "Department of Insurance" },
    { id: "0954", name: "Scholarshare Investment Board" },
    { id: "3100", name: "Exposition Park" },
    { id: "4100", name: "Developmental Disabilities" },
    { id: "6200", name: "CA School for the Blind" },
    { id: "6250", name: "School for the Deaf-Riverside" },
    { id: "840", name: "State Controller" },
    { id: "6800", name: "CSU, San Francisco" },
    { id: "845", name: "Department of Insurance" },
    { id: "820", name: "Department of Justice" },
    { id: "3960", name: "Dept. Toxic Substances Control" },
    { id: "890", name: "Secretary of State" },
    { id: "3720", name: "CA Coastal Commission" },
    { id: "3820", name: "SF Bay Conservation Commission" },
    { id: "6660", name: "CSU, San Bernardino" },
    { id: "521", name: "Sec., Transportation Agency" },
    { id: "989", name: "Educational Facilities Auth" },
    { id: "977", name: "Health Facilities Fin Auth" },
    { id: "8855", name: "CA State Auditor's Office" },
    { id: "6650", name: "CSU, Bakersfield" },
    { id: "954", name: "Scholarshare Investment Board" },
    { id: "8780", name: '"Little Hoover" Commission' },
    { id: "6760", name: "CSU, Northridge" },
    { id: "2660", name: "Department of Transportation" },
    { id: "5160", name: "Department of Rehabilitation" },
    { id: "7760", name: "Department of General Services" },
    { id: "2720", name: "Dept of the CA Highway Patrol" },
    { id: "5420", name: "Prison Industry Authority" },
    { id: "2740", name: "Department of Motor Vehicles" },
    { id: "3540", name: "CAL FIRE" },
    { id: "3790", name: "Dept of Parks & Recreation" },
    { id: "3860", name: "Department of Water Resources" },
    { id: "6250", name: "School for the Deaf-Riverside" },
    { id: "3970", name: "Resources Recycling & Recovery" },
    { id: "5225", name: "Dept of Corrections & Rehab" },
    { id: "820", name: "Department of Justice" },
    { id: "4265", name: "Department of Public Health" },
    { id: "3600", name: "Department of Fish & Wildlife" },
    { id: "7502", name: "Department of Technology" },
    { id: "4140", name: "Statewide Health Planning" },
    { id: "8955", name: "Dept of Veterans Affairs" },
    { id: "2320", name: "Department of Real Estate" },
    { id: "650", name: "Office of Planning & Research" },
    { id: "3960", name: "Dept. Toxic Substances Control" },
    { id: "4440", name: "Department of State Hospitals" },
    { id: "3900", name: "State Air Resources Board" },
    { id: "6700", name: "CSU, Fresno" },
    { id: "6790", name: "CSU, San Diego" },
    { id: "3340", name: "CA Conservation Corps" },
    { id: "7730", name: "Franchise Tax Board" },
    { id: "77601", name: "DGS - Statewide Procurement" },
    { id: "8660", name: "Public Utilities Commission" },
    { id: "690", name: "Office of Emergency Services" },
    { id: "531", name: "Office of Systems Integration" },
    { id: "6850", name: "CSU, Channel Islands" },
    { id: "3720", name: "CA Coastal Commission" },
    { id: "2665", name: "High Speed Rail Authority" },
    { id: "840", name: "State Controller" },
    { id: "845", name: "Department of Insurance" },
    { id: "971", name: "Alternative Energy & Adv Trans" },
    { id: "6820", name: "Cal-Poly San Luis Obispo" },
    { id: "8570", name: "Dept of Food & Agriculture" },
    { id: "4300", name: "Dept of Developmental Services" },
    { id: "6100", name: "Department of Education" },
    { id: "5180", name: "Department of Social Services" },
    { id: "3940", name: "State Water Resources Control" },
    { id: "6780", name: "CSU, Sacramento" },
    { id: "6690", name: "CSU, Dominguez Hills" },
    { id: "75021", name: "Statewide STPD" },
    { id: "7900", name: "Public Employees' Retirement" },
    { id: "7501", name: "Department of Human Resources" },
    { id: "6740", name: "CSU, Long Beach" },
    { id: "4260", name: "State Dept Hlth Care Services" },
    { id: "3760", name: "State Coastal Conservancy" },
    { id: "7100", name: "Employment Development Dept" },
    { id: "8560", name: "CA Exposition & State Fair" },
    { id: "77601", name: "DGS - Statewide Procurement" },
    { id: "3980", name: "Env'l Health Hazard Assessment" },
    { id: "2670", name: "Board of Pilot Commissioners" },
    { id: "1115", name: "Department of Cannabis Control" },
    { id: "6260", name: "Diagnostic Centers" },
    { id: "SS246", name: "32nd DAA -Costa Mesa" },
    { id: "6870", name: "Community Colleges-Bd of Gov" },
    { id: "4170", name: "California Department of Aging" },
    { id: "3640", name: "Wildlife Conservation Board" },
    { id: "0984", name: "CalSavers Retirement Savings B" },
    { id: "7870", name: "Victim Compensation Board, CA" },
    { id: "0509", name: "Business & Economic Developmnt" },
    { id: "3125", name: "CA Tahoe Conservancy" },
    { id: "0850", name: "CA State Lottery Commission" },
    { id: "6580", name: "UC Santa Cruz" },
    { id: "4560", name: "Mental Health Srvcs Oversight" },
    { id: "2600", name: "CA Transportation Commission" },
    { id: "SS114", name: "Superior Court of Kern County" },
    { id: "0555", name: "Sec., Environment Protection" },
    { id: "6750", name: "CSU, Los Angeles" },
    { id: "3830", name: "San Joaquin River Conservancy" },
    { id: "6720", name: "CSU, East Bay" },
    { id: "SS247", name: "22nd DAA" },
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
