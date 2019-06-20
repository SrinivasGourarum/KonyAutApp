// Account Preview/Touch ID Enabled Boolean
var accountPreviewIsEnabled = true;
var touchIdIsEnabled = false;

// to be set to true if a user selects "Account Preview" in accountPreviewRadio segment
var defaultToAccountPreview = false;



// Segment Row Actions for frmUserSettingsKA Form
function userSettingsSegmentClick(){
  userAgent = kony.os.userAgent();
  if (userAgent == "iPhone" )
    {
     var selectedRows = frmUserSettingsKA.userSettingsSegment.selectedRowIndex[1];
     var selectedSections = frmUserSettingsKA.userSettingsSegment.selectedRowIndex[0];
     switch(selectedRows){
      case 0:
          if(selectedSections === 0)
          {
            frmUserSettingsAccountPreviewKA.show(); 
          }
          else if(selectedSections === 1)
          {
           frmUserSettingsMyProfileKA.show();
          }
         else
         {
            	frmPreferredAccountsKA.ForTransfers.isVisible=true;
              frmPreferredAccountsKA.ForDeposits.isVisible=false;
              frmPreferredAccountsKA.ForPayments.isVisible=false;
              frmPreferredAccountsKA.show();
         }
        	break;
      case 1:
          if(selectedSections === 0) 
          {  
           frmDeviceDeRegistrationKA.show(); 
           
          } 
          else if(selectedSections === 1) 
          {
            frmAlertsKA.show();
          }
          else if(selectedSections === 2)
          {
              frmPreferredAccountsKA.ForTransfers.isVisible=false;
              frmPreferredAccountsKA.ForDeposits.isVisible=true;
              frmPreferredAccountsKA.ForPayments.isVisible=false;
              frmPreferredAccountsKA.show();
          }

        	break;
      case 2:
		if(selectedSections === 0) 
          {  
            frmUserSettingsPIN.show();
          } 
          
          else if(selectedSections === 2)
          {

              frmPreferredAccountsKA.ForTransfers.isVisible=false;
              frmPreferredAccountsKA.ForDeposits.isVisible=false;
              frmPreferredAccountsKA.ForPayments.isVisible=true;
              frmPreferredAccountsKA.show();
          }
          break;
       case 3:
         if(selectedSections === 0)
          {
            frmUserSettingsTouchIdKA.show();
          }
    }
   }
     else
    {
	var selectedRow = frmUserSettingsKA.userSettingsSegmentAndroid.selectedRowIndex[1];
    var selectedSection = frmUserSettingsKA.userSettingsSegmentAndroid.selectedRowIndex[0];
    switch(selectedRow){
      case 0:
          if(selectedSection === 0)
          {
             frmUserSettingsAccountPreviewKA.show();
          }
          else if(selectedSection === 1)
            {
           frmUserSettingsMyProfileKA.show();
            }
         else
         {
            frmPreferredAccountsKA.ForTransfers.isVisible=true;
              frmPreferredAccountsKA.ForDeposits.isVisible=false;
              frmPreferredAccountsKA.ForPayments.isVisible=false;
              frmPreferredAccountsKA.show();
         }
        	break;
      case 1:
          if(selectedSection === 0) 
          {  
            frmDeviceDeRegistrationKA.show();
          } 
          else if(selectedSection === 1) 
          {
            frmAlertsKA.show();
          }
          else if(selectedSection === 2)
          {
              frmPreferredAccountsKA.ForTransfers.isVisible=false;
              frmPreferredAccountsKA.ForDeposits.isVisible=true;
              frmPreferredAccountsKA.ForPayments.isVisible=false;
              frmPreferredAccountsKA.show();
          }

        	break;
      case 2 :
          if(selectedSection === 0)
          {
            frmUserSettingsPIN.show();
          }
          else if(selectedSection === 2)
          {

              frmPreferredAccountsKA.ForTransfers.isVisible=false;
              frmPreferredAccountsKA.ForDeposits.isVisible=false;
              frmPreferredAccountsKA.ForPayments.isVisible=true;
              frmPreferredAccountsKA.show();
          }
        break;
         case 3:
         if(selectedSection === 0)
          {
            frmUserSettingsTouchIdKA.show();
          }
    }}
  
}





//////////////////////////////////
/// Account Preview Settings
//////////////////////////////////

function accountPreviewPreShow(){
   if (userAgent === "iPhone" || userAgent === "iPad"){
      if (accountPreviewIsEnabled === false){
            disableAccountPreview();
            frmUserSettingsAccountPreviewKA.accountPreviewSwitch.selectedIndex = 1;
      } else if (accountPreviewIsEnabled === true){
            enableAccountPreview();
            frmUserSettingsAccountPreviewKA.accountPreviewSwitch.selectedIndex = 0;
      }
   }
}

// accountPreviewSwitch onTouchEnd
function accountPreviewSwitchOnTouchEnd() {
   if (userAgent === "iPhone" || userAgent === "iPad"){
      if(frmUserSettingsAccountPreviewKA.accountPreviewSwitch.selectedIndex === 1){
       // enableAccountPreview();
        accountPreviewIsEnabled = true;
      } else{
    //    disableAccountPreview();
        accountPreviewIsEnabled = false;
      }
  }
}

// accountPreviewCheckBox onTouchEnd
function accountPreviewCheckBoxSelectTouchEnd() {
  if(frmUserSettingsAccountPreviewKA.accountPreviewCheckBox.selectedKeys){
    // CheckBox Deselected
    disableAccountPreview();
    accountPreviewIsEnabled = false;
  } else {
    // CheckBox Selected
	enableAccountPreview();
    accountPreviewIsEnabled = true;
  }
}

function enableAccountPreview(){
  	// Account Preview accessible
  // showAccountPreviewOptions();
}

function disableAccountPreview(){
	// Account preview inaccessible 
     hideAccountPreviewOptions();
}

function showAccountPreviewOptions(){
   frmUserSettingsAccountPreviewKA.accountPreviewOptions.animate(
        kony.ui.createAnimation({100:
        	{"top": "10dp", "opacity": 1,"stepConfig":{"timingFunction": easeOut}}}),
        {fillMode: forwards ,duration:0.3},
        {animationEnd: function() {} }); 
}

function hideAccountPreviewOptions(){
   frmUserSettingsAccountPreviewKA.accountPreviewOptions.animate(
        kony.ui.createAnimation({100:
        	{"top": "-20dp", "opacity": 0, "stepConfig":{"timingFunction": easeOut}}}),
        {fillMode: forwards ,duration:0.3},
        {animationEnd: function() {} }); 
}


//////////////////////////////////
/// Touch ID Settings
//////////////////////////////////

function settingsTouchIdPreShow(){
  if (kony.store.getItem("touchIdEnable") === false){
    	frmUserSettingsTouchIdKA.touchIdSwitch.selectedIndex = 1;
  } else if (accountPreviewIsEnabled === true){
    	frmUserSettingsTouchIdKA.touchIdSwitch.selectedIndex = 0;
  }
}

function touchIdSwitchOnTouchEnd() {
  if(frmUserSettingsTouchIdKA.touchIdSwitch.selectedIndex === 1){
    kony.store.setItem("touchIdEnable",true);
    touchIdIsEnabled = true;
  } else{
    kony.store.setItem("touchIdEnable",false);
    touchIdIsEnabled = false;
  }
}


function onLoginSettingsRowClick(){
    var selectedRow = frmUserSettingsMyProfileKA.loginSettingsSegmentAndroid.selectedRowIndex[1];

    if(selectedRow == 0)  
      frmUserSettingsUsernameKA.show(); 
  else if (selectedRow == 1)
    frmUserSettingsPasswordKA.show();
  else if (selectedRow == 2)
    frmUserSettingsPersonalDetailsKA.show();
}