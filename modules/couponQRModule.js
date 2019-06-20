function genrateQR(){
  
  
alert("k");
  
}

datatostore = [];

function lcreateCoupon(){
  var datatopush = [];
  
  if(checkNull(frmCouponCreation.txtCouponCode.text) !== "" && checkNull(frmCouponCreation.txtCouponAmount.text) !== "" && checkNull(frmCouponCreation.txtCouponDescription.text) !== "")
  {
    
  var couponID = checkNull(frmCouponCreation.txtCouponCode.text);
  var couponAmount = checkNull(frmCouponCreation.txtCouponAmount.text);
  var couponDesc = checkNull(frmCouponCreation.txtCouponDescription.text);
    
  var datefromcal = frmCouponCreation.cldrDate.day + "/" + frmCouponCreation.cldrDate.month + "/" + frmCouponCreation.cldrDate.year;
  var couponValidity = datefromcal;
   
  var datacoupon = couponID +","+ couponAmount +","+ couponDesc +","+ couponValidity +",Active";
  
   datatopush = {
    
    "couponNum" :couponID,
    "couponAmount": "IDR "+couponAmount,
    "Desc": couponDesc,
     "couponStatus":"Active",
    "couponExpiry" :"Validity till "+couponValidity
    
  };
    datatostore.push(datatopush);
    //alert(JSON.stringify(datatostore));
    
  var finalQRCode= create_qrcode(datacoupon);
  frmCouponQRCode.imgQRCode.base64 = finalQRCode;
  
  frmCouponQRCode.show();

   
  }
  else{
    
    
     var infoAlert = kony.ui.Alert({
        message: "Please enter all the fields",
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Bank",
        yesLabel: "OK",
        noLabel: "Cancel",
        alertHandler: null
    }, {});
    
  }

  
  
  
  
  
  
}

function checkNull(arg) {
     if (arg == null || arg == "" || arg == undefined  || arg == "undefined" ||  arg == "null") {
         arg = "";
     }
     return arg;
 }






function onClickSegCoupon(){
  
  var datatodisplay = frmCouponsList.segCoupons083bf4361dc7d4f.selectedItems[0];
  if(datatodisplay["couponNum"] ==="No coupons to display" ){
    kony.print("myString");
  }else{
    frmCouponDetails.lblCouponCode.text = datatodisplay["couponNum"];
    frmCouponDetails.lblCouponAmount.text = datatodisplay["couponAmount"];
    frmCouponDetails.lblCouponDesc.text = datatodisplay["Desc"];
    frmCouponDetails.lblCouponStatus.text = datatodisplay["couponStatus"];    
    frmCouponDetails.lblCouponValidity.text = datatodisplay["couponExpiry"].substring(14);
    
    var datacoupon = datatodisplay["couponNum"] +","+ datatodisplay["couponAmount"].substring(4)+","+ datatodisplay["Desc"]+","+ datatodisplay["couponExpiry"].substring(14)+","+ datatodisplay["couponStatus"];
     var finalQRCode= create_qrcode(datacoupon);
  frmCouponDetails.imgQRCode.base64 = finalQRCode;
   frmCouponDetails.show();
  }
   
}





function segcouponsList(){
 //alert(JSON.stringify(datatostore));
  var datatopushforCoupon = [];
  if(datatostore.length === 0){
    datatopushforCoupon = {
    
    "couponNum" :"No coupons to display",
    "couponAmount": "",
    "Desc": "",
     "couponStatus":"",
    "couponExpiry" :""
    
  };
    datatostore.push(datatopushforCoupon);
    frmCouponsList.segCoupons083bf4361dc7d4f.setData(datatostore);
    datatostore.pop(datatopushforCoupon);
    
  }else{
    
    frmCouponsList.segCoupons083bf4361dc7d4f.setData(datatostore);
    
    
  }
  
}
