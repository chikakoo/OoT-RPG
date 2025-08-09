/**
 * Represents an event - this can be any of the following:
 * - something the player must do/have before opening the chest
 * - a curse (a requirement for the player in the area they opened the chest in)
 * - a punishment (because the player messed up a curse or opened a chest illegally)
 * 
 * How to set up an event:
* - text: the text the user will see
* - isPunishment: whether this is suitable for a punishment (as in, the player messed up a curse, etc.)
* - levels: an array of difficulty levels. It will go down the list one-by one and choose the first one that
*		matches. If none match, it will not consider this event at all. Note that with all of these settings,
*		excluding it would pass that particular chest.
*		- level: The difficulty level this option would use
*			> if a Level.NONE is picked, it will immediately stop trying to pick a level
*		- items: An array of Items - the player would need every item in the array
*		- equipment: An array of Equipment - the player would need every item in the array
*		- upgrades: An array of Upgrades - the player would need every item in the array
*			> structure for all of them: { item: Item/Equipment/Upgrade.NAME, currentUpgrade: #[+/-]) }
*			> ex) [Item.BOMB] // Simply checks for bombs, no need to put it in an object
*			>     [{ item: Item.BOMB, upgradeString: "1" }] // Checks that the player is exactly on upgrade #1
*			>     [{ item: Item.BOMB, upgradeString: "1+" }] // Checks that the player is on upgrade #1 or above
*			>     [{ Item: Item.BOMB, upgradeString "1-" }] // Checks that the player is on upgrade #1 or below
*		- age: A value of Age (Age.CHILD Age.ADULT, Age.EITHER)
*		- medallions: An array of Medallions (also includes Spiritual Stones)
*		- location: A value of Location
*		- health: The health value (in increments of 0.25)
*			> 5 means exactly 5 hearts
*			> 5+ means 5 or more hearts
*			> 5- means 5 or less hearts
*			> 50%+ means 50% or more health
*			> 50%- means 50% or less health
*		- maxHealth: The max health value - behaves like health
*		- rupees: The rupee amount (depending on wallet size)
*			> The same concept applies as is listed under health
*		- songs: An array of Songs
*/

let Events = [	
	// Anywhere
	{
		text: "CURSED: No backwalking",
		isPunishment: true,
		levels: [ { level: Level.EASY } ]
	},
	{
		text: "Have less than 40 rupees",
		levels: [ { level: Level.EASY } ]
	},
	{
		text: "Take any damage",
		isPunishment: true,
		levels: [ { level: Level.EASY } ]
	},
	{
		text: "Die",
		isPunishment: true,
		levels: [ { level: Level.EASY } ]
	},
	{
		text: "Perform the ocarina items glitch",
		isPunishment: true,
		levels: [ { level: Level.EASY, items: [ Item.BOTTLE1 ] } ]
	},
	{
		text: "Kill 5 enemies",
		isPunishment: true,
		levels: [ { level: Level.EASY } ]
	},
	{
		text: "Shoot the item check with a slingshot or bow",
		levels: [ 
			{ level: Level.EASY, age: Age.CHILD, items: [ Item.FAIRY_SLINGSHOT ] },
			{ level: Level.EASY, age: Age.ADULT, items: [ Item.FAIRY_BOW ] },
			{ level: Level.ANNOYING }
		]
	},
	{
		text: "Drop your bugs or fish",
		levels: [ { level: Level.EASY, items: [ Item.BOTTLE1 ] } ]
	},
	{
		text: "Kill a skulltula",
		levels: [ { level: Level.EASY } ]
	},
	{
		text: "Perform 2 silent rolls in a row",
		isPunishment: true,
		levels: [ { level: Level.EASY } ]
	},
	{
		text: "Have max health of 5 or more",
		levels: [ { level: Level.EASY } ]
	},
	{
		text: "Perform any glitch",
		isPunishment: true,
		levels: [ { level: Level.EASY } ]
	},
	{
		text: "Perform 3 quickspins in a row",
		isPunishment: true,
		levels: [ { level: Level.EASY, age: Age.CHILD, equipment: [ Equipment.KOKIRI_SWORD ] } ],
		levels: [ { level: Level.EASY, age: Age.ADULT } ]
	},

	{
		text: "Get any other item first before opening this",
		levels: [ { level: Level.MILDLY_IRRITATING } ]
	},
	{
		text: "CURSED: You cannot use C-Down",
		isPunishment: true,
		levels: [ { level: Level.MILDLY_IRRITATING } ]
	},
	{
		text: "Fill your wallet completely",
		levels: [ 
			{ level: Level.MILDLY_IRRITATING, items: [{ item: Upgrades.WALLET, upgradeString: "0" }] },
			{ level: Level.IRRITATING, items: [{ item: Upgrades.WALLET, upgradeString: "1" }] },
			{ level: Level.ANNOYING, items: [{ item: Upgrades.WALLET, upgradeString: "2+" }] }
		]
	},
	{
		text: "Wet yourself",
		isPunishment: true,
		levels: [ { level: Level.MILDLY_IRRITATING } ]
	},
	{
		text: "Play any minigame",
		levels: [ { level: Level.MILDLY_IRRITATING } ]
	},
	{
		text: "Lose your bugs or fish",
		levels: [ { level: Level.MILDLY_IRRITATING, items: [ Item.BOTTLE1 ] } ]
	},
	{
		text: "See a timer on your screen",
		levels: [ { level: Level.MILDLY_IRRITATING } ]
	},
	{
		text: "Wear any mask",
		levels: [ { level: Level.MILDLY_IRRITATING, age: Age.CHILD } ]
	},
	{
		text: "Take fall damage",
		isPunishment: true,
		levels: [ { level: Level.MILDLY_IRRITATING } ]
	},
	
	{
		text: "Kill all enemies on the map",
		isPunishment: true,
		levels: [ { level: Level.IRRITATING } ]
	},
	{
		text: "CURSED: Every time you see an enemy, you must kill it",
		levels: [ { level: Level.IRRITATING } ]
	},
	{
		text: "Collect the cuccos",
		levels: [ { level: Level.IRRITATING } ]
	},
	{
		text: "Spawn a scarecrow",
		levels: [ { level: Level.IRRITATING, age: Age.ADULT } ]
	},
	{
		text: "Have more than 150 rupees",
		levels: [ { level: Level.IRRITATING } ]
	},
	{
		text: "Empty your wallet",
		isPunishment: true,
		levels: [ { level: Level.IRRITATING } ]
	},
	{
		text: "Have defeated any boss",
		levels: [ { level: Level.IRRITATING } ]
	},
	{
		text: "Get caught by any guard",
		levels: [ { level: Level.IRRITATING } ]
	},
	{
		text: "Burn yourself with fire damage",
		levels: [ { level: Level.IRRITATING } ]
	},
	{
		text: "Talk to the owl",
		levels: [ { level: Level.IRRITATING, age: Age.CHILD } ]
	},
	{
		text: "Talk to Mido",
		levels: [ { level: Level.IRRITATING } ]
	},
	{
		text: "Enrage the cuccos",
		levels: [ { level: Level.IRRITATING } ]
	},
	{
		text: "Get out of bounds",
		levels: [ { level: Level.IRRITATING } ]
	},
	{
		text: "CURSED: Navi cannot Z-target anything",
		levels: [ { level: Level.IRRITATING } ]
	},
	{
		text: "You must bomb the item check",
		levels: [ { level: Level.IRRITATING } ]
	},

	{
		text: "Have a Like-Like steal a shield from you",
		isPunishment: true,
		levels: [ { level: Level.ANNOYING } ]
	},
	{
		text: "CURSED: You can only roll with a D4",
		levels: [ { level: Level.ANNOYING } ]
	},
	{
		text: "Play a warp song",
		levels: [ { level: Level.ANNOYING } ]
	},
	{
		text: "Play a non-warp song",
		levels: [ { level: Level.ANNOYING } ]
	},
	{
		text: "Play any song",
		levels: [ { level: Level.ANNOYING, items: [ Item.OCARINA ] } ]
	},
	{
		text: "CURSED: To check any item, you must be at critical health",
		levels: [ { level: Level.ANNOYING } ]
	},
	{
		text: "Kill a Peehat",
		levels: [ { level: Level.ANNOYING, age: Age.CHILD } ]
	},
	{
		text: "Drink a Poe",
		levels: [ 
			{ level: Level.ANNOYING, age: Age.ADULT, items: [ Item.BOTTLE1 ] },
			{ level: Level.VERY_ANNOYING, age: Age.ADULT },
			{ level: Level.EXTREME_BITCH }
		]
	},
	{
		text: "Talk to Dampe",
		levels: [ { level: Level.ANNOYING } ]
	},
	{
		text: "Use all the consumable items of one type",
		isPunishment: true,
		levels: [ { level: Level.ANNOYING } ]
	},
	{
		text: "CURSED: You cannot move by walking forward",
		isPunishment: true,
		levels: [ { level: Level.ANNOYING } ]
	},
	{
		text: "You must burn the item check",
		levels: [ { level: Level.ANNOYING } ]
	},

	{
		text: "Exit and re-enter the map; get to the item while blindfolded",
		levels: [ { level: Level.VERY_ANNOYING } ]
	},
	{
		text: "CURSED: You can only move by rolling",
		isPunishment: true,
		levels: [ { level: Level.VERY_ANNOYING } ]
	},
	{
		text: "CURSED: You can only move by side-hopping",
		isPunishment: true,
		levels: [ { level: Level.VERY_ANNOYING } ]
	},
	{
		text: "CURSED: You can only move by backflipping",
		isPunishment: true,
		levels: [ { level: Level.VERY_ANNOYING } ]
	},
	{
		text: "Do the dampe race",
		levels: [ { level: Level.VERY_ANNOYING } ]
	},
	{
		text: "Have defeated any 3 bosses",
		levels: [ { level: Level.VERY_ANNOYING } ]
	},
	{
		text: "CURSED: No glitches allowed",
		isPunishment: true,
		levels: [ { level: Level.VERY_ANNOYING } ]
	},
	{
		text: "Have at least 40 gold skulltula tokens",
		levels: [ { level: Level.VERY_ANNOYING } ]
	},
	{
		text: "Play one of the original OoT songs",
		levels: [ { level: Level.VERY_ANNOYING } ]
	},
	{
		text: "Walk on every possible polygonal surface of the loaded area (DM can judge)",
		isPunishment: true,
		levels: [ { level: Level.VERY_ANNOYING } ]
	},
	{
		text: "Take damage in every possible way in the loaded area",
		isPunishment: true,
		levels: [ { level: Level.VERY_ANNOYING } ]
	},

	{
		text: "CURSED: Hold your controller upside down",
		isPunishment: true,
		levels: [ { level: Level.EXTREME_BITCH } ]
	},
	{
		text: "Play blindfolded until you get the next item (DM can help)",
		isPunishment: true,
		levels: [ { level: Level.EXTREME_BITCH } ]
	},
	{
		text: "CURSED: No using any item that does damage",
		isPunishment: true,
		levels: [ { level: Level.EXTREME_BITCH } ]
	},
	{
		text: "Use all your consumable items (as your current age)",
		isPunishment: true,
		levels: [ { level: Level.EXTREME_BITCH } ]
	},
	{
		text: "CURSED: To leave the map, you must break and kill everything you can",
		isPunishment: true,
		levels: [ { level: Level.EXTREME_BITCH } ]
	},
	{
		text: "You must get this item as the other age",
		levels: [ { level: Level.EXTREME_BITCH } ]
	},

	// Deku Tree specific
	{
		text: "Jump from the top floor to B1",
		isPunishment: true,
		levels: [ { level: Level.EASY, location: Location.DEKU_TREE } ],
	},
	{
		text: "Kill the Gohma Larva in B2",
		isPunishment: true,
		levels: [ { level: Level.MILDLY_IRRITATING, location: Location.DEKU_TREE } ],
	},
	{
		text: "Do the B1 skip backup",
		isPunishment: true,
		levels: [ { level: Level.IRRITATING, location: Location.DEKU_TREE } ],
	},
	
	// Dondongo's Cavern specific
	{
		text: "Buy a potion in the cavern",
		isPunishment: true,
		levels: [ 
			{ level: Level.MILDLY_IRRITATING, location: Location.DODONGOS_CAVERN, items: [ Item.RUTOS_LETTER ] },
			{ level: Level.MILDLY_IRRITATING, location: Location.DODONGOS_CAVERN, items: [ Item.BOTTLE1 ] },
			{ level: Level.ANNOYING, location: Location.DODONGOS_CAVERN },
		],
	},
	{
		text: "Burn a deku shield",
		isPunishment: true,
		levels: [ 
			{ level: Level.MILDLY_IRRITATING, location: Location.DODONGOS_CAVERN, items: [ Equipment.DEKU_SHIELD ] },
			{ level: Level.IRRITATING, location: Location.DODONGOS_CAVERN },
		],
	},
	
	// Jabu Jabu specific
	{
		text: "Stun a wiggly thing in the top room",
		levels: [ 
			{ level: Level.MILDLY_IRRITATING, location: Location.JABU_JABUS_BELLY, items: [ Item.BOOMERANG ] },
			{ level: Level.ANNOYING, location: Location.JABU_JABUS_BELLY } 
		]
	},
	{
		text: "Perform the blue switch skip",
		levels: [ 
			{ level: Level.MILDLY_IRRITATING, location: Location.JABU_JABUS_BELLY, items: [ Item.BOOMERANG ] },
			{ level: Level.ANNOYING, location: Location.JABU_JABUS_BELLY } 
		]
	},
	
	// Forest Temple specific
	{
		text: "Get crushed by the falling ceiling",
		levels: [ 
			{ level: Level.MILDLY_IRRITATING, location: Location.FOREST_TEMPLE, items: [ Item.FAIRY_BOW ] },
			{ level: Level.ANNOYING, location: Location.FOREST_TEMPLE } 
		]
	},
	{
		text: "Twist a corridor",
		levels: [ 
			{ level: Level.MILDLY_IRRITATING, location: Location.FOREST_TEMPLE, items: [ Item.FAIRY_BOW ] },
			{ level: Level.ANNOYING, location: Location.FOREST_TEMPLE } 
		]
	},
	{
		text: "Despawn the song of time block",
		levels: [ 
			{ level: Level.EASY, location: Location.FOREST_TEMPLE, songs: [ Song.SONG_OF_TIME ] },
			{ level: Level.ANNOYING, location: Location.FOREST_TEMPLE } 
		]
	},
	{
		text: "Perform the boss key skip",
		levels: [ 
			{ level: Level.EASY, location: Location.FOREST_TEMPLE, items: [ Item.HOOKSHOT ] },
			{ level: Level.ANNOYING, location: Location.FOREST_TEMPLE } 
		]
	},
	{
		text: "Travel through the well tunnel",
		levels: [ 
			{ level: Level.EASY, location: Location.FOREST_TEMPLE, age: Age.ADULT },
		]
	},
	
	// Fire Temple specific
	{
		text: "Flip a torch slug",
		levels: [ 
			{ level: Level.EASY, location: Location.FIRE_TEMPLE, items: [ Item.MEGATON_HAMMER ] },
			{ level: Level.VERY_ANNOYING, location: Location.FIRE_TEMPLE } 
		]
	},
	{
		text: "Fall from the very top room",
		isPunishment: true,
		levels: [ 
			{ level: Level.IRRITATING, location: Location.FIRE_TEMPLE, items: [ Equipment.GORON_TUNIC ] },
			{ level: Level.IRRITATING, location: Location.FIRE_TEMPLE, maxHealth: "10+" } ,
			{ level: Level.ANNOYING, location: Location.FIRE_TEMPLE, maxHealth: "5+" } ,
			{ level: Level.VERY_ANNOYING, location: Location.FIRE_TEMPLE } 
		]
	},
	{
		text: "CURSED: You cannot equip the goron tunic",
		isPunishment: true,
		levels: [ 
			{ level: Level.ANNOYING, location: Location.FIRE_TEMPLE, maxHealth: "10+" },
			{ level: Level.VERY_ANNOYING, location: Location.FIRE_TEMPLE, maxHealth: "8+" },
			{ level: Level.EXTREME_BITCH, location: Location.FIRE_TEMPLE } 
		]
	},
	
	// Water Temple specific
	{
		text: "Change the water level",
		isPunishment: true,
		levels: [ 
			{ level: Level.MILDLY_IRRITATING, location: Location.WATER_TEMPLE, songs: [ Song.ZELDAS_LULLABY ] },
			{ level: Level.ANNOYING, location: Location.WATER_TEMPLE }
		]
	},
	{
		text: "Spawn the scarecrow",
		isPunishment: true,
		levels: [ 
			{ level: Level.MILDLY_IRRITATING, location: Location.WATER_TEMPLE, items: [ Item.OCARINA ] },
			{ level: Level.MILDLY_IRRITATING, location: Location.WATER_TEMPLE, items: [ Item.BOTTLE1 ] },
			{ level: Level.ANNOYING, location: Location.WATER_TEMPLE }
		]
	},
	
	// Shadow Temple specific
	{
		text: "Void out",
		isPunishment: true,
		levels: [ 
			{ level: Level.EASY, location: Location.SHADOW_TEMPLE }
		]
	},
	{
		text: "Get caught by a Floormaster",
		isPunishment: true,
		levels: [ 
			{ level: Level.MILDLY_IRRITATING, location: Location.SHADOW_TEMPLE, items: [ Item.BOMB, Equipment.HOVER_BOOTS ] },
			{ level: Level.MILDLY_IRRITATING, location: Location.SHADOW_TEMPLE, items: [ Item.BOMBCHU, Equipment.HOVER_BOOTS ] },
			{ level: Level.IRRITATING, location: Location.SHADOW_TEMPLE, items: [ Item.BOMB ] },
			{ level: Level.IRRITATING, location: Location.SHADOW_TEMPLE, items: [ Item.BOMBCHU ] },
			{ level: Level.ANNOYING, location: Location.SHADOW_TEMPLE, items: [ Equipment.HOVER_BOOTS ] },
			{ level: Level.VERY_ANNOYING, location: Location.SHADOW_TEMPLE },
		]
	},
	{
		text: "Hook the scarecrow on the cage",
		levels: [ 
			{ 
				level: Level.MILDLY_IRRITATING, 
				location: Location.SHADOW_TEMPLE, 
				items: [ 
					{ item: Item.BOMB }, 
					{ item: Equipment.HOVER_BOOTS },
					{ item: Item.HOOKSHOT, upgradeString: 1 },
				] 
			},
			{ 
				level: Level.MILDLY_IRRITATING, 
				location: Location.SHADOW_TEMPLE, 
				items: [ 
					{ item: Item.BOMBCHU }, 
					{ item: Equipment.HOVER_BOOTS },
					{ item: Item.HOOKSHOT, upgradeString: 1 },
				] 
			},
			{ 
				level: Level.IRRITATING, 
				location: Location.SHADOW_TEMPLE, 
				items: [ 
					{ item: Item.BOMB }, 
					{ item: Item.HOOKSHOT, upgradeString: 1 },
				] 
			},
			{ 
				level: Level.IRRITATING, 
				location: Location.SHADOW_TEMPLE, 
				items: [ 
					{ item: Item.BOMBCHU }, 
					{ item: Item.HOOKSHOT, upgradeString: 1 },
				] 
			},
			{ 
				level: Level.ANNOYING, 
				location: Location.SHADOW_TEMPLE, 
				items: [ 
					{ item: Item.HOOKSHOT, upgradeString: 1 },
				] 
			},
			{ 
				level: Level.ANNOYING, 
				location: Location.SHADOW_TEMPLE, 
				items: [ Item.BOMB, Item.HOOKSHOT ] 
			},
			{ 
				level: Level.ANNOYING, 
				location: Location.SHADOW_TEMPLE, 
				items: [ Item.BOMBCHU, Item.HOOKSHOT ] 
			},
			{ 
				level: Level.VERY_ANNOYING, 
				location: Location.SHADOW_TEMPLE, 
				items: [ Item.HOOKSHOT ] 
			},
			{ 
				level: Level.VERY_ANNOYING, 
				location: Location.SHADOW_TEMPLE, 
				items: [ Item.BOMB ]
			},
			{ 
				level: Level.VERY_ANNOYING, 
				location: Location.SHADOW_TEMPLE, 
				items: [ Item.BOMBCHU ] 
			},
			{ level: Level.EXTREME_BITCH, location: Location.SHADOW_TEMPLE },
		]
	},
	
	// Spirit Temple specific
	{
		text: "Climb the wall without hookshotting",
		levels: [ 
			{ level: Level.IRRITATING, location: Location.SPIRIT_TEMPLE, age: Age.ADULT }
		]
	},
	
	// Ice Cavern specific
	{
		text: "Get frozen", 
		isPunishment: true,
		levels: [ { level: Level.EASY, location: Location.ICE_CAVERN } ]
	},
	{
		text: "Do a lap around the dungeon",
		levels: [ 
			{ level: Level.IRRITATING, location: Location.ICE_CAVERN, equipment: [ Equipment.IRON_BOOTS ] },
			{ level: Level.VERY_ANNOYING, location: Location.ICE_CAVERN }
		]
	},
	
	// Bottom of the Well specific
	{
		text: "Fall to the basement", 
		isPunishment: true,
		levels: [ { level: Level.EASY, location: Location.BOTTOM_OF_THE_WELL } ]
	},
	{
		text: "Perform the actor glitch", 
		isPunishment: true,
		levels: [ { level: Level.MILDLY_IRRITATING, location: Location.BOTTOM_OF_THE_WELL } ]
	},
	{
		text: "Perform the vine clip", 
		isPunishment: true,
		levels: [ 
			{ level: Level.MILDLY_IRRITATING, location: Location.BOTTOM_OF_THE_WELL, equipment: [ Equipment.KOKIRI_SWORD ] },
			{ level: Level.ANNOYING, location: Location.BOTTOM_OF_THE_WELL, items: [ { item: Item.DEKU_STICK, upgradeString: "1+" } ] },
			{ level: Level.VERY_ANNOYING, location: Location.BOTTOM_OF_THE_WELL } 
		]
	},
	
	// Training Grounds specific
	{
		text: "Spawn the scarecrow", 
		isPunishment: true,
		levels: [ { level: Level.EASY, location: Location.TRAINING_GROUNDS } ]
	},
	{
		text: "Spawn the song of time block", 
		levels: [
			{ level: Level.EASY, location: Location.TRAINING_GROUNDS, songs: [ Song.SONG_OF_TIME ] },
			{ level: Level.ANNOYING, location: Location.TRAINING_GROUNDS } 
		]
	},
	
	// Ganon's Castle specific
	{
		text: "Talk to a scrub in the castle", 
		isPunishment: true,
		levels: [ { level: Level.EASY, location: Location.GANONS_CASTLE } ],
	},
	{
		text: "Buy a potion in the castle", 
		isPunishment: true,
		levels: [ 
			{ level: Level.MILDLY_IRRITATING, location: Location.GANONS_CASTLE, items: [ Item.RUTOS_LETTER ] },
			{ level: Level.MILDLY_IRRITATING, location: Location.GANONS_CASTLE, items: [ Item.BOTTLE1 ] },
			{ level: Level.ANNOYING, location: Location.GANONS_CASTLE },
		],
	},
];

/**
 * Gets the list of events based on the given level
 * @param level - the level to give it
 * @param punishmentsOnly - true to only return back results that are punishments
 */
let getEventsByLevel = function(level, punishmentsOnly) {
	return _getCurrentEvents().filter(x => {
		return x.level === level && (!punishmentsOnly || x.isPunishment);
	});
}

/**
 * Gets the current list of events based on the state of the game
 * @returns A list of current event with a single "level" each
 */
let _getCurrentEvents = function() {
	return Events.map(x => {
		x.level = _getLevelForEvent(x.levels);
		return x;
	}).filter(x => {
		return x.level;
	});
};
	
/**
 * Gets a single level given a list of levels - using the current game state
 * @param levels - the list of levels
 * @returns The level to use; null if no levels work
 */
let _getLevelForEvent = function(levels) {
	for (let i = 0; i < levels.length; i++)
	{
		let levelObject = levels[i];
		if (!_checkPlayerHas(levelObject.items)) { continue; }
		if (!_checkPlayerHas(levelObject.equipment)) { continue; }
		if (!_checkPlayerHas(levelObject.upgrades)) { continue; }
		if (!_playerMatchesAge(levelObject.age)) { continue; }
		if (!_playerHasMedallions(levelObject.medallions)) { continue; }
		if (!_playerIsInLocation(levelObject.location)) { continue; }
		if (!_playerHasCorrectHealth(levelObject.health)) { continue; }
		if (!_playerHasCorrectMaxHealth(levelObject.maxHealth)) { continue; }
		if (!_playerHasCorrectRupees(levelObject.rupees)) { continue; }
		if (!_playerHasSongs(levelObject.songs)) { continue; }
		
		if (levelObject.level === Level.NONE) {
			break;
		}
		
		return levelObject.level;
	}
	
	return null;
};

/**
 * Checks for whether the player has the given list of things
 * @param items - the list of items
 * @returns True if the player does have the items; false otherwise
 */
let _checkPlayerHas = function(items) {
	// If there are no items defined, we should pass it
	if (!items || items.length < 1) { return true; }
	
	let playerHasAllItems = true;
	items.forEach(function(item) {
		let itemObject = item;
		let upgradeRange = { minimum: 0, maximum: 100 };
		
		// This if the form: 
		//   [{ item: Item.ITEM_NAME }]
		if (itemObject.item) {
			itemObject = itemObject.item;
		}
		
		// This is of the form:
		// 	[{ item: Item.ITEM_NAME, upgradeString: #[+/-] }]
		if (item.upgradeString) {
			upgradeRange = _getComparisonRange(item.upgradeString);
			let currentUpgrade = itemObject.currentUpgrade - 1;
			if (currentUpgrade === undefined || currentUpgrade < upgradeRange.minimum || currentUpgrade > upgradeRange.maximum) {
				playerHasAllItems = false;
			}
		}
		
		if (!itemObject.playerHas) { playerHasAllItems = false; }
	});
	
	return playerHasAllItems;
};

/**
 * Gets the upgrade range of a given upgrade string
 * @param upgradeString - the upgrade string
 * - give a number to exactly match the number "1"
 * - add a "+" to include all above upgrades: "1+"
 * - add a "-" to include all below upgrades: "1-"
 * - add a "%" to make it a percentage: "50%-"
 * @param baseValue - used for percentages
 * @returns An object that can be used for comparisons - has a minimum and maximum value
 */
let _getComparisonRange = function(comparisonString, baseValue) {
	if (baseValue === undefined) { baseValue = 500; }
	
	let range = { minimum: 0, maximum: 500 };
	let stringInput = String(comparisonString).trim();
	if (stringInput.length < 1) { return range}
	
	let isPercentage = stringInput.includes("%");
	let isMaximumValue = stringInput.includes("-");
	let isMinimumValue = stringInput.includes("+");
	let numericValue = Number(stringInput.match(/\d+/)[0]);
	
	if (isPercentage) {
		numericValue = numericValue / 100 * baseValue
	} 
	
	_setMinimumAndMaxmium(range, numericValue, isMinimumValue, isMaximumValue);
	return range;
};

/**
 * Sets the minimum and maxmimum values
 * @range - the range to set the values for
 * @value - the value to set it to
 * @isMinimum - whether this is a minimum value
 * @isMaxmium - whether this is a maxmium value
 */
let _setMinimumAndMaxmium = function(range, value, isMinimum, isMaxmimum) {
	if (isMaxmimum) {
		range.maximum = value;
	} else if (isMinimum) {
		range.minimum = value;
	} else {
		range.maximum = value;
		range.minimum = value;
	}
};

/**
 * Returns whether the player's current age fits the event criteria
 * @param The age in the event
 * @return True if it does; false otherwise
 */
let _playerMatchesAge = function(age) {
	switch (age) {
		case Age.CHILD:
			return currentAge === Age.CHILD;
		case Age.ADULT:
			return currentAge === Age.ADULT;
		default:
			return true;
	}
};

/**
 * Returns whether the player has the given list of medallions
 * @param The array of medallions
 * @returns True if they do; false otherwise
 */
let _playerHasMedallions = function(medallions) {
	if (medallions === undefined) { return true; }
	return medallions.every(x => x.playerHas);
};

/**
 * Returns whether the player is in the location - true if no location is given
 * @param location - the locaction
 * @returns True is they are; false otherwise
 */
let _playerIsInLocation = function(location) {
	if (location === undefined) { return true; }
	
	let locationName = location.name;
	if (currentLocation.name === locationName || currentLocation.mainLocation === locationName) {
		return true;
	}
	
	return false;
};

/**
 * Returns whether player has the correct amount of health
 * @param health - the health string
 * @returns True if they do; false otherwise
 */
let _playerHasCorrectHealth = function(health) {
	if (health === undefined) { return true; }
	
	let healthRange = _getComparisonRange(health, maxHealth);
	if (currentHealth < healthRange.minimum || currentHealth > healthRange.maximum) {
		return false;
	}
	return true;
};

/**
 * Returns whether player has the correct amount of max health
 * @param health - the health string
 * @returns True if they do; false otherwise
 */
let _playerHasCorrectMaxHealth = function(maxHealthCheck) {
	if (maxHealthCheck === undefined) { return true; }
	
	let healthRange = _getComparisonRange(maxHealthCheck);
	if (maxHealth < healthRange.minimum || maxHealth > healthRange.maximum) {
		return false;
	}
	return true;
};

/**
 * Returns whether player has the correct number of rupees
 * @param health - the rupee string
 * @returns True if they do; false otherwise
 */
let _playerHasCorrectRupees = function(rupeeString) {
	if (rupeeString === undefined) { return true; }
	
	let rupeeRange = _getComparisonRange(rupeeString, getMaxRupees());
	if (rupees < rupeeRange.minimum || rupees > rupeeRange.maximum) {
		return false;
	}
	return true;
};

/**
 * Returns whether the player has the given list of songs
 * @param The array of songs
 * @returns True if they do; false otherwise
 */
let _playerHasSongs = function(songs) {
	if (songs === undefined) { return true; }
	return songs.every(x => x.playerHas);
};
