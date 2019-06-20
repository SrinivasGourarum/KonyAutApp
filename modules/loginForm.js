function loginPreShow() {
  
  touchLoginShow();
  userAgent = kony.os.userAgent();
  
  frmLoginKA.loginCard.centerY = "55%";
  frmLoginKA.loginCard.opacity = 0;
  frmLoginKA.apScrollEnable.opacity = 0;
  
  // If a user sets defaultToAccountPreview to true, the will see account preview immediately on form load
  // See frmUserSettingsKA.js
  if (defaultToAccountPreview === true){
  	apAnimate();
    frmLoginKA.apScrollEnable.opacity = 0.2;
    frmLoginKA.loginMainScreen.opacity = 0.2;
  }
  
   if (accountPreviewIsEnabled === false){
  		frmLoginKA.apScrollEnable.enableScrolling = false;
     	frmLoginKA.apScrollDisable.isVisible = false;
     	 if (userAgent === "iPhone" || userAgent === "iPad"){
     		frmLoginKA.accountPreviewIndicator.isVisible = false;
       
   } else if (accountPreviewIsEnabled === true){
     	frmLoginKA.apScrollEnable.enableScrolling = true;
     	frmLoginKA.apScrollDisable.isVisible = true;
     	if (userAgent === "iPhone" || userAgent === "iPad"){
     		frmLoginKA.accountPreviewIndicator.isVisible = true;
        }
   }

   // If a touch ID is enabled, display the touch ID container
  // See frmUserSettingsKA.js
  if (touchIdIsEnabled === true){
  		frmLoginKA.touchIdContainer.isVisible = true;
  }
  
     
  
 
}
  function mySwipe(myWidget,gestureInfo)
{
	kony.print(" Tap Gesture detected"+ gestureInfo.swipeDirection);
  var swipedSide = gestureInfo.swipeDirection; //This is able to recognize the direction of swipe
	
  if(swipedSide === 1) //In case of left swipe
    {
     kony.print("$$$$$$$$$$ swipe left");  
     apUnAnimate();
      
     }
  else if(swipedSide === 2) //On swiping right direction
    {
     kony.print("$$$$$$$$$$ swipe right");  
     apAnimate();
    }
}

//Setting Gesture configuration.
var setupTblTap = {fingers:1,swipedistance:50,swipevelocity:75};//swipe gesture


//var tapGesture=frm1.hbx1.setGgestureRecognizer(1,setupTblTap,myTap);
  var tapGesture=frmLoginKA.setGestureRecognizer(2,setupTblTap,mySwipe);
//var tapGesture=frmLoginKA.apScrollEnable.setGestureRecognizer(2,setupTblTap,mySwipe);
}

function touchLoginShow()
{
   if(kony.store.getItem("deviceReg")!== null && kony.store.getItem("touchIdEnable")===true)
    {
      var config = {"promptMessage" : "PLEASE AUTHENTICATE USING YOUR TOUCH ID"};
      kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, statusCB, config);
    }
}

function loadProgresBar()
{
       kony.application.dismissLoadingScreen ();
       kony.timer.cancel("touchIdTimer");
       frmAccountsLandingKA.show();   
}

function statusCB(status,message)
{ 
   kony.application.showLoadingScreen(null,'', constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
   if(status == 5000)
     {
        kony.timer.schedule("touchIdTimer",loadProgresBar, 2, false);  
     } else
       {
         kony.application.dismissLoadingScreen ();
       }
}


function loginPostShow() {
  	frmLoginKA.apScrollEnable.animate(
        kony.ui.createAnimation({
           "100":{"opacity": 1,
                  "stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards,"duration": 1},
        {"animationEnd": function () {}}
    );
  
     frmLoginKA.loginCard.animate(
        kony.ui.createAnimation({
           "100":{ "centerY":"40%","opacity": 1,
                  "stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards,"duration": 0.6, "delay": 0.1},
        {"animationEnd": function () {}}
    );
}

/**
 * @function
 *
 */
function loginHide(){
      	frmLoginKA.loginCard.centerY="40%";
		  frmLoginKA.imgLogo.src = "logo_blur1.png";
          nextLoader = 1;

//   alert("centerY is: " +frmLoginKA.loginCard.centerY);
//     if (frmLoginKA.btnRemember.skin ==="btnRememberN"){
//           frmLoginKA.usernameTextField.text = null;
//       	  frmLoginKA.passwordTextField.text = null;
//     }else{
//         frmLoginKA.passwordTextField.text = null;
//     }
}


////////////////////////////////
// Login card animation logic 
////////////////////////////////
function clickedLoginCardDeactivate(){
  if (frmLoginKA.loginCard.centerY === "40%"){
		loginKeyboardInactive();
  }
}

var usernameTextLength;
// on password endText and Done
function passwordOnEndEditing(){
  usernameTextLength = frmLoginKA.usernameTextField.text;

  	if (usernameTextLength.length >= 1){
      	// username textfield has text entered
    	loginKeyboardInactive();
    }
} 
nextLoader = 1;
/**
 * @function
 *
 */
function loginKeyboardActive(){
    kony.timer.schedule("loadingAnim2Timer", timer_loading_Active, 0.01, true);
	frmLoginKA.loginCard.animate(
		kony.ui.createAnimation({100:{"centerY": "19%" ,"stepConfig":{"timingFunction": easeOut}}}),
		{fillMode: forwards ,duration:0.3},
		{animationEnd: function() {
       
        } });


}
function timer_loading_Active()
{
  nextLoader = nextLoader+1; 
  frmLoginKA.imgLogo.src = "logo_blur"+nextLoader+".png";
  if(nextLoader==12)
    {
      kony.timer.cancel("loadingAnim2Timer");
//       alert(frmLoginKA.imgLogo.src);
//       alert("nextLoader:"+nextLoader);
    }
  
}
/**
 * @function
 *
 */
function loginKeyboardInactive(){
  kony.timer.schedule("loadingAnim2Timer1", timer_loading_Inactive, 0.01, true);
	frmLoginKA.loginCard.animate(
		kony.ui.createAnimation({100:{"centerY": "40%" ,"stepConfig":{"timingFunction": easeOut}}}),
		{fillMode: forwards ,duration:0.3},
		{animationEnd: function() {
         
        } });
function timer_loading_Inactive()
{
  nextLoader = nextLoader-1; 
  frmLoginKA.imgLogo.src = "logo_blur"+nextLoader+".png";
  if(nextLoader==1)
    {
      kony.timer.cancel("loadingAnim2Timer1");
//       alert(frmLoginKA.imgLogo.src);
//       alert("nextLoader:"+nextLoader);
    }
  
}
  onTextEditLogin();
}




////////////////////////////////
// Account Preview Swipe logic
////////////////////////////////
function apScrollEnableScrolling(){
  var bgScrollX = frmLoginKA.apScrollEnable.contentOffsetMeasured.x;
  var bgScrollXAbs=Math.abs(bgScrollX);
  
	if (bgScrollX < 0){
      frmLoginKA.apScrollDisable.left=(-100+(bgScrollXAbs*0.75))+"%";
      frmLoginKA.loginMainScreen.opacity = 1.0-(bgScrollXAbs*0.01);
      frmLoginKA.loginMainScreen.left = "0dp";
	}
}

function apScrollEnableTouchEnd(){
  var bgScrollX = frmLoginKA.apScrollEnable.contentOffsetMeasured.x;
   if (bgScrollX < -50){
     apAnimate();
    } 
}

function apScrollDisableTouchEnd(){
  var bgScrollX = frmLoginKA.apScrollDisable.contentOffsetMeasured.x;
   if (bgScrollX > 25){
     apUnAnimate();
    } 
}

function apAnimate(){
  var apWidth = frmLoginKA.accountPreviewScreen.width;
  var transform = kony.ui.makeAffineTransform();
  transform.translate(apWidth, 0);
	frmLoginKA.apScrollDisable.animate(
		kony.ui.createAnimation({100:{"transform": transform ,"stepConfig":{"timingFunction": easeOut}}}),
		{fillMode: forwards ,duration:0.3},
		{animationEnd: function() {} });
  
  frmLoginKA.apScrollEnable.animate(
		kony.ui.createAnimation({100:{"opacity": 0.2 ,"stepConfig":{"timingFunction": easeOut}}}),
		{fillMode: forwards ,duration:0.3},
		{animationEnd: function() {} });
}

function apUnAnimate(){
  var transform = kony.ui.makeAffineTransform();
  transform.translate(0, 0);
  
  frmLoginKA.apScrollDisable.animate(
		kony.ui.createAnimation({100:{"transform": transform,"stepConfig":{}}}),
		{fillMode: forwards ,duration:0.3},
		{animationEnd: function() {} });
 
  frmLoginKA.apScrollEnable.animate(
		kony.ui.createAnimation({100:{"opacity": 1 ,"stepConfig":{"timingFunction": easeOut}}}),
		{fillMode: forwards ,duration:0.3},
		{animationEnd: function() {} });
  
  frmLoginKA.loginMainScreen.opacity = 1;
}