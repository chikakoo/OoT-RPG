/**
 * The main stuffs
 */

/**
 * Leave prompt
 */
window.onbeforeunload = function() {
  return "Please make sure you save before leaving!";
};


Main = {
	/**
	 * Whether to show punishments only
	 */
	punishmentsOnly: false,

	/**
	 * The currently selected button
	 */
	_selectedButton: undefined,

	/**
	 * The currently selected difficulty
	 */
	_selectedDifficulty: undefined,

	/**
	 * Deals with inital setup
	 */
	onPageLoad: function() {
		this._setUpLocationBox();
		updateHud();
		this._updateLevelButtonLabels();
	},

	/**
	 * Sets up the location combo box
	 */
	_setUpLocationBox: function() {
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
		
		this.onLocationChanged({target: comboBoxLocations});
	},

	/**
	 * Updates the labels on the buttons
	 */
	_updateLevelButtonLabels: function() {
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
	},

	/**
	 * Changes the location when the combo box is changed
	 */
	onLocationChanged: function(event) {
		let comboBoxLocations = event.target;
		locationString = comboBoxLocations.options[comboBoxLocations.selectedIndex].value;
		document.body.style.backgroundImage = `url("Images/${locationString}.png")`
			
		for (let key in Location) {
			let location = Location[key];
			if (location.name === locationString) {
				currentLocation = location;
			}
		}
		
		this.refreshDisplayedEvents();
	},

	/**
	 * Refreshes the displayed events - useful for not having to reclick if anything changes
	 */
	refreshDisplayedEvents: function() {
		if (this._selectedDifficulty !== undefined) {
			let buttonId = `button${this._selectedDifficulty.name.replace(" ", "")}`;
			let button = document.getElementById(buttonId);
			displayEvents(this._selectedDifficulty, button);
		}
	},

	/**
	 * Handles all the button clicks
	 */
	onPunishmentToggleClicked: function(event) {
		this.punishmentsOnly = !this.punishmentsOnly;
		
		let punishmentButton = event.target;
		removeCssClass(punishmentButton, "toggled-on");
		if (this.punishmentsOnly) {
			addCssClass(punishmentButton, "toggled-on");
		}
		
		this.refreshDisplayedEvents();
	},

	onEasyClicked: function(event) {
		this._displayEvents(Level.EASY, event.target);
	},

	onMildlyIrritatingClicked: function(event) {
		this._displayEvents(Level.MILDLY_IRRITATING, event.target);
	},

	onIrritatingClicked: function(event) {
		this._displayEvents(Level.IRRITATING, event.target);
	},

	onAnnoyingClicked: function(event) {
		this._displayEvents(Level.ANNOYING, event.target);
	},

	onVeryAnnoyingClicked: function(event) {
		this._displayEvents(Level.VERY_ANNOYING, event.target);
	},

	onExtremeBitchClicked: function(event) {
		this._displayEvents(Level.EXTREME_BITCH, event.target);
	},

	/**
	 * Displays a list of events given the level to display
	 */
	_displayEvents: function(level, element) {
		_selectedDifficulty = level;
		
		// Deal with styles
		removeCssClass(this._selectedButton, "button-selected");
		this._selectedButton = element;
		addCssClass(element, "button-selected");
		
		// Grab the events
		let divEvents = document.getElementById("divEvents");
		divEvents.innerHTML = "";
		
		let events = getEventsByLevel(level);
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
	}
};