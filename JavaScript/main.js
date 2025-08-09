/**
 * The main stuffs
 */

let punishmentsOnly = false;

/**
 * Deals with inital setup
 */
let onPageLoad = function() {
	_setUpLocationBox();
	updateHud();
	updateLevelButtonLabels();
};

/**
 * Sets up the location combo box
 */
let _setUpLocationBox = function() {
	let comboBoxLocations = document.getElementById("comboBoxLocations");
	for (let key in Location) {
		let location = Location[key];
		if (location.name !== "Dungeon") {
			let option = dce("option");
			let locationName = location.name;
			option.value = locationName;
			option.innerText = locationName;
			
			if (locationName === currentLocation.name) {
				option.selected = true;
			}
			comboBoxLocations.appendChild(option);
		}
	}
	
	onLocationChanged({target: comboBoxLocations});
};

/**
 * Changes the location when the combo box is changed
 */
let onLocationChanged = function(event) {
	let comboBoxLocations = event.target;
	locationString = comboBoxLocations.options[comboBoxLocations.selectedIndex].value;
	document.body.style.backgroundImage = `url("Images/${locationString}.png")`
		
	for (let key in Location) {
		let location = Location[key];
		if (location.name === locationString) {
			currentLocation = location;
		}
	}
	
	refreshDisplayedEvents();
};

/**
 * The currently selected button
 */
let _selectedButton;

/**
 * The currently selected difficulty
 */
let _selectedDifficulty;

/**
 * Updates the labels on the buttons
 */
let updateLevelButtonLabels = function() {
	let easyButton = document.getElementById("buttonEasy");
	let mildyIrritatingButton = document.getElementById("buttonMildlyIrritating");
	let irritatingButton = document.getElementById("buttonIrritating");
	let annoyingButton = document.getElementById("buttonAnnoying");
	let veryAnnoyingButton = document.getElementById("buttonVeryAnnoying");
	let extremeBitchButton = document.getElementById("buttonExtremeBitch");
	
	easyButton.innerText = Level.EASY.name;
	mildyIrritatingButton.innerText = Level.MILDLY_IRRITATING.name;
	irritatingButton.innerText = Level.IRRITATING.name;
	annoyingButton.innerText = Level.ANNOYING.name;
	veryAnnoyingButton.innerText = Level.VERY_ANNOYING.name;
	extremeBitchButton.innerText = Level.EXTREME_BITCH.name;
}

/**
 * Refreshes the displayed events - useful for not having to reclick if anything changes
 */
let refreshDisplayedEvents = function() {
	if (_selectedDifficulty !== undefined) {
		let buttonId = `button${_selectedDifficulty.name.replace(" ", "")}`;
		let button = document.getElementById(buttonId);
		displayEvents(_selectedDifficulty, button);
	}
}

/**
 * Handles all the button clicks
 */
let onPunishmentToggleClicked = function(event) {
	punishmentsOnly = !punishmentsOnly;
	
	let punishmentButton = event.target;
	removeCssClass(punishmentButton, "toggled-on");
	if (punishmentsOnly) {
		addCssClass(punishmentButton, "toggled-on");
	}
	
	refreshDisplayedEvents();
};

let onEasyClicked = function(event) {
	displayEvents(Level.EASY, event.target);
};

let onMildlyIrritatingClicked = function(event) {
	displayEvents(Level.MILDLY_IRRITATING, event.target);
};

let onIrritatingClicked = function(event) {
	displayEvents(Level.IRRITATING, event.target);
};

let onAnnoyingClicked = function(event) {
	displayEvents(Level.ANNOYING, event.target);
};

let onVeryAnnoyingClicked = function(event) {
	displayEvents(Level.VERY_ANNOYING, event.target);
};

let onExtremeBitchClicked = function(event) {
	displayEvents(Level.EXTREME_BITCH, event.target);
};

/**
 * Displays a list of events given the level to display
 */
let displayEvents = function(level, element) {
	_selectedDifficulty = level;
	
	// Deal with styles
	removeCssClass(_selectedButton, "button-selected");
	_selectedButton = element;
	addCssClass(element, "button-selected");
	
	// Grab the events
	let divEvents = document.getElementById("divEvents");
	divEvents.innerHTML = "";
	
	let events = getEventsByLevel(level, punishmentsOnly);
	if (events.length < 1) {
		let divMessage = dce("div");
		divMessage.innerText = `No results for ${level.name}`
		divEvents.appendChild(divMessage)
		return;
	}

	let eventChoices = [];
	let dmTasksAdded = false;
	for (let i = 0; i < Settings.resultsPerEvent - 2;) {
		events.shuffle();
		let eventsToUse = events.slice(0, Math.min(events.length, Settings.resultsPerEvent - 2));

		if (!dmTasksAdded) {
			eventsToUse.push(
				{
					text: "DM: Make up a task",
					level: level
				},
				{
					text: "CURSED: DM Makes up a curse",
					level: level
				}
			);
		}
		dmTasksAdded = true;
		
		for (let j = 0; j < eventsToUse.length && i < Settings.resultsPerEvent; j++, i++) {
			eventChoices.push(eventsToUse[j]);
		}
	}

	eventChoices.shuffle();
	eventChoices.forEach((event, index) => {
		let divEventNumber = dce("div");
		let divEventText = dce("div");
		let divEvent = dce("div");
		
		divEventNumber.innerText = `${index + 1}.`;
		addCssClass(divEventNumber, "eventNumber");
		divEventText.innerText = event.text;
		
		divEvent.appendChild(divEventNumber);
		divEvent.appendChild(divEventText);
		divEvents.appendChild(divEvent);
	});
};