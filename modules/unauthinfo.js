function onClickunauthseg(  ){
 
	var selectedItem = frmUnauthInformationKA.unauthInformationSegment.selectedIndex[1];
 
	if((selectedItem != null)){
     
			segSelectedFrmunauth(selectedItem);
		
	}
}


function segSelectedFrmunauth( rowIdentifier ){
 infostatus=1;
	if((rowIdentifier == 0)){	
      frmMoreFaqKA.show();
	}else if(rowIdentifier == 1){		
      frmMoreTermsAndConditionsKA.show();
	}
  else{
    frmMorePrivacyPolicyKA.show();
  }
    
}

function gotoparentInfo()
{
  	if(infostatus == 1)
      {
        infostatus=0;
        frmUnauthInformationKA.show();
      }
  else
    frmMoreLandingKA.show();
}