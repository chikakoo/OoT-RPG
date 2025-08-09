let onSaveLoadPopupClicked = function() {
	let objectsToSave = {
			"Item": Item,
			"Equipment": Equipment,
			"Upgrades": Upgrades,
			"Medallion": Medallion,
			"Song": Song,
			"maxHealth": maxHealth,
			"currentHealth": currentHealth,
			"rupees": rupees,
			"currentLocation": currentLocation,
			"currentAge": currentAge
		}
	let textToSave = JSON.stringify(objectsToSave);
	
	let saveLoadPopup = dce("div");
	addCssClass(saveLoadPopup, "popup");
	
	let titleLabel = dce("div");
	titleLabel.innerText = "Save the text or load state";
	addCssClass(titleLabel, "popupTitle");
	
	let textArea = dce("textArea");
	textArea.innerText = textToSave;
	
	var closeButton = dce("button");
	closeButton.innerText = "Close";
	closeButton.onclick = function() {
		document.body.removeChild(saveLoadPopup);
	};
	addCssClass(closeButton, "popupButton");
	
	var loadButton = dce("button");
	loadButton.innerText = "Load";
	loadButton.onclick = function() {
		var stringToLoad = textArea.value;
		var objectToLoad = JSON.parse(stringToLoad);
		
		Item = objectToLoad.Item || Item;
		Equipment = objectToLoad.Equipment || Equipment;
		Upgrades = objectToLoad.Upgrades || Upgrades;
		Medallion = objectToLoad.Medallion || Medallion;
		Song = objectToLoad.Song || Song;
		maxHealth = objectToLoad.maxHealth || maxHealth;
		currentHealth = objectToLoad.currentHealth || currentHealth;
		rupees = objectToLoad.rupees || rupees;
		currentLocation = objectToLoad.currentLocation || currentLocation;
		currentAge = objectToLoad.currentAge || currentAge;
		
		document.body.removeChild(saveLoadPopup);
		
		onPageLoad();
	};
	addCssClass(loadButton, "popupButton");
	
	saveLoadPopup.appendChild(titleLabel);
	saveLoadPopup.appendChild(textArea);
	saveLoadPopup.appendChild(loadButton);
	saveLoadPopup.appendChild(closeButton);
	
	document.body.appendChild(saveLoadPopup);
	
	textArea.focus();
	textArea.select();
};