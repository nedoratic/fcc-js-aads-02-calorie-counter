// DOM Elements
const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

// Clean Input String
function cleanInputString(str) {
	const regex = /[+-\s]/g;
	return str.replace(regex, "");
}

// Check for Invalid String
function isInvalidInput(str) {
	const regex = /\d+e\d+/i;
	return str.match(regex);
}

function addEntry() {}
