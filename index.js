// DOM Elements
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

// Clean Input String
function cleanInputString(str) {
	const regex = /[+-\s]/g;
	return str.replace(regex, '');
}

// Check for Invalid String
function isInvalidInput(str) {
	const regex = /\d+e\d+/i;
	return str.match(regex);
}

// Add Entry
function addEntry() {
	const targetInputContainer = document.querySelector(
		`#${entryDropdown.value} .input-container`
	);
	const entryNumber =
		targetInputContainer.querySelectorAll('input[type="text"]').length;
	const HTMLString = `
	<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
	<input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
	<label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
	<input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories"/>`;
	targetInputContainer.innerHTML += HTMLString;
}
