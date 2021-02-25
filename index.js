const path = require("path");
const readXlsxFile = require("read-excel-file/node");
const map = require("./map");
const { convertArrayToCSV } = require("convert-array-to-csv");
const csv = require("csvtojson/v2");
const fs = require("fs");

readXlsxFile(path.join(__dirname, "sheet.xlsx")).then(rows => {
	let record = convertArrayToCSV(rows, {
		map,
		separator: ",",
	});
	fs.writeFileSync(path.join(__dirname, "data.csv"), record);
	if (fs.existsSync(path.join(__dirname, "data.json")))
		fs.unlinkSync(path.join(__dirname, "data.json"), { force: true });
	csv()
		.fromFile(path.join(__dirname, "data.csv"))
		.then(jsonObj => {
			fs.appendFileSync(
				path.join(__dirname, "data.json"),
				JSON.stringify(jsonObj)
			);
		});
});
