function showDetailsPopUp(){
//   var currFrm = kony.application.getCurrentForm();
  if(kony.os.deviceInfo().name === "thinclient"){
     frmAccountDetailKA.flxTransactionDetails.isVisible = true;
  }else{
    frmAccountDetailKA.flxTransactionDetails.isVisible = true;
  var scale10 = kony.ui.makeAffineTransform(); scale10.scale(0.1,0.1);
  var scale100 = kony.ui.makeAffineTransform(); scale100.scale(1,1);
  var scale110 = kony.ui.makeAffineTransform(); scale110.scale(1.1,1.1);
	  frmAccountDetailKA.flxData.animate(
			kony.ui.createAnimation({
              0: {
					"stepConfig": {
						"timingFunction": kony.anim.EASE_IN_OUT
					},
					transform: scale10
				},
				75: {
					"stepConfig": {
						"timingFunction": kony.anim.EASE_IN_OUT
					},
					transform: scale110
				},
			   100: {
					"stepConfig": {
						"timingFunction": kony.anim.EASE_IN_OUT
					},
					transform: scale100
			   }
			}), {
				delay: 0,
				fillMode: kony.anim.FILL_MODE_FORWARDS,
				duration: 0.4
			}, {
				animationEnd: function() {
					frmAccountDetailKA.flxTransactionDetails.forceLayout();
				}
			});
  }
  

}

/**
 * @function
 *
 */
function dismissDetailsPopUp(){
//    var currFrm = kony.application.getCurrentForm();
  if(kony.os.deviceInfo().name === "thinclient"){
     frmAccountDetailKA.flxTransactionDetails.isVisible = false;
  }else{
    var scale10 = kony.ui.makeAffineTransform(); scale10.scale(0.1,0.1);
   var scale100 = kony.ui.makeAffineTransform(); scale100.scale(1,1);
   var scale110 = kony.ui.makeAffineTransform(); scale110.scale(1.1,1.1);
	  frmAccountDetailKA.flxData.animate(
			kony.ui.createAnimation({
              0: {
					"stepConfig": {
						"timingFunction": kony.anim.EASE_IN_OUT
					},
					transform: scale100
				},
				75: {
					"stepConfig": {
						"timingFunction": kony.anim.EASE_IN_OUT
					},
					transform: scale110
				},
			   100: {
					"stepConfig": {
						"timingFunction": kony.anim.EASE_IN_OUT
					},
					transform: scale10
			   }
			}), {
				delay: 0,
				fillMode: kony.anim.FILL_MODE_FORWARDS,
				duration: 0.4
			}, {
				animationEnd: function() {
                    frmAccountDetailKA.flxTransactionDetails.isVisible = false;
					frmAccountDetailKA.flxTransactionDetails.forceLayout();
                   
                    }
			});
  }
   
}
