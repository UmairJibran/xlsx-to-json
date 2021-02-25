module.exports = {
	Campaign: {
		prop: "month",
		type: String,
	},
	Province: {
		prop: "province",
		type: String,
	},
	District: {
		prop: "district",
		type: String,
	},
	Tehsil: {
		prop: "tehsil",
		type: String,
	},
	UC: {
		prop: "uc",
		type: String,
	},
	"Area Incharge": {
		prop: "areaIncharge",
		type: String,
	},
	"Team Leader": {
		prop: "teamLeader",
		type: String,
	},
	"Team Member": {
		prop: "teamMember",
		type: String,
	},
	"Team No": {
		prop: "teamNumber",
		type: String,
	},
	Day: {
		prop: "day",
		type: Number,
	},
	TID: {
		prop: "tid",
		type: String,
	},
	"House Number": {
		prop: "houseNumber",
		type: Number,
	},
	"Child Name": {
		prop: "childName",
		type: String,
	},
	"Age(Month)": {
		prop: "ageInMonths",
		type: Number,
	},
	Address: {
		prop: "address",
		type: String,
	},
	"Contact No": {
		prop: "contactNumber",
		type: String,
	},
	Covered: {
		prop: "covered",
		type: String,
		oneOf: ["COVERED", "N"],
	},
	"Vacination Date": {
		prop: "vacinationDate",
		type: Date,
	},
	"Reason # if not covered": {
		prop: "reasonIfNotCovered",
		type: String,
	},
};
