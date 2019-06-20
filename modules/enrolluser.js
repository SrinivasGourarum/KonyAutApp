function enrolluserpreshow()
{
  
  frmEnrolluserLandingKA.btnuserdetails.setEnabled(false);
   frmEnrolluserLandingKA.btnterms.setEnabled(false);
}

function onclicknextbasicinfo()
{
 frmEnrolluserLandingKA.btnuserdetails.setEnabled(true);
  userdetailsTabSelected();
}

function onclicknextuserdetails()
{
 frmEnrolluserLandingKA.btnterms.setEnabled(true);
  termsTabSelected();
}

function onclickbackenrolluserbtn()
{
   if (frmEnrolluserLandingKA.enrollListsContainer.left == "0%"){
		frmLoginKA.show();}
  else if (frmEnrolluserLandingKA.enrollListsContainer.left == "-100%"){
 		 frmEnrolluserLandingKA.btnuserdetails.setEnabled(true);
  basicInfotabSelected();}
   else if (frmEnrolluserLandingKA.enrollListsContainer.left == "-200%"){
   frmEnrolluserLandingKA.btnterms.setEnabled(true);
   userdetailsTabSelected();}
}

function basicInfotabSelected(){
   frmEnrolluserLandingKA.enrollListsContainer.animate(
        kony.ui.createAnimation({100:
        	{ 
             "left": '0%',
             "stepConfig":{"timingFunction": easeOut}}}),
        {fillMode: forwards ,duration:0.3},
        {animationEnd: function() {} });
  
  frmEnrolluserLandingKA.tabSelectedIndicator.animate(
        kony.ui.createAnimation({100:
        	{ 
             "left": '0%',
             "stepConfig":{"timingFunction": easeOut}}}),
        {fillMode: forwards ,duration:0.3},
        {animationEnd: function() {} }); 
  
  frmEnrolluserLandingKA.btnbasicinfo.skin = skntabSelected;
  frmEnrolluserLandingKA.btnuserdetails.skin = skntabDeselected;
   frmEnrolluserLandingKA.btnterms.skin = skntabDeselected;
}


function userdetailsTabSelected(){
   frmEnrolluserLandingKA.enrollListsContainer.animate(
        kony.ui.createAnimation({100:
        	{ 
             "left": '-100%',
             "stepConfig":{"timingFunction": easeOut}}}),
        {fillMode: forwards ,duration:0.3},
        {animationEnd: function() {} });
  
    frmEnrolluserLandingKA.tabSelectedIndicator.animate(
        kony.ui.createAnimation({100:
        	{ 
             "left": '33.3%',
             "stepConfig":{"timingFunction": easeOut}}}),
        {fillMode: forwards ,duration:0.3},
        {animationEnd: function() {} });
  
    frmEnrolluserLandingKA.btnuserdetails.skin = skntabSelected;
    frmEnrolluserLandingKA.btnbasicinfo.skin = skntabDeselected;
}

function termsTabSelected() {
  frmEnrolluserLandingKA.enrollListsContainer.animate(
        kony.ui.createAnimation({100:
        	{ 
             "left": '-200%',
             "stepConfig":{"timingFunction": easeOut}}}),
        {fillMode: forwards ,duration:0.3},
        {animationEnd: function() {} });
  
    frmEnrolluserLandingKA.tabSelectedIndicator.animate(
        kony.ui.createAnimation({100:
        	{ 
             "left": '66.6%',
             "stepConfig":{"timingFunction": easeOut}}}),
        {fillMode: forwards ,duration:0.3},
        {animationEnd: function() {} });
  
    frmEnrolluserLandingKA.btnterms.skin = skntabSelected;
    frmEnrolluserLandingKA.btnuserdetails.skin = skntabDeselected;
 frmEnrolluserLandingKA.btnbasicinfo.skin = skntabDeselected;

}


