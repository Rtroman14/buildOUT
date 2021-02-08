const fs = require("fs");
const path = require("path");
const parse = require("csv-parse");
const departments = require("../src/departments");

let inputDir = path.join(__dirname, "\\input");

const parseFiles = () => {
    fs.readdir(inputDir, (err, files) => {
        if (err) {
            console.log(`Error reading files = ${err}`);
        }

        files.forEach((file) => {
            readFile(file);
        });
    });
};

const readFile = (fileName) => {
    let csvData = [];

    fs.createReadStream(`${inputDir}/${fileName}`)
        .pipe(parse({ delimiter: "," }))
        .on("data", (dataRow) => {
            csvData.push(dataRow);
        })
        .on("end", () => {
            const parsedData = parseData(csvData);

            parsedData.forEach((data) => console.log(data));
        });
};

const parseData = (csvData) => {
    let newData = [];

    csvData.forEach((row) => {
        let department = {
            id: row[0],
            name: row[1],
        };

        newData.push(department);
    });

    const combinedDepartments = [...newData, ...departments];

    // remove duplicates
    const allDepartments = new Set(combinedDepartments.map((e) => JSON.stringify(e)));
    return Array.from(allDepartments).map((e) => JSON.parse(e));
};

parseFiles();
