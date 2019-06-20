var greetingName = "John";

// frmMoreLandingKA becomes "Resources" on android
function moreLandingInit(){
  	userAgent = kony.os.userAgent();
    if (userAgent !== "iPhone"){
      	frmMoreLandingKA.bottomContainer.top = "0dp";
      	frmMoreLandingKA.moreScrollContainer.top = "50dp";
      frmMoreLandingKA.moreResourcesSegment.top= "0%";
    }
}

// moreLandingPreShow - sets user greeting text
function moreLandingPreShow() {
   var pfName = kony.os.deviceInfo().name;
  if(pfName == "iPhone")
    {
      frmMoreLandingKA.bottomContainer.height="75%"
      
    }else{
      frmMoreLandingKA.bottomContainer.height="90%"
    }
}
// Segment Row Actions for frmMoreLandingKA Form
function moreResourcesSegmentClick(){
	var selectedRow = frmMoreLandingKA.moreResourcesSegment.selectedRowIndex[1];
  		//alert("SegmentedUI selectedRowIndex ::"+frmMoreLandingKA.moreResourcesSegment.selectedRowIndex[1]); 
  	switch(selectedRow){
      case 0:
        	frmManageCardsKA.show();
        	break;
      case 1:
          from = "MyMoney";
        	frmMyMoneyListKA.show();
        	break;
      case 2:
            frmPickAProductKA.show();
        	break;
      case 3:
        	frmManagePayeeKA.show();
    		break;
      case 4:
        	frmMoreCheckReorderKA.show();
    		break;
      case 5:
        	frmMoreFaqKA.show();
    		break;
      case 6:
        	frmMorePrivacyPolicyKA.show();
    		break;
      case 7:
        	frmMoreTermsAndConditionsKA.show();
    		break;
      case 8:
        	frmMoreForeignExchangeRatesKA.show();
        	break;
      case 9:
       		frmMoreInterestRatesKA.show();
          break;
        case 10:
       		frmMyGoalsDemo.show();
          break;
      default:
        	frmMoreLandingKA.show();
    }
}

// Called on frmMoreLandingKA.moreScrollContainer onScrolling action
function moreScroll(){
  if (userAgent === "iPhone"){
  	var outerScrollY = frmMoreLandingKA.moreScrollContainer.contentOffsetMeasured.y;
  	var outerScrollYAbs=Math.abs(outerScrollY);
  	
  	// Display accountLabelScroll element
  	if (outerScrollY > 200){
    	frmMoreLandingKA.accountLabelScroll.isVisible = true;
    } else if (outerScrollY > 0 && outerScrollY < 200) {
          frmMoreLandingKA.accountLabelScroll.isVisible = false;
    }
	
    // If user scrolls upwards
    if (outerScrollY > 0){
       	frmMoreLandingKA.topContainer.opacity= (1-(outerScrollYAbs*0.006));
       	frmMoreLandingKA.topContainer.top=(0+(outerScrollYAbs*0.7)); 
    }
    // Move moreLandingTitle into view
    if (outerScrollY > 20 && outerScrollY < 135){
      	frmMoreLandingKA.moreLandingTitle.top = (55-(outerScrollYAbs*0.3));
    }

    // Stick moreLandingTitle top to 15dp
    if (outerScrollY > 136){
      	frmMoreLandingKA.moreLandingTitle.top = "15dp";
    }

    // if user scrolls downwards  
    if (outerScrollY < 0){
     	frmMoreLandingKA.topContainer.opacity=(1+(outerScrollYAbs*0.02));
     	frmMoreLandingKA.topContainer.top=(0-(outerScrollYAbs*0.5));

    	 // Fallback to animate moreLandingTitle to default
    	 hideMoreLandingTitle();
 	}
  }
}

// Fallback animation for moreLandingTitle called in moreScroll()
function hideMoreLandingTitle(){
	frmMoreLandingKA.moreLandingTitle.animate(
        kony.ui.createAnimation({"100":{ "top": "55dp",
                  "stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": 0.2},
        {"animationEnd": function () {}}
    );
}