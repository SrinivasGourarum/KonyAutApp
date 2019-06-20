
//frm serachKA Preshow()
function loadChangeDateRange()
{
  frmSearchKA.mainContent.selectDateRange.setData(initialChangeDateRangeTypes);
}

//frm  loading for empty Image()
function changeDateRangeLoad()
{
  frmSearchKA.mainContent.selectDateRange.setData(changeDateRangeTypes);
}

// frmSearchKA preShow
function loadSearchData(){
  frmSearchKA.accountFilter1.text = account1.name;
  frmSearchKA.accountFilter2.text = account2.name;
  frmSearchKA.accountFilter3.text = account3.name;
  frmSearchKA.accountFilter4.text = account4.name;
  
  frmSearchKA.searchResults.top = "100dp";
  frmSearchKA.searchResults.opacity = 0;
   frmSearchKA.lbldaterange.opacity = 0;
   frmSearchKA.btnchangedaterange.opacity = 0;
}


function onBeginEditing(searchType) {
    searchType.backButton.animate(
        kony.ui.createAnimation({"100":{"left": "-60dp","stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration},
        {"animationEnd": function () {}}
    );
      
  searchType.searchContainer.animate(
        kony.ui.createAnimation({"100":{"left": "2%", "width" :"80%", "stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration},
        {"animationEnd": function () {}}
    );
  searchType.utilContainer.animate(
        kony.ui.createAnimation({"100":{"opacity": 0, "stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration},
        {"animationEnd": function () {}}
    );
   searchType.cancelButton.animate(
        kony.ui.createAnimation({"100":{"right":"1.5%", "stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration},
        {"animationEnd": function () {}}
    );
}

function onEndEditing(searchType) {
  searchType.backButton.animate(
      kony.ui.createAnimation({"100":{"left": "0dp","stepConfig":{"timingFunction": easeIn}}}),
      {"fillMode": forwards, "duration": duration},
      {"animationEnd": function () {}}
  );
  searchType.searchContainer.animate(
        kony.ui.createAnimation({"100":{"left": "15%", "width" :"70%", "stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration},
        {"animationEnd": function () {}}
    );
  searchType.utilContainer.animate(
        kony.ui.createAnimation({"100":{"opacity": 1, "stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration},
        {"animationEnd": function () {}}
    );
   searchType.cancelButton.animate(
        kony.ui.createAnimation({"100":{"right":"-15%", "stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration},
        {"animationEnd": function () {}}
    );
  frmSearchKA.lbldaterange.opacity = 1;
   frmSearchKA.btnchangedaterange.opacity = 1;
}




function showDateRange(){
  	frmSearchKA.mainSearch.animate(
        kony.ui.createAnimation({"100":{"left": "-100%","stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration},
        {"animationEnd": function () {}}
    );
}

function hideDateRange(){
  	frmSearchKA.mainSearch.animate(
        kony.ui.createAnimation({"100":{"left": "0%","stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration},
        {"animationEnd": function () {}}
    );
}


function userEnteredSearchTerm(){
  frmSearchKA.noSearchResults.animate(
        kony.ui.createAnimation({"100":{"opacity": 0,"stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration},
        {"animationEnd": function () {}}
    );
  frmSearchKA.searchResults.animate(
        kony.ui.createAnimation({"100":{"top": 0, "opacity": 1, "stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration, "delay": 0.15},
        {"animationEnd": function () {}}
    );
  
  onEndEditing(frmSearchKA);
}

function changeDateRangeClick()
{
  var selectedIndex =  frmSearchKA.mainContent.selectDateRange.selectedIndex;
  var boolStatus =  frmSearchKA.mainContent.selectDateRange.selectedItems[0].imgicontick.isVisible;
  var name  =  frmSearchKA.mainContent.selectDateRange.selectedItems[0].lblNameKA;
  var data= {}; 
  if(boolStatus)
  {
    data = {
      lblNameKA: name,
      imgicontick:{src:"",isVisible: false}
    };
  }

  else
  {
    data = {
      lblNameKA: name,
      imgicontick:{src:"check_blue.png",isVisible: true}
    };  
  }
  changeDateRangeLoad();
  frmSearchKA.mainContent.selectDateRange.setDataAt(data,selectedIndex[1],selectedIndex[0]);
}