deviceRegistration = 0;

function showLoginFromPin(){
  frmPinSetUpDemo.flxPIN1.isVisible=true;
  frmPinSetUpDemo.flxPIN2.isVisible=false;
   frmLoginKA.show();
}
/**
 * @function
 *
 */
function pinOnHide(){
  frmPinSetUpDemo.flxPIN1.isVisible=true;
  frmPinSetUpDemo.flxPIN2.isVisible=false;
   frmPinSetUpDemo.btn1.skin="btnPinNormal";
    frmPinSetUpDemo.btn2.skin="btnPinNormal";
    frmPinSetUpDemo.btn3.skin="btnPinNormal";
    frmPinSetUpDemo.btn4.skin="btnPinNormal";
  	//frmAccountsLandingKA.show();
}
/**
 * @function
 *
 */
function  setPin1(){
   currentFrm = kony.application.getCurrentForm();
  if(currentFrm.btn1.skin=="btnPinNormal")
    {
    currentFrm.btn1.skin="btnPinFocus";
      currentFrm.btn1.focusSkin="btnPinFocus";
    currentFrm.btn2.skin="btnPinNormal";
    currentFrm.btn3.skin="btnPinNormal";
    currentFrm.btn4.skin="btnPinNormal";
    }
  else if(currentFrm.btn2.skin=="btnPinNormal")
    {
    currentFrm.btn1.skin="btnPinFocus";
    currentFrm.btn1.focusSkin="btnPinFocus";
    currentFrm.btn2.skin="btnPinFocus"
    currentFrm.btn2.focusSkin="btnPinFocus";
    currentFrm.btn3.skin="btnPinNormal";
    currentFrm.btn4.skin="btnPinNormal";
    }
   else if(currentFrm.btn3.skin=="btnPinNormal")
    {
    currentFrm.btn1.skin="btnPinFocus";
    currentFrm.btn1.focusSkin="btnPinFocus";
    currentFrm.btn2.skin="btnPinFocus"
    currentFrm.btn2.focusSkin="btnPinFocus";
    currentFrm.btn3.skin="btnPinFocus";
    currentFrm.btn3.focusSkin="btnPinFocus";
    currentFrm.btn4.skin="btnPinNormal";
    }
  else if(currentFrm.btn4.skin=="btnPinNormal")
    {
    currentFrm.btn1.skin="btnPinFocus";
    currentFrm.btn1.focusSkin="btnPinFocus";
    currentFrm.btn2.skin="btnPinFocus"
    currentFrm.btn2.focusSkin="btnPinFocus";
    currentFrm.btn3.skin="btnPinFocus";
    currentFrm.btn3.focusSkin="btnPinFocus";
    currentFrm.btn4.skin="btnPinFocus";
      currentFrm.btn4.focusSkin="btnPinFocus";
      
	frmUserSettingsPIN.btnTouch.skin="btnTouchIDF";   
    checkUserTouchID();  
  //  frmUserSettingsTouchIdKA.show();  
    }
    else{
        kony.print("Do nothing");
    }
    
    
}

/**
 * @function
 *
 */
function checkUserTouchID(){
   if( frmUserSettingsTouchIdKA.btnTouch.skin=="btnTouchIDF"){
     frmAccountsLandingKA.show();
   }else{
     frmTouchIdDemo.show();
   }
}
function onTextEditLogin(){
   currentFrm = kony.application.getCurrentForm();
      if(frmLoginKA.usernameTextField.text==null  ||frmLoginKA.usernameTextField.text==""){
        frmLoginKA.signInButton.skin="btnSignInN";
      }else{

        frmLoginKA.signInButton.skin="btnSignInF";
      }
}

/**
 * @function
 *
 */
function loginPreshowNew(){
  
          frmLoginKA.usernameTextField.text = "konyrbdev";
      	  frmLoginKA.passwordTextField.text = "kony1234";
//   if( frmUserSettingsPIN.btnTouch.skin=="btnTouchIDF"){
//     frmLoginKA.flxMainPIN.isVisible=true;
    
//   }
//  else if( frmUserSettingsPIN.btnTouch.skin=="btnTouchIDN") {
//    frmLoginKA.flxMainPIN.isVisible=false;
//    //authenticateTouchID();
//  }

//      checkTouchIdLogin();
}

/**
 * @function
 *
 */
function checkTouchIdLogin(){
    if( frmUserSettingsTouchIdKA.btnTouch.skin=="btnTouchIDF"){
    frmLoginKA.touchIdContainer.isVisible=true;
  }
 else {
  frmLoginKA.touchIdContainer.isVisible=false;
 }
}

/**
 * @function
 *
 */
function onLoginClick(){
 
 if( kony.os.deviceInfo().name==="thinclient"){
     frmAccountsLandingKA.show();
   }
  else{

   touchIdAuthentication();
//     frmAccountsLandingKA.show();
  }
}

/**
 * @function
 *
 */
function setFocusSkinForEnable(){
   currentFrm = kony.application.getCurrentForm();
    if( currentFrm.btnTouch.skin=="btnTouchIDN"){
    currentFrm.btnTouch.skin="btnTouchIDF";
     frmUserSettingsPIN.btnResetPIN.isVisible=true;
   }else{
     currentFrm.btnTouch.skin="btnTouchIDN";
      frmUserSettingsPIN.btnResetPIN.isVisible=false;
   }
   
}

/**
 * @function
 *
 */
function selectFrequency(){
  frmNewTransferKA.flxFrequency.isVisible=false;
}

/**
 * @function
 *
 */
function newTrasnferPreShow(){
  if(frmNewTransferKA.lblAmountValue.text===""||frmNewTransferKA.lblAmountValue.text===null){
    frmNewTransferKA.btnContinue.skin="btnSignInN";
  }
  else{
     frmNewTransferKA.btnContinue.skin="btnSignInF";
  }
}

function callTheNumber()
{
	
	try
	{
		var number="+1-989-121-0987";
		kony.phone.dial(number);
	} 
	catch(err)
	{
		alert("User cancelled");
	}
}

function openEmail()
{
	try
	{
		var to=["customerinfo@bank.com"];
		var cc=[""];
		var bcc = [""];
		var sub = "Support";
		var msgbody = "Bank";
		kony.phone.openEmail(to,cc,bcc,sub,msgbody,false,[]);		
	}
	catch(err)
	{
		alert("error in opening Email:: "+err);
	}
}
/**
 * @function
 *
 */
function onSelectionDate(){
  currentFrm = kony.application.getCurrentForm();
var today = new Date();
var dd = today.getDate();
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var mm = (monthNames[today.getMonth()]);
  //var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+' '+dd+', '+yyyy;
frmNewTransferKA.lblDate.text = today;
  frmNewTransferKA.show();
}