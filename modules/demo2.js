function setFrequency(setFrequencyOpt){
   var currentFrm = kony.application.getCurrentForm(); 
  
     switch(setFrequencyOpt)
   {
     	case "1":
        currentFrm.lblFrequency.text = "One-Time Only";
         break;
       	case "2":
        currentFrm.lblFrequency.text = "Weekly";
         break;
       	case "3":
        currentFrm.lblFrequency.text = "Biweekly";
         break;	
        case "4":
        currentFrm.lblFrequency.text = "Monthly";
         break;	
        case "5":
        currentFrm.lblFrequency.text = "Quarterly";
         break;
       	case "6":
        currentFrm.lblFrequency.text = "Anually";
         break;
   }
  animateActionSheetRevrse();
}
/**
 * @function
 *
 */
function animateActionSheet(){
  var currentFrm = kony.application.getCurrentForm(); 
    currentFrm.flxFrequency.isVisible=true;
   currentFrm["flxFrequencyOptions"].animate(
          kony.ui.createAnimation({"100":{"top":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
          {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.3},
           {"animationEnd" : function(){ 
           }})
}
/**
 * @function
 *
 */
function animateActionSheetRevrse(){

  var currentFrm = kony.application.getCurrentForm(); 
   currentFrm.flxFrequency.isVisible=false;
   currentFrm["flxFrequencyOptions"].animate(
          kony.ui.createAnimation({"100":{"top":"100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
          {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.3},
           {"animationEnd" : function(){ 
            
           }})
}


function ontouchFrontCamera(){
   var pfName = kony.os.deviceInfo().name;
  if(pfName == "android" || pfName == "Android")
    {
     frmDepositCamera.lbHeadingAndriod.text="Check Front";
     frmDepositCamera.flxMainAndroid.skin= "flxCheckNormal";
     }
  else
    {
     frmDepositCamera.lblHeadingiPhone.text="Check Front";
      frmDepositCamera.flxMainiPhone.skin= "flxCheckNormal";
    }
}
function ontouchBackCamera(){
   var pfName = kony.os.deviceInfo().name;
  if(pfName == "android" || pfName == "Android")
    {
     frmDepositCamera.lbHeadingAndriod.text="Check Back";
     frmDepositCamera.flxMainAndroid.skin= "flxCheckNormal";
     }
  else
    {
     frmDepositCamera.lblHeadingiPhone.text="Check Back";
      frmDepositCamera.flxMainiPhone.skin= "flxCheckNormal";
    }
}
/**
 * @function
 *
 */
function checkCamera(){
  var pfName = kony.os.deviceInfo().name;
  if(pfName == "android" || pfName == "Android"){
     frmDepositCamera.flxMainAndroid.skin="flxCheckFocus";
  }
 else{
    frmDepositCamera.flxMainiPhone.skin="flxCheckFocus";
 }
 kony.timer.schedule("camTimer",showDeposit, 1.5, true);  
}
function showDeposit(){
 frmNewDepositKA.show();
  kony.timer.cancel("camTimer");
}

function onHideCamera(){
//   frmDepositCamera.flxMainAndroid.skin="flxCheckNormal";
//   frmDepositCamera.flxMainiPhone.skin="flxCheckNormal";
}
function setAccountsData(){
  tabAccounts=[
 {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } ,
     
     {
    "nameAccount1":"MMDA •• 8322",
    "amountAccount1":"$<b>1,600.</b>00",
     "lblType":"Money Morket Account",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor1",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings ",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"CD •• 0511 ",
    "amountAccount1":"$<b>260.</b>75",
     "lblType":"Hawai Trip",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor3",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"IRA •• 2712",
    "amountAccount1":"$<b>2,917.</b>00",
     "lblType":"Retirement",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor4",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
        {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } , {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } ,
          {
    "nameAccount1":"MMDA •• 8322",
    "amountAccount1":"$<b>1,600.</b>00",
     "lblType":"Money Morket Account",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor1",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings ",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"CD •• 0511 ",
    "amountAccount1":"$<b>260.</b>75",
     "lblType":"Hawai Trip",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor3",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"IRA •• 2712",
    "amountAccount1":"$<b>2,917.</b>00",
     "lblType":"Retirement",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor4",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
        {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } , {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } ,
     
     {
    "nameAccount1":"MMDA •• 8322",
    "amountAccount1":"$<b>1,600.</b>00",
     "lblType":"Money Morket Account",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor1",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings ",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"CD •• 0511 ",
    "amountAccount1":"$<b>260.</b>75",
     "lblType":"Hawai Trip",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor3",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"IRA •• 2712",
    "amountAccount1":"$<b>2,917.</b>00",
     "lblType":"Retirement",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor4",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
        {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
        {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } ,
     
     {
    "nameAccount1":"MMDA •• 8322",
    "amountAccount1":"$<b>1,600.</b>00",
     "lblType":"Money Morket Account",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor1",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings ",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"CD •• 0511 ",
    "amountAccount1":"$<b>260.</b>75",
     "lblType":"Hawai Trip",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor3",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"IRA •• 2712",
    "amountAccount1":"$<b>2,917.</b>00",
     "lblType":"Retirement",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor4",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
        {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } ,
     {
    "nameAccount1":"MMDA •• 8322",
    "amountAccount1":"$<b>1,600.</b>00",
     "lblType":"Money Morket Account",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor1",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings ",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"CD •• 0511 ",
    "amountAccount1":"$<b>260.</b>75",
     "lblType":"Hawai Trip",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor3",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"IRA •• 2712",
    "amountAccount1":"$<b>2,917.</b>00",
     "lblType":"Retirement",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor4",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
        {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } , {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } ,
     
     {
    "nameAccount1":"MMDA •• 8322",
    "amountAccount1":"$<b>1,600.</b>00",
     "lblType":"Money Morket Account",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor1",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings ",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"CD •• 0511 ",
    "amountAccount1":"$<b>260.</b>75",
     "lblType":"Hawai Trip",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor3",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"IRA •• 2712",
    "amountAccount1":"$<b>2,917.</b>00",
     "lblType":"Retirement",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor4",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
    {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings ",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
    {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings ",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"CD •• 0511 ",
    "amountAccount1":"$<b>260.</b>75",
     "lblType":"Hawai Trip",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor3",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"IRA •• 2712",
    "amountAccount1":"$<b>2,917.</b>00",
     "lblType":"Retirement",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor4",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"CD •• 0511 ",
    "amountAccount1":"$<b>260.</b>75",
     "lblType":"Hawai Trip",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor3",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"IRA •• 2712",
    "amountAccount1":"$<b>2,917.</b>00",
     "lblType":"Retirement",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor4",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
        {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
        {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } ,
     
     {
    "nameAccount1":"MMDA •• 8322",
    "amountAccount1":"$<b>1,600.</b>00",
     "lblType":"Money Morket Account",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor1",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings ",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"CD •• 0511 ",
    "amountAccount1":"$<b>260.</b>75",
     "lblType":"Hawai Trip",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor3",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
      {
    "nameAccount1":"IRA •• 2712",
    "amountAccount1":"$<b>2,917.</b>00",
     "lblType":"Retirement",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor4",text:"mmda"},
    "lblSeprator":"no data"    
  } , 
        {
    "nameAccount1":"HYS •• 0093",
    "amountAccount1":"$<b>750.</b>00",
     "lblType":"High Yield Savings",
    "typeAccount":"0.85% APY",
    "colorAccount1":{skin:"lblColor2",text:"mmda"},
    "lblSeprator":"no data"    
  } ,
  ];
  frmAccountsLandingKA.segAccountsKA.setData(tabAccounts);
}

function removePendingRequest(){
  var selectedIndex = frmTransferPayLandingKA.pendingTransactions.selectedIndex[1];
  frmTransferPayLandingKA.pendingTransactions.removeAt(selectedIndex);
  tabPendingData.splice(selectedIndex);
}

function showAccountFromDemo(){
  frmNewCheckReOrderKA.account1.isVisible=true;
  frmNewCheckReOrderKA.account2.isVisible=true;
  frmNewCheckReOrderKA.fromCardTitle.isVisible=true;
  frmNewCheckReOrderKA.fromCardInner.isVisible=true;
  frmNewCheckReOrderKA.fromAccountPick1.isVisible=false;
  frmNewCheckReOrderKA.fromAccountPick2.isVisible=false;
}

/**
 * @function
 *
 */
function displayAccountFromDemo1(){
  frmNewCheckReOrderKA.fromAccountPick1.isVisible=true;
  frmNewCheckReOrderKA.fromAccountPick2.isVisible=false;
   frmNewCheckReOrderKA.account1.isVisible=false;
  frmNewCheckReOrderKA.account2.isVisible=false;
  frmNewCheckReOrderKA.fromCardTitle.isVisible=false;
  frmNewCheckReOrderKA.fromCardInner.isVisible=false;
}
function displayAccountFromDemo2(){
  frmNewCheckReOrderKA.fromAccountPick1.isVisible=false;
  frmNewCheckReOrderKA.fromAccountPick2.isVisible=true;
   frmNewCheckReOrderKA.account1.isVisible=false;
  frmNewCheckReOrderKA.account2.isVisible=false;
  frmNewCheckReOrderKA.fromCardTitle.isVisible=false;
  frmNewCheckReOrderKA.fromCardInner.isVisible=false;
}
/**
 * @function
 *
 */
function timerLogin(){

         frmLoginKA["logoHeader"].animate(
         kony.ui.createAnimation({"100":{"top":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
         {"delay":.9,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.6},
         /**
          * @function
          *
          */
         {"animationEnd" : function(){ 
          
          }});
    frmLoginKA.loginCardWrapper.isVisible=true;  	
   	frmLoginKA.loginCardWrapper.isVisible=true;
    frmLoginKA["loginCardWrapper"].animate(
    kony.ui.createAnimation({"100":{"top":"10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
    {"delay":0.9,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.6},
    {"animationEnd" : function(){ 
      frmLoginKA.utilityLinks.isVisible=true;
    }});
  //kony.timer.schedule("112211",showLogin, 0.5, true);
}
/**
 * @function
 *
 */
function showLogin(){
 
   kony.timer.cancel("112211");
 frmLoginKA.loginCardWrapper.isVisible=true;
  frmLoginKA["loginCardWrapper"].animate(
    kony.ui.createAnimation({"100":{"top":"10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
    {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.6},
    {"animationEnd" : function(){ 
    }});
}
function showMePrevious(){
  var previosfrmDemo = kony.application.getPreviousForm();
   previosfrmDemo.show();
}

function numberOfLeafs(leafTypeSkinValue){
   currentFrm = kony.application.getCurrentForm().id;
   for(var i=1;i<4;i++)
    {
      if(leafTypeSkinValue == i){
         eval(currentFrm+".img"+i).src = "radioselected.png";
      }
      else
        eval(currentFrm+".img"+i).src = "radiononselected.png";
    }
}

/**
 * @function
 *
 */
function depositHistory(showDepoist){
  currentFrm = kony.application.getCurrentForm();
   switch(showDepoist){
        case "New":
     	currentFrm.btnNew.skin= "btnBlueNormal";
      	currentFrm.btnHistory.skin= "btnBlueFous";
  	    currentFrm["flxNew"].animate(
         kony.ui.createAnimation({"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
         {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.3},
         {"animationEnd" : function(){ 
          }});
        break;
       case "History":
       currentFrm.btnNew.skin= "btnBlueFous";
       currentFrm.btnHistory.skin= "btnBlueNormal";
  	   currentFrm["flxNew"].animate(
       kony.ui.createAnimation({"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
       {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.3},
       {"animationEnd" : function(){ 
        }});
         break;
        case "HistoryAndroid":
       currentFrm.btnNewAndroid.skin= "btnBlueNormalAndorid";
       currentFrm.btnHistoryAndroid.skin= "btnBlueFocusAndorid";
  	   currentFrm["flxNew"].animate(
       kony.ui.createAnimation({"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
       {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.3},
       {"animationEnd" : function(){ 
        }});
       currentFrm["tabSelectedIndicator"].animate(
       kony.ui.createAnimation({"100":{"left":"50%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
       {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.3},
       {"animationEnd" : function(){ 
        }});
         break;
        case "NewAndroid":
       currentFrm.btnNewAndroid.skin= "btnBlueFocusAndorid";
       currentFrm.btnHistoryAndroid.skin= "btnBlueNormalAndorid";
  	   currentFrm["flxNew"].animate(
       kony.ui.createAnimation({"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
       {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.3},
       {"animationEnd" : function(){ 
        }});
       currentFrm["tabSelectedIndicator"].animate(
       kony.ui.createAnimation({"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
       {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.3},
       {"animationEnd" : function(){ 
        }});
         break;
   }

}
function accountAddress(){
  if(frmNewCheckReOrderKA.imgAccountAddress.src=="radioselected.png"){
    frmNewCheckReOrderKA.flxAccountAddressKA.isVisible=false;
    frmNewCheckReOrderKA.flxSpecifyAddressKA.isVisible=true;
    frmNewCheckReOrderKA.imgAccountAddress.src="radiononselected.png";
    frmNewCheckReOrderKA.imgSpecifyAddress.src="radioselected.png";
  }
  else{
    frmNewCheckReOrderKA.flxAccountAddressKA.isVisible=true;
    frmNewCheckReOrderKA.flxSpecifyAddressKA.isVisible=false;
    frmNewCheckReOrderKA.imgAccountAddress.src="radioselected.png";
    frmNewCheckReOrderKA.imgSpecifyAddress.src="radiononselected.png";
  }
}

/**
 * @function
 *
 */
function rememberMEFocus(){
  if(frmLoginKA.btnRemember.skin ==="btnRememberF"){
  frmLoginKA.btnRemember.skin ="btnRememberN";
  }
  else{
   frmLoginKA.btnRemember.skin ="btnRememberF";
  }
}

/**
 * @function
 *
 */
function rememberMEFocusSPA(){
  if(frmLoginKA.rememberMeSPA.src ==="rem_f.png"){
  frmLoginKA.rememberMeSPA.src ="icon_pin_f.png";
  }
  else{
   frmLoginKA.rememberMeSPA.src ="rem_f.png";
  }
}