SaveAndLoad = {
	/**
     * Saves the state of the current game by downloading a JSON file
     */
    saveJSON: function() {
        let saveFileName = "OoT RPG Save";

        let exportObj = this._getSaveObject();
        let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
        let downloadAnchorNode = document.createElement('a');

        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `${saveFileName}.json`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    },
	
	_getSaveObject() {
		return {
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
		};
	},

	/**
     * Loads a JSON file from your filesystem
     */
    loadJSON: function() {
        if (typeof window.FileReader !== 'function') {
            alert("The file API isn't supported on this browser yet.");
            return;
        }

        let input = document.getElementById('fileInput');
        if (input) { input.remove(); }

        input = dce("input", "nodisp");
        input.id = "fileInput";
        input.type = "file";
        input.onchange = this.onFileUploaded.bind(this);
        document.body.appendChild(input);

        input.click(); // Select a file
    },

    onFileUploaded: function() {
       let  input = document.getElementById('fileInput');
        if (!input) {
            alert("Um, couldn't find the fileinput element.");
        }
        else if (!input.files) {
            alert("This browser doesn't seem to support the `files` property of file inputs.");
        }
        else if (!input.files[0]) {
            alert("Please select a file before clicking 'Load'");
        }
        else {
            file = input.files[0];
            let fr = new FileReader();
            fr.onload = this._onFileLoaded.bind(this);
            fr.readAsText(file);
        }
    },

    /**
     * Called when the file is loaded
     */
    _onFileLoaded: function(event) {
        let lines = event.target.result;
        let loadedObject = JSON.parse(lines); 
    
        this.currentlyLoading = true;
        this._loadSaveFile(loadedObject);
    },

	/**
     * Loads the save file
     * @param loadedObject - the loaded file data
     */
    _loadSaveFile: function(loadedObject) {
		Item = loadedObject.Item || Item;
		Equipment = loadedObject.Equipment || Equipment;
		Upgrades = loadedObject.Upgrades || Upgrades;
		Medallion = loadedObject.Medallion || Medallion;
		Song = loadedObject.Song || Song;
		maxHealth = loadedObject.maxHealth || maxHealth;
		currentHealth = loadedObject.currentHealth || currentHealth;
		rupees = loadedObject.rupees || rupees;
		currentLocation = loadedObject.currentLocation || currentLocation;
		currentAge = loadedObject.currentAge || currentAge;
		
		Main.onPageLoad();
		alert("File loaded successfully!");
	}
};