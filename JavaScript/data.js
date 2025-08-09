/**
 * Various lists of data
 */

/**
 * A list of all difficulty levels
 */
let Level = {
	NONE: { name: "None", value: -1 },
	EASY: { name: "Easy", value: 0 },
	MILDLY_IRRITATING: { name: "Mildly Irritating", value: 1 },
	IRRITATING: { name: "Irritating", value: 2},
	ANNOYING: { name: "Annoying", value: 3},
	VERY_ANNOYING: { name: "Very Annoying", value: 4},
	EXTREME_BITCH: { name: "Extreme Bitch", value: 5 }
};

/**
 * A list of all the game's items
 * playerHas will be true if the player currently has this item
 */
let Item = {
	DEKU_STICK: { name: "Deku Stick", upgrades: [0, 10, 20, 30] },
	DEKU_NUT: { name: "Deku Nut", upgrades: [0, 20, 30, 40] },
	BOMB: { name: "Bomb", upgrades: [0, 20, 30, 40] },
	FAIRY_BOW: { name: "Fairy Bow", upgrades: [0, 30, 40, 50] },
	FIRE_ARROW: { name: "Fire Arrow" },
	DINS_FIRE: { name: "Din's Fire" } ,
	
	FAIRY_SLINGSHOT: { name: "Fairy Slingshot", upgrades: [0, 30, 40, 50] },
	OCARINA: { 
		name: "Ocarina", 
		upgrades: [ "No Ocarina", "Fairy Ocarina", "Ocarina of Time" ],
		useUpgradeAsDisplay: true
	},
	BOMBCHU: { name: "Bombchu" },
	HOOKSHOT: { 
		name: "Hookshot", 
		upgrades: [ "No Hookshot", "Hookshot", "Longshot" ],
		useUpgradeAsDisplay: true
	},
	ICE_ARROW: { name: "Ice Arrow" },
	FARORES_WIND: { name: "Farore's Wind" },
	
	BOOMERANG: { name: "Boomerang" },
	LENS_OF_TRUTH: { name: "Lens of Truth" },
	MAGIC_BEAN: { name: "Magic Bean" },
	MEGATON_HAMMER: { name: "Megaton Hammer" },
	LIGHT_ARROW: { name: "Light Arrow" },
	NAYRUS_LOVE: { name: "Nayru's Love" },
	
	BOTTLE1: { name: "Empty Bottle" },
	BOTTLE2: { name: "Empty Bottle" },
	BOTTLE3: { name: "Empty Bottle" },
	RUTOS_LETTER: { name: "Ruto's Letter" },
	TRADE_QUEST_ITEM: { name: "Trade Quest Item"},
	MASK_SLOT: { 
		name: "Mask Slot", 
		upgrades: [ "Nothing", "Zelda's Letter", "Keaton Mask", "Skull Mask", "Spooky Mask", "Bunny Hood", "Mask of Truth" ],
		useUpgradeAsDisplay: true
	}
};

/**
 * A list of all the player's equipment (swords, tunics, boots, wallet, scale)
 * playerHas will be true if the player currently has this item
 */
let Equipment = {
	KOKIRI_SWORD: { name: "Kokiri Sword" },
	BIGGORONS_SWORD: { name: "Biggoron's Sword" },
	
	GORON_TUNIC: { name: "Goron Tunic" },
	ZORA_TUNIC: { name: "Zora Tunic" },
	
	IRON_BOOTS: { name: "Iron Boots" },
	HOVER_BOOTS: { name: "Hover Boots" },
	
	DEKU_SHIELD: { name: "Deku Shield" },
	HYLIAN_SHIELD: { name: "Hylian Shield" },
	MIRROR_SHIELD: { name: "Mirror Shield" },
	
	SCALE: {
		name: "Scale",
		upgrades: ["No Scale", "Silver Scale", "Golden Scale"],
		useUpgradeAsDisplay: true
	},
	
	STRENGTH: { 
		name: "Strength", 
		upgrades: [ "No Upgrade", "Goron's Bracelet", "Silver Gauntlets", "Golden Gauntlets" ],
		useUpgradeAsDisplay: true
	},
	
	STONE_OF_AGONY: { name: "Stone of Agony" }
};

/**
 * A list of upgrades the player could have
 * playerHas will be true if the player currently has this item
 */
let Upgrades = {
	MAGIC: { name: "Magic", upgrades: [ "No Magic", "Magic", "Double Magic" ] },
	DOUBLE_DEFENSE: { name: "Double Defense" },
	WALLET: {
		name: "Wallet",
		upgrades: [ "No Wallet", "Child's Wallet", "Adult's Wallet", "Giant's Wallet"],
		currentUpgrade: 1,
		playerAlwaysHas: true,
		playerHas: true
	},
};

/**
 * All medallions and spiritual stones
 * playerHas will be true if the player currently has this item
 */
let Medallion = {
	LIGHT_MEDALLION: { name: "Light Medallion" },
	FOREST_MEDALLION: { name: "Forest Medallion" },
	FIRE_MEDALLION: { name: "Fire Medallion" },
	WATER_MEDALLION: { name: "Water Medallion" },
	SHADOW_MEDALLION: { name: "Shadow Medallion" },
	SPIRIT_MEDALLION: { name: "Spirit Medallion" },
	
	KOKIRIS_EMERALD: { name: "Kokiri's Emerald" },
	GORONS_RUBY: { name: "Goron's Ruby" },
	ZORAS_SAPPHIRE: { name: "Zora's Sapphire" }
};

/**
 * All songs
 * playerHas will be true if the player currently has this song
 */
let Song = {
	ZELDAS_LULLABY: { name: "Zelda's Lullaby" },
	EPONAS_SONG: { name: "Epona's Song" },
	SARIAS_SONG: { name: "Saria's Song" },
	SUNS_SONG: { name: "Sun's Song" },
	SONG_OF_STORMS: { name: "Song of Storms" },
	SONG_OF_TIME: { name: "Song of Time" },
	
	MINUET_OF_FOREST: { name: "Minuet of Forest" },
	BOLERO_OF_FIRE: { name: "Bolero of Fire" },
	SERENADE_OF_WATER: { name: "Serenade of Water" },
	REQUIEM_OF_SPIRIT: { name: "Requiem of Spirit" },
	NOCTURNE_OF_SHADOW: { name: "Nocturne of Shadow" },
	PRELUDE_OF_LIGHT: { name: "Prelude of Light"}
};

/**
 * The current max health value
 */
let maxHealth = 3;

/**
 * The current health value
 */
let currentHealth = 3;

/**
 * Adds a heart container
 */
let addHeartContainer = function() {
	let oldMax = maxHealth;
	setMaxHealth(maxHealth + 1);
	
	if (oldMax < maxHealth) { 
		currentHealth = maxHealth; 
	}
}

/**
 * Removes a heart container
 */
let removeHeartContainer = function() {
	setMaxHealth(maxHealth - 1);
}

/**
 * Sets the value of the max health
 * @param newMaxHealthValue - the new value to give the max health
 */
let setMaxHealth = function(newMaxHealthValue) {
	let roundedValue = Math.round(newMaxHealthValue);
	if (roundedValue < 3) { roundedValue = 3; }
	if (roundedValue > 20) { roundedValue = 20; }
	if (roundedValue < currentHealth) { currentHealth = roundedValue; }
	
	maxHealth = roundedValue;
}

/**
 * Sets the value of the current health
 * @param newHealthValue - the new value to give the current health
 */
let setCurrentHealth = function(newHealthValue) {
	let roundedValue = (Math.round(newHealthValue * 4) / 4).toFixed(2);
	if (roundedValue < 0) { roundedValue = 0; }
	if (roundedValue > maxHealth) { roundedValue = maxHealth; }
	
	currentHealth = roundedValue;
};

/**
 * Toggles the value of double defense
 */
let toggleDoubleDefense = function() {
	if (playerHasDoubleDefense()) {
		delete Upgrades.DOUBLE_DEFENSE.playerHas;
	} else {
		Upgrades.DOUBLE_DEFENSE.playerHas = true;
	}
}

/**
 * Returns whether the player has double defense
 * @param True if so; false otherwise
 */
let playerHasDoubleDefense = function() {
	return Upgrades.DOUBLE_DEFENSE.playerHas === true;
}

/**
 * The current number of rupees
 */
let rupees = 0;

/**
 * Sets the current amount of rupees - takes wallets into account
 * @param newRupeeAmount - the new amount of rupees
 */
let setRupeeCount = function(newRupeeAmount) {
	let rupeeAmount = Number(newRupeeAmount);
	if (Number.isNaN(rupeeAmount)) { rupeeAmount = 0; }
	
	let maxRupees = getMaxRupees();
	if (rupeeAmount > maxRupees) { rupeeAmount = maxRupees; }
	if (rupeeAmount < 0) { rupeeAmount = 0; }
	
	rupees = rupeeAmount;
};

/**
 * Gets the max number of rupees
 * @returns A value based on your current wallet upgrade
 */
let getMaxRupees = function() {
	switch(Upgrades.WALLET.currentUpgrade) {
		case 1:
			return 200;
		case 2:
			return 500;
		default:
			return 99;
	}
};

/**
 * Where the player currently is
 */
let Location = {
	OVERWORLD: { name: "Overworld", mainLocation: "Overworld" },
	DEKU_TREE: { name: "Deku Tree" },
	DODONGOS_CAVERN: { name: "Dodongo's Cavern" },
	JABU_JABUS_BELLY: { name: "Jabu Jabu's Belly" },
	
	FOREST_TEMPLE: { name: "Forest Temple", mainLocation: "Dungeon" },
	FIRE_TEMPLE: { name: "Fire Temple", mainLocation: "Dungeon" },
	WATER_TEMPLE: { name: "Water Temple", mainLocation: "Dungeon" },
	SHADOW_TEMPLE: { name: "Shadow Temple", mainLocation: "Dungeon" },
	SPIRIT_TEMPLE: { name: "Spirit Temple", mainLocation: "Dungeon" },
	
	BOTTOM_OF_THE_WELL: { name: "Bottom of the Well", mainLocation: "Dungeon" },
	ICE_CAVERN: { name: "Ice Cavern", mainLocation: "Dungeon" },
	TRAINING_GROUNDS: { name: "Training Grounds", mainLocation: "Dungeon" },
	GANONS_CASTLE: { name: "Ganon's Castle", mainLocation: "Dungeon" },
	
	DUNGEON: { name: "Dungeon" }
};
let currentLocation = Location.OVERWORLD;

/**
 * The player's age
 */
let Age = {
	EITHER: "Either",
	CHILD: "Child",
	ADULT: "Adult"
};
let currentAge = Age.CHILD;

/**
 * Toggles the current age
 */
let toggleAge = function() {
	if (currentAge === Age.CHILD) {
		currentAge = Age.ADULT;
	} else {
		currentAge = Age.CHILD;
	}
};

/**
 * Gets the current upgrade name of the given item
 */
let getUpgradeName = function(item) {
	let upgradeIndex = getUpgradeIndex(item);
	
	if (!item.playerHas && !item.playerAlwaysHas) {
		return "X";
	}
	
	if (upgradeIndex !== undefined && item.upgrades !== undefined && item.upgrades.length > upgradeIndex) {
		return item.upgrades[upgradeIndex];
	}
	
	return "";
}

/**
 * Gets the current upgrade index of the given item
 */
let getUpgradeIndex = function(item) {
	return item.currentUpgrade;
};

/**
 * Gets the image path of the given item
 */
let getItemImagePath = function(item) {
	let itemName = item.name;
	if (item.upgrades) {
		let itemUpgrade = getUpgradeName(item);
		return `url("Images/${itemName} ${itemUpgrade}.png")`;
	} else {
		let namePrefix = item.playerHas ? "" : " X";
		return `url("Images/${itemName}${namePrefix}.png")`;
	}
};

/**
 * Cycles the upgrade of the given item
 * @param item: The item
 */
let cycleUpgrade = function(item) {
	if (item.playerHas === undefined) { item.playerHas = false; }

	// Upgradeable items
	if (item.upgrades) {
		if (item.currentUpgrade === undefined) { 
			item.currentUpgrade = 0; 
		}
		
		item.currentUpgrade++;
		if (item.currentUpgrade > item.upgrades.length - 1) {
			item.currentUpgrade = 0;
			if (item.name === "Wallet") {
				item.currentUpgrade = 1;
			}
		}
		
		item.playerHas = item.currentUpgrade !== 0;

	// Non Upgradeable items
	} else {
		item.playerHas = !item.playerHas;
	}
};
