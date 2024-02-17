const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isError = false;
const cleanInputString = function (str) {
  const strArray = str.split("");
  const cleanStrArray = [];
  for (let i = 0; i < strArray.length; i++) {
    if (!["+", "-", ""].includes(strArray[i])) {
      cleanInputString.push(strArray[i]);
    }
  }
};

const cleanInputStringg = function (str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
};

const isInvalidInput = function (str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
};

const addEntry = function () {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"/>
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input type="number" min="0" placeholder="Calories" id="{entryDropdown.value}-${entryNumber}-calories"/>
  `;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
};

addEntryButton.addEventListener("click", addEntry);

const getCaloriesFromInputs = function (list) {};
