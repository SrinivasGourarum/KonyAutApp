
function touchIdAuthentication()
{
  var pfName = kony.os.deviceInfo().name;
  if(pfName == "android" || pfName == "Android")
    {
      isAuthUsingTouchSupported();
     }
  else
    {
     TouchIDAuthiPhone();
    }
}
/**
 * @function
 *
 */
function statusCB(status,message)
{
  
   	 if(status ==5000)
           onTouchIDSuccess();
    else if(status == 5001)
          {
        kony.ui.Alert({
                message: "Authentication is not successful because a user fails to provide valid credentials.",
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Kony",
                yesLabel: "Ok",
                noLabel: "No",
                alertHandler: null
                }, {});
          }
  else
    {
       kony.ui.Alert({
                message:message,
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Kony",
                yesLabel: "Ok",
                noLabel: "No",
                alertHandler: null
                }, {});
    }
  frmTouchIdDemo.flxTrans.isVisible=false;
}
function TouchIDAuthiPhone()
{
  currentForm = kony.application.getCurrentForm().id;
  if(currentForm=="frmTouchIdDemo"){
    		frmTouchIdDemo.flxTrans.isVisible=true;
     	var config = {"promptMessage" : "To approve the use of Touch ID to sign in to the Bank app, please confirm your fingerprint"};
				kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID,this.statusCB,config);
  }else{
       //var config = null;
	          	var config = {"promptMessage" : "Login using TouchID"};
				kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID,this.statusCB,config);
  }
            
}
 function onTouchIDSuccess()
{
   frmAccountsLandingKA.show();
}
function isAuthUsingTouchSupported()
{
	var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
	if(status == 5000)
	{
      frmLoginKA.flxTouchID.setVisibility(true);
	  authUsingTouchID();	
	}

  else
	{
		var msg = "Touch ID is not configured on this device.Authentication returned a status ::"+status;
		kony.ui.Alert({message: msg+" "+status,
		alertType: constants.ALERT_TYPE_INFO,
		yesLabel:"Close"},
		{});
      frmTouchIdDemo.flxTrans.isVisible=false;
	}
}



/*************************************************************************************
 * Function:statusCB()
 * Description: Call back function for Authentication through Finger Print.
 * Author: Kony
 *************************************************************************************/
function statusCBAndroid(status,message)
{
  
	if(status == 5000)
	{
      frmLoginKA.flxTouchID.setVisibility(false);
     frmAccountsLandingKA.show();
	}
   else if(status == 5001)
          {
         kony.ui.Alert({
                message: "Authentication is not successful because a user fails to provide valid credentials.",
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Kony",
                yesLabel: "Ok",
                noLabel: "No",
                alertHandler: null
                }, {});
          }
  	else
	{
		var messg = status+": "+message;
		kony.ui.Alert({message: messg,
		alertType: constants.ALERT_TYPE_INFO,
		yesLabel:"Close"},
		{});
	}
}



/*************************************************************************************
 * Function:authUsingTouchID()
 * Description: Function for validating the user.
 * Author: Kony
 *************************************************************************************/
function authUsingTouchID()
{
    
    var config = {"promptMessage" : "PLEASE AUTHENTICATE USING YOUR TOUCH ID"};
	kony.localAuthentication.authenticate(
	constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID,this.statusCBAndroid,config);
}
