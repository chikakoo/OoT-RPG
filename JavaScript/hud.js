/**
 * The health/magic/rupees of the screen
 */

/**
 * Updates the HUD based on the current state of the game
 */
let updateHud = function() {
	updateHealth();
	updateMagic();
	updateAgeSelecter();
	updateRupees(true);
	updateItems();
	updateEquipment();
	updateSongs();
	updateMedallions();
};

/**
 * Updates the health based on the current health
 */
let updateHealth = function() {
	_updateHealthRow(1);
	_updateHealthRow(2);
	
	let intCurrentHealth = Math.floor(currentHealth);
	let divHeart;
	for (let i = 1; i <= maxHealth; i++) {
		divHeart = document.getElementById(`heart-${i}`);
		removeCssClass(divHeart, "nodisp");
		
		if (i <= intCurrentHealth) {
			addCssClass(divHeart, "full");
		} else {
			addCssClass(divHeart, "empty");
		}
		
		if (playerHasDoubleDefense()) {
			addCssClass(divHeart, "double-defense");
		}
		
		let healthDifference = currentHealth - intCurrentHealth;
		if (healthDifference > 0) {
			let divHeart = document.getElementById(`heart-${intCurrentHealth + 1}`);
			_updateHUDForPartialHealth(divHeart, healthDifference);
		}
	}
	
	Main.refreshDisplayedEvents();
};

/**
 * Updates the given row of health
 * @param row - the row to update
 */
let _updateHealthRow = function(row) {
	let divHealthRow = document.getElementById(`healthRow${row}`);
	for (let div of divHealthRow.getElementsByTagName("div")) {
		div.className = "";
		addCssClass(div, "heart");
		addCssClass(div, "nodisp");
	}
};

/**
 * Handles a heart being updated
 */
let onHeartClicked = function(event) {
	let divHeart = event.target;
	heartClicked = Number(divHeart.id.split("-")[1]);
	if (Number.isNaN(heartClicked)) { return; }
	
	if (currentHealth <= heartClicked && currentHealth >= heartClicked - 0.75) {
		_updateCurrentHealthForPartialHealth(heartClicked);
	} else {
		currentHealth = heartClicked
	}
	
	updateHealth();
};

/**
 * Updates health for quarter hearts
 * @param divHeart - the div to update
 * @param heartClicked - the heart that was clicked
 */
let _updateCurrentHealthForPartialHealth = function(heartClicked) {
	let fullHeartCount = heartClicked - 1;
	
	currentHealth -= 0.25;
	if (currentHealth === fullHeartCount) {
		currentHealth++;
	}
}

/**
 * Updates health for quarter hearts
 * @param divHeart - the div to update
 * @param heartClicked - the heart that was clicked
 */
let _updateHUDForPartialHealth = function(divHeart, partialHeart) {
	removeCssClass(divHeart, "empty");
	removeCssClass(divHeart, "one-quarter");
	removeCssClass(divHeart, "half");
	removeCssClass(divHeart, "three-quarters");
	removeCssClass(divHeart, "full");
	
	switch(partialHeart) {
		case 0.25:
			addCssClass(divHeart, "one-quarter");
			break;
		case 0.50:
			addCssClass(divHeart, "half");
			break;
		case 0.75:
			addCssClass(divHeart, "three-quarters");
			break;
	}
}

/**
 * Adds a heart
 */
let onAddHealthClicked = function(event) {
	addHeartContainer();
	updateHealth();
};

/**
 * Removes a heart
 */
let onRemoveHealthClicked = function(event) {
	removeHeartContainer();
	updateHealth();
};

/**
 * Toggles double defense
 */
let onDoubleDefenseClicked = function(event) {
	toggleDoubleDefense();
	updateHealth();
}

/**
 * Updates magic
 */
let updateMagic = function() {
	let divMagic = document.getElementById("magic");
	divMagic.className = "";
	
	switch(Upgrades.MAGIC.currentUpgrade) {
		case 1:
			addCssClass(divMagic, "magic-single");
			break;
		case 2:
			addCssClass(divMagic, "magic-double");
			break;
	}
	
	Main.refreshDisplayedEvents();
}

/**
 * Updates magic after updating it by one stage
 */
let onMagicClicked = function(event) {
	cycleUpgrade(Upgrades.MAGIC);
	updateMagic();
}

/**
 * Toggles the age, then updates the selecter
 */
let onAgeSelecterClicked = function(event) {
	toggleAge();
	updateAgeSelecter();
}

/**
 * Updates the selecter with the current age
 */
let updateAgeSelecter = function() {
	let divSelecter = document.getElementById("ageSelecter");
	removeCssClass(ageSelecter, "child");
	removeCssClass(ageSelecter, "adult");
	
	switch(currentAge) {
		case Age.CHILD:
			addCssClass(ageSelecter, "child");
			break;
		case Age.ADULT:
			addCssClass(ageSelecter, "adult");
			break;
	}
	
	Main.refreshDisplayedEvents();
}

/**
 * Updates the rupees
 * @param setFromStoredValue - sets the rupees based on the stroed value rather than the other way around
 */
let updateRupees = function(setFromStoredValue) {
	let inputRupees = document.getElementById("inputRupees");

	if (setFromStoredValue) {
		inputRupees.value = rupees;
		_updateRupeeHighlighting(inputRupees);
	} else {
		onRupeeCountUpdated({ target: inputRupees }, true);
	}
	
	updateWallet();
}

/**
 * Updates the rupees with the given amount
 */
let onRupeeCountUpdated = function(event, useTemp) {
	let inputRupees = event.target;
	if (useTemp) {
		setRupeeCount(temporaryRupees);
	} else {
		temporaryRupees = 0
		setRupeeCount(inputRupees.value);
	}

	inputRupees.value = rupees;
	_updateRupeeHighlighting(inputRupees);
	Main.refreshDisplayedEvents();
}

/**
 * Updates the green color if the player has max rupees
 * @param inputRupees - the rupee input element
 */
let _updateRupeeHighlighting = function (inputRupees) {
	removeCssClass(inputRupees, "maxRupees");
	removeCssClass(inputRupees, "noRupees");
	if (rupees === getMaxRupees()) {
		addCssClass(inputRupees, "maxRupees");
	} else if (rupees === 0) {
		addCssClass(inputRupees, "noRupees");
	}
}

/**
 * Upgrades the wallet
 */
let onWalletClicked = function(event) {
	if (temporaryRupees < rupees) { temporaryRupees = rupees; }
	
	cycleUpgrade(Upgrades.WALLET);
	updateWallet();
	updateRupees();
	
	Main.refreshDisplayedEvents();
};

/**
 * Temporary value for the amount of money in case you accidently clicked
 * the wallet
 */
let temporaryRupees = 0;

/**
 * Sets the wallet image to the current wallet
 */
let updateWallet = function() {
	let walletImage = document.getElementById("walletImage");
	let walletName = getUpgradeName(Upgrades.WALLET);
	
	walletImage.style.backgroundImage = `url("Images/${walletName}.png")`;
};

/**
 * Updates the item popup
 */
let updateItems = function() {
	let divItems = document.getElementById("itemContainer");
	_createUIFromItemObject(Item, divItems);
};

/**
 * Updates the equipment popup
 */
let updateEquipment = function() {
	let divEquipment = document.getElementById("equipmentContainer");
	_createUIFromItemObject(Equipment, divEquipment);
};

/**
 * Updates the medallions popup
 */
let updateMedallions = function() {
	let divMedallions = document.getElementById("medallionsContainer");
	_createUIFromItemObject(Medallion, divMedallions);
};

/**
 * Updates the songs popup
 */
let updateSongs = function() {
	let divSongs = document.getElementById("songsContainer");
	_createUIFromItemObject(Song, divSongs);
};

/**
 * Creates the UI from the given item object (Item/Equipment/Song/Medallion)
 * @param itemObject - the item object
 * @param divItems - the div to contain the UI
 */
let _createUIFromItemObject = function(itemObject, divItems) {
	divItems.innerHTML = "";
	Object.keys(itemObject).forEach(function(key, index) {
		let divItem = dce("div");
		let item = itemObject[key];
		divItem.id = key;
		divItem.style.backgroundImage = getItemImagePath(item);
		divItem.onclick = onItemClicked.bind(this, item, divItem);
		divItem.onmouseover = onItemMouseOver.bind(this, item);
		divItem.onmouseout = onItemMouseOut;
		
		addCssClass(divItem, "item");
		_addOpacityForUnownedItem(item, divItem);
		
		divItems.appendChild(divItem);
	});
};

/**
 * Updates the item when it is clicked
 * @param item - the item to update
 * @param divItem - the div the item is in
 */
let onItemClicked = function(item, divItem) {
	cycleUpgrade(item);
	
	divItem.style.backgroundImage = getItemImagePath(item);
	_addOpacityForUnownedItem(item, divItem);
	onItemMouseOver(item);
	
	Main.refreshDisplayedEvents();
};

/**
 * Updates the item label when an item is moused over
 * @param item - the item hovered over
 */
let onItemMouseOver = function(item) {
	let itemName = item.name;
	let displayText = itemName;
	let divItemLabel = document.getElementById("itemLabel");
	
	if (item.playerHas && item.upgrades) {
		if (item.useUpgradeAsDisplay) {
			displayText = getUpgradeName(item);
		} else {
			let upgradeText =  item.currentUpgrade > 1 ?  ` (+${item.currentUpgrade - 1})` : "";
			displayText = `${itemName}${upgradeText}`;
		}
	}
	
	removeCssClass(divItemLabel, "itemLabelDoesNotOwn");
	if (!item.playerHas) {
		addCssClass(divItemLabel, "itemLabelDoesNotOwn");
	}
	
	divItemLabel.innerText = displayText;
};

/**
 * Updates the item label when an item is moused over
 */
let onItemMouseOut = function() {
	let divItemLabel = document.getElementById("itemLabel");
	divItemLabel.innerText = "";
};

/**
 * Adds opacity for items that are not owned
 * @param item - the item
 * @param divItem - the item div
 */
let _addOpacityForUnownedItem = function(item, divItem) {
	if (!item.playerHas) {
		addCssClass(divItem, "playerDoesNotHave");
	} else {
		removeCssClass(divItem, "playerDoesNotHave");
	}
};

/**
 * Toggles the item popup when clicked
 */
let onItemButtonClicked = function(event) {
	let divItems = document.getElementById("itemContainer");
	toggleCssClass(divItems, "nodisp");
};

/**
 * Toggles the equipment popup when clicked
 */
let onEquipmentButtonClicked = function(event) {
	let divItems = document.getElementById("equipmentContainer");
	toggleCssClass(divItems, "nodisp");
};

/**
 * Toggles the songs popup when clicked
 */
let onSongsButtonClicked = function(event) {
	let divItems = document.getElementById("songsContainer");
	toggleCssClass(divItems, "nodisp");
};

/**
 * Toggles the medallions popup when clicked
 */
let onMedallionsButtonClicked = function(event) {
	let divItems = document.getElementById("medallionsContainer");
	toggleCssClass(divItems, "nodisp");
};