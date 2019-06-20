var summaryScrollMethod="move";

/**
 * @function
 *
 */
function accountSummaryVertScroll() {
    var currentForm = kony.application.getCurrentForm();
    var scrollPosY = currentForm.vertScroller.contentOffsetMeasured.y;
  
  //kony.print("eglog scrollPosY = " + scrollPosY);
  if (kony.os.deviceInfo().name=="thinclient"){
    if (scrollPosY > 100) {
      currentForm.flxHeaderBlue.opacity = 1;  
    }else{
      currentForm.flxHeaderBlue.opacity = 0;  
    }
  }
  else{
      if (summaryScrollMethod == "move") {
            currentForm.flxHeaderBlue.opacity = (scrollPosY - 50) / 120.0; 
            if (scrollPosY < 110) {
                kony.print("move: NOT docked");
                currentForm.subMenuDocked.top = 255 - scrollPosY;
                currentForm.flxHeaderNormal.opacity = 1;      
                currentForm.skin= "frmAcccountBgN";
            } else {
                kony.print("move: docked");
                currentForm.subMenuDocked.top = 55;
                currentForm.flxHeaderNormal.opacity = 0;
               currentForm.skin= "sknmainGradient";
    //            currentForm.accountsBG.top = (scrollPosY - 10) / 5.0;
            }
            currentForm.subMenuDocked.forceLayout();
        }else{

        }
  }
}
function accountsPostshowEG(){
  //frmAccountsLandingKA.bgImage.top="0dp";
  frmAccountsLandingKA.accountsBG.anchorPoint={"x":.5,"y":0}; 
}

function accountsVertScrollLanding() {
    if (kony.os.deviceInfo().name === "thinclient") {
        kony.print("myString");
    } else {
        var currentForm = kony.application.getCurrentForm();
        var scrollPosY = currentForm.vertScroller.contentOffsetMeasured.y;
        kony.print("eglog scrollPosY = " + scrollPosY);
        if (summaryScrollMethod == "move") {
            if (scrollPosY < 180) {
                kony.print("move: NOT docked");
                currentForm.flxHeaderBlue.opacity = (scrollPosY - 50) / 120.0;
            }
            if (scrollPosY <= 0) {
                var bgScaleFactor = 1 + (Math.abs(scrollPosY) * .005)
                var bgScaler = kony.ui.makeAffineTransform();
                bgScaler.scale(bgScaleFactor, bgScaleFactor);
                frmAccountsLandingKA.accountsBG.transform = bgScaler;
                frmAccountsLandingKA.accountsBG.top = 0;
//                frmAccountsLandingKA.vertScrollContent.skin="skinTrans";
            } 
          else {
                frmAccountsLandingKA.accountsBG.top = (scrollPosY - 10) / 5.0;
                //frmAccountsLandingKA.accountsBG.top=-10;
            }
            currentForm.subMenuDocked.forceLayout();
        } else {

        }
    }
}

/**
 * @function
 *
 */
function frmHomePreshowAccountSummary(){
  //var currentForm = kony.application.getCurrentForm();
  if(kony.os.deviceInfo().name == "android")
  {
  if (homeScrollMethod=="switch"){
    frmAccountSummary.subMenuDocked.isVisible=false;
    //frmHome.subMenuScroll.opacity=1;
    frmAccountSummary.subMenuDocked.top="45dp";
     frmAccountSummary2.subMenuDocked.isVisible=false;
    //frmHome.subMenuScroll.opacity=1;
    frmAccountSummary2.subMenuDocked.top="45dp";
  }
  else if (homeScrollMethod=="move"){
    frmAccountSummary.subMenuDocked.isVisible=true;
    frmAccountSummary.subMenuDocked.top="255dp";
    frmAccountSummary2.subMenuDocked.isVisible=true;
    frmAccountSummary2.subMenuDocked.top="255dp";
    //frmHome.subMenuScroll.opacity=0;
    
  }
  }
}