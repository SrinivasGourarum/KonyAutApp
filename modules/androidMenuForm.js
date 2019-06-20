var CurrForm;
var OldForm;

// onClick action for hamburger icons on Android
function activeAndroidNav() {
    CurrForm  = kony.application.getCurrentForm();
	
  
  	if (CurrForm.navigationWrapper){
      
    } else {
    CurrForm.add(frmAndroidMenuKA.navigationWrapper);

  	CurrForm.navigationDrawer.left = "-85%";
  	CurrForm.navigationDrawerBkg.isVisible = false;
    CurrForm.navigationDrawerBkg.opacity = 0;
  
  	animateAndroidNav();
    }
}

// Show Android Nav
function animateAndroidNav(){
  CurrForm.navigationDrawer.animate(
        kony.ui.createAnimation({"100":{"left": "0%","stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration/1.3, "delay": 0.3},
        {"animationEnd": function () {}}
    );
  	CurrForm.navigationDrawerBkg.isVisible = true;
    CurrForm.navigationDrawerBkg.animate(
        kony.ui.createAnimation({"100":{"opacity": 1,"stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration},
        {"animationEnd": function () {}}
    );
}

// Close Android Nav and remove it from the form
function closeAndroidNav(){
  if (CurrForm.navigationWrapper){
    CurrForm.navigationDrawer.animate(
          kony.ui.createAnimation({"100":{"left": "-85%","stepConfig":{"timingFunction": easeIn}}}),
          {"fillMode": forwards, "duration": duration/1.3},
          {"animationEnd": function () {}}
      );

      CurrForm.navigationDrawerBkg.animate(
          kony.ui.createAnimation({"100":{"opacity": 0,"stepConfig":{"timingFunction": easeIn}}}),
          {"fillMode": forwards, "duration": duration},
          {"animationEnd": function () {
               //CurrForm.navigationDrawerBkg.isVisible = false;
               CurrForm.remove(CurrForm.navigationWrapper);
              }
          }
      );
  }
}

function androidPrimaryNavigationClick(){
   closeAndroidNav();
  
  var selectedRow = frmAndroidMenuKA.androidPrimaryNavigation.selectedRowIndex[1];

  switch(selectedRow){
      case 0:
        	frmAccountsLandingKA.show();
        	break;
      case 1:
    		frmNewTransferKA.show();
        	break;
      case 2:
    	frmDepositPayLandingKA.show();	
      //firstTimeVisitDepositForm();
        	break;
         case 3:
    	frmSupportDemo.show();	
      //firstTimeVisitDepositForm();
        	break;
      default:
        	frmAndroidMenuKA.show();
    }
}

function androidSecondaryNavigationClick(){
  closeAndroidNav();
  
  var selectedRow = frmAndroidMenuKA.androidSecondaryNavigation.selectedRowIndex[1];

  switch(selectedRow){
      case 0:
        	frmMyMessagesKA.show();
        	break;
      case 1:
    		frmLocatorKA.show();
        	break;
      case 2:
    		frmContactUsKA.show();
        	break;
      case 3:
            frmMoreLandingKA.show();
            break;
    case 4: 
      		frmUserSettingsKA.show();
            break;
      default:
        	frmAndroidMenuKA.show();
    }
}