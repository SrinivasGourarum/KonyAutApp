var bothMasterData = []; // holds full data of segment
var bothLocationData = []; // holds full data of map

// frmLocatorKA init
function locatorInit(){ 
	userAgent = kony.os.userAgent();
}

// frmLocatorKA preShow
function locatorPreShow(){  
	// setup frmLocatorKA
	//frmLocatorKA.locatorSegmentList.top = "100dp";
	frmLocatorKA.locatorListView.opacity = 0;
	frmLocatorKA.mapCalloutExample.opacity = 0;
	frmLocatorKA.noSearchResults.isVisible = true;
	addLocations();
	kony.print("preshow");
}

// frmLocatorKA postShow
function locatorPostShow(){ 
	frmLocatorKA.searchFocus.isVisible = false;
	
	// rotates "carrot" for callout template example
	var rotateCarrot = kony.ui.makeAffineTransform();
	rotateCarrot.rotate(45);
	frmLocatorKA.calloutCarrot.animate(
		kony.ui.createAnimation({"100":{"transform": rotateCarrot,"stepConfig":{"timingFunction": easeIn}}}),
		{"fillMode": forwards, "duration": 0},
		{"animationEnd": function () {}}
		);
	
		// moves current location FAB to left for Android due to built in Zoom button placement
		if (userAgent !== "iPhone" || userAgent !== "iPad") {
			frmLocatorKA.mapCurrentLocationWrapper.left = "5%";
		}

		// in case of form loading from backstack, arrays contain data already
		// so don't override it
		if(bothMasterData.length == 0 || bothLocationData.length == 0){
			bothMasterData = frmLocatorKA.locatorSegmentList.data;
			bothLocationData = frmLocatorKA.locatorMap.locationData;
		}
		kony.print("post show: bothMasterData "+ JSON.stringify(bothMasterData));
		kony.print("post show: bothLocationData"+ JSON.stringify(bothLocationData));
	}

// frmLocatorKA onHide
function locatorHide() {
	//locatorMapViewEnabled();
	frmLocatorKA.locatorSearchTextField.text = null;
	
		// android fallback due to animation not being called by
		// onHide action
		if (userAgent !== "iPhone" || userAgent !== "iPad") {
			frmLocatorKA.locatorMapView.opacity = 1;
		}
	}


// Select "Allow" on alert modal
function userAllowedLocation(){
	frmLocatorKA.noSearchResults.isVisible = false;
	frmLocatorKA.locatorSegmentList.top = "0dp";
	frmLocatorKA.locatorSegmentList.opacity = 1;
}


// frmLocatorKA frmSearchKA
//////////////////
function userStartsSearch(){
	frmLocatorKA.searchFocus.isVisible = true;
	frmLocatorKA.searchFocus.animate(
		kony.ui.createAnimation({"100":{"opacity": 1,"stepConfig":{"timingFunction": easeIn}}}),
		{"fillMode": forwards, "duration": duration},
		{"animationEnd": function () {}}
		);
	frmLocatorKA.noSearchResults.animate(
		kony.ui.createAnimation({"100":{"opacity": 0,"stepConfig":{"timingFunction": easeIn}}}),
		{"fillMode": forwards, "duration": duration},
		{"animationEnd": function () {}}
		); 
	if (userAgent === "iPhone" || userAgent === "iPad") {
		onBeginEditing(frmLocatorKA);
	}
}



function userEnteredLocationTerm(){
	frmLocatorKA.searchFocus.animate(
		kony.ui.createAnimation({"100":{"opacity": 0,"stepConfig":{"timingFunction": easeIn}}}),
		{"fillMode": forwards, "duration": duration},
		{"animationEnd": function () {}}
		); 
	frmLocatorKA.locatorSegmentList.animate(
		kony.ui.createAnimation({"100":{"top": 0, "opacity": 1, "stepConfig":{"timingFunction": easeIn}}}),
		{"fillMode": forwards, "duration": duration, "delay": 0.15},
		{"animationEnd": function () {}}
		);
	if (userAgent === "iPhone" || userAgent === "iPad") {
		onEndEditing(frmLocatorKA);
	}
}


//map callout example

function showMapCallout(){
	// closeCalloutButton is full screen overlay to disinvoke mapCallout
	// frmLocatorKA.closeCalloutButton.isVisible = true;
	// frmLocatorKA.mapCalloutExample.animate(
	// 	kony.ui.createAnimation({"100":{"opacity": 1,"stepConfig":{"timingFunction": easeIn}}}),
	// 	{"fillMode": forwards, "duration": duration},
	// 	{"animationEnd": function () {}}
	// 	); 
}

function hideMapCallout(){
	frmLocatorKA.closeCalloutButton.isVisible = false;
	frmLocatorKA.mapCalloutExample.animate(
		kony.ui.createAnimation({"100":{"opacity": 0,"stepConfig":{"timingFunction": easeIn}}}),
		{"fillMode": forwards, "duration": duration},
		{"animationEnd": function () {}}
		); 
}


// frmLocatorKA map/list toggle
function locatorToggle(){
	if (frmLocatorKA.btnMapView.skin === "btnBlueFous"){
		locatorListViewEnabled();
      	frmLocatorKA.btnMapView.skin= "btnBlueNormal";
      	frmLocatorKA.btnListView.skin= "btnBlueFous";
	} else{
		locatorMapViewEnabled();
       frmLocatorKA.btnMapView.skin= "btnBlueFous";
      	frmLocatorKA.btnListView.skin= "btnBlueNormal";
	}
}


function locatorListViewEnabled(){
	frmLocatorKA.locatorListView.isVisible = true;
	
	frmLocatorKA.locatorMapView.animate(
		kony.ui.createAnimation({100:{ "opacity": 0, "stepConfig":{"timingFunction": easeOut}}}),
		{fillMode: forwards ,duration:0.3},
		{animationEnd: function() { 
			frmLocatorKA.locatorMapView.isVisible = false;
			frmLocatorKA.locatorListView.opacity = 1;
		} 
	});
	
	frmLocatorKA.locatorToggleButton.text = "Map";
}

function locatorMapViewEnabled(){
	frmLocatorKA.locatorMapView.isVisible = true;
	
	frmLocatorKA.locatorListView.animate(
		kony.ui.createAnimation({100:{ "opacity": 0,"stepConfig":{"timingFunction": easeOut}}}),
		{fillMode: forwards ,duration:0.3},
		{animationEnd: function() {
			frmLocatorKA.locatorListView.isVisible = false;
			frmLocatorKA.locatorMapView.opacity = 1;
		} 
	});  
	
	frmLocatorKA.locatorToggleButton.text = "List";
}

function onLocatorSegmentedControllerSelected(){
	var selectedKey = frmLocatorKA.locatorSegmentedController.selectedKey;
	var data;
	switch(selectedKey){
		case 'atm': data = getFilteredData(bothMasterData, "ATM", "List");
					frmLocatorKA.locatorSegmentList.setData(data);
					frmLocatorKA.locatorMap.locationData = getFilteredData(bothLocationData, "ATM", "Map");
					break;
		case 'branch': data = getFilteredData(bothMasterData, "Branch", "List");
					   frmLocatorKA.locatorSegmentList.setData(data);
					   frmLocatorKA.locatorMap.locationData = getFilteredData(bothLocationData, "Branch", "Map");
					   break;
		case 'both': frmLocatorKA.locatorSegmentList.setData(bothMasterData);
					 frmLocatorKA.locatorMap.locationData = bothLocationData;
					 break;
	}
}

function onBothSelected(){
	frmLocatorKA.flxSelectedIndicatorKA.left = "33.33%";
	frmLocatorKA.btnBothFilterKA.skin = sknandroidSegmentedTextActive;
	frmLocatorKA.btnATMFilterKA.skin = sknandroidSegmentedTextInactive;
	frmLocatorKA.btnBranchFilterKA.skin = sknandroidSegmentedTextInactive;
	frmLocatorKA.locatorSegmentList.setData(bothMasterData);
	frmLocatorKA.locatorMap.locationData = bothLocationData;
}

function onATMSelected(){
	frmLocatorKA.flxSelectedIndicatorKA.left = "0%";
	frmLocatorKA.btnBothFilterKA.skin = sknandroidSegmentedTextInactive;
	frmLocatorKA.btnATMFilterKA.skin = sknandroidSegmentedTextActive;
	frmLocatorKA.btnBranchFilterKA.skin = sknandroidSegmentedTextInactive;
	var data = getFilteredData(bothMasterData, "ATM", "List");
	frmLocatorKA.locatorSegmentList.setData(data);
	frmLocatorKA.locatorMap.locationData = getFilteredData(bothLocationData, "ATM", "Map");
}

function onBranchSelected(){
	frmLocatorKA.flxSelectedIndicatorKA.left = "66.66%";
	frmLocatorKA.btnBothFilterKA.skin = sknandroidSegmentedTextInactive;
	frmLocatorKA.btnATMFilterKA.skin = sknandroidSegmentedTextInactive;
	frmLocatorKA.btnBranchFilterKA.skin = sknandroidSegmentedTextActive;
	var data = getFilteredData(bothMasterData, "Branch", "List");
	frmLocatorKA.locatorSegmentList.setData(data);
	frmLocatorKA.locatorMap.locationData = getFilteredData(bothLocationData, "Branch", "Map");
}

// "type" refers to list or map 
function getFilteredData(existingData, section, type){
	var data = [];
	kony.print("existingData "+JSON.stringify(existingData));
	kony.print("section "+section);
	kony.print("type "+type);
	existingData.forEach(function(item){
		var name = "";
		if(type == "List"){
			//name = item.informationListLabel.text != undefined ? item.informationListLabel.text : item.informationListLabel;
          name = String(item.type);
		} else {
			//name = item.name;
           name = String(item.type);
		}
		kony.print("txt is " + name);
		if(section == "ATM"){
			if(name.indexOf(section) > -1){
				data.push(item);
			}				
		}
		else{
			if(name.indexOf("ATM") == -1){
				data.push(item);
			}
		}
	});

	kony.print("data is "+JSON.stringify(data));

	return data;
}