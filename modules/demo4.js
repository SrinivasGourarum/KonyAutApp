
var msgList = [];
UserTextVal = "";
currency = "";
subStringOffSet=0
var val="";
/**
 * @function
 *
 */
function addUserMsg() {
  currentfrm= kony.application.getCurrentForm();
    if (currentfrm.TextFieldMsg.text === "" || currentfrm.TextFieldMsg.text === null)
        return;
    var msg = {};
  
    UserTextVal = currentfrm.TextFieldMsg.text;
    msg.RichTextMsg = {
        "text": UserTextVal,
        "skin": "richTextGrey",
        "top": "15dp",
        "right": "2%",
        "left": "Default",
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerWeight": kony.flex.USE_PREFERED_SIZE
    };

    msgList.push(msg);
    currentfrm.SegmentMsg.setData(msgList);
    currentfrm.TextFieldMsg.text = "";
    kony.timer.schedule("respTimer", addRespMsg, 2, false);
}

/**
 * @function
 *
 */
function addRespMsg() {
  currentfrm= kony.application.getCurrentForm();
    var msg = {};

    msg.RichTextMsg = {
        "text": UserTextVal,
        "skin": "richTextGreen",
        "top": "15dp",
        "left": "2%",
        "right": "Default",
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerWeight": kony.flex.USE_PREFERED_SIZE
    };
   

    msgList.push(msg);
    currentfrm.SegmentMsg.setData(msgList);
    kony.timer.cancel("respTimer");
    // frmTest.lblTest.text=frmTest.TextFieldMsg.text;
}

function addComma(Num) { 
var currentFrm = kony.application.getCurrentForm();
   if(Number(Num)>=250000)
    {
      currentFrm.lblAmountLimit.skin = "lblRed80";
     currentFrm.lblAmount.skin = "lblRed200";
      currentFrm.btnDone.skin="btnSignInN";
    }
  else
    {
       currentFrm.lblAmountLimit.skin = "lblGrey80";
       currentFrm.lblAmount.skin = "lblBlue";
       currentFrm.btnDone.skin="btnSignInF";
    }
    Num = Num.toString().replace(/,/g, '');
    x = Num.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    return x1 + x2;
}
// on Back 
function back1(){
  var currentFrm = kony.application.getCurrentForm();
  var amountVal = currentFrm.lblAmount.text;
  var amountLen = currentFrm.lblAmount.text.length;
 
   var actualAmt =    getAcctualCurrVal(amountVal);
 if(actualAmt.length>1){
          currentFrm.lblAmount.text = currency+addComma(actualAmt.substr(0, actualAmt.length - 1))+".00";
 }
   else
     {
        currentFrm.lblAmount.text="";
     }
          //alert(amountLen);
  }
  
 // set Amount 
 

function setAmount(SetAmountVal){
  var currentFrm = kony.application.getCurrentForm();
  var amountVal = currentFrm.lblAmount.text;
  var amountLen = currentFrm.lblAmount.text.length;
  
     switch(SetAmountVal)
   {
     case "1":
          val =  getAcctualCurrVal(amountVal);;
        currentFrm.lblAmount.text = currency+addComma(val+"1")+".00";
         break;
     case "2":
        val =  getAcctualCurrVal(amountVal);;
        currentFrm.lblAmount.text = currency+addComma(val+"2")+".00";
         break;      
         
     case "3":
          val =  getAcctualCurrVal(amountVal);;
          currentFrm.lblAmount.text = currency+addComma(val+"3")+".00";
           break;
     case "4":
            val =  getAcctualCurrVal(amountVal);;
          currentFrm.lblAmount.text = currency+addComma(val+"4")+".00";
         break;
     case "5":
           val =  getAcctualCurrVal(amountVal);;
          currentFrm.lblAmount.text = currency+addComma(val+"5")+".00";
         break;
       
      case "6":
           val =  getAcctualCurrVal(amountVal);;
            currentFrm.lblAmount.text = currency+addComma(val+"6")+".00";
         break;      
     case "7":
          val =  getAcctualCurrVal(amountVal);;
          currentFrm.lblAmount.text = currency+addComma(val+"7")+".00";
         break;
     case "8":
         val =  getAcctualCurrVal(amountVal);;
         currentFrm.lblAmount.text = currency+addComma(val+"8")+".00";
         break;

     case "9":
           val =  getAcctualCurrVal(amountVal);;
           currentFrm.lblAmount.text = currency+addComma(val+"9")+".00";
         break;      
    
     case "0":
           val =  getAcctualCurrVal(amountVal);;
           currentFrm.lblAmount.text = currency+addComma(val+"0")+".00";
         break;
     case "00":
            val =  getAcctualCurrVal(amountVal);;
            currentFrm.lblAmount.text = currency+addComma(val+"00")+".00";
         break;  
  }
}
function getAcctualCurrVal(val)
{
  var amountVal = val.substring(subStringOffSet, val.length-3);
   amountVal  = amountVal.replace (/,/g, "");
   return amountVal;
}

/**
 * @function
 *
 */
function onDoneTransferAmount(){
  if(frmTransferAmountDemo.btnDone.skin=="btnSignInN"){
    kony.print("nothing")
  }else{
    frmNewTransferKA.lblAmountValue.text="$"+frmTransferAmountDemo.lblAmount.text;
    frmTransferConfirmDemo.lblAmountValue.text="$"+currency+frmTransferAmountDemo.lblAmount.text;
    frmTransferVerifyDemo .lblAmountValue.text="$"+frmTransferAmountDemo.lblAmount.text;
    frmNewTransferKA.show();
  }
}

function addCommaDeposit(Num) { 
var currentFrm = kony.application.getCurrentForm();
   if(Number(Num)>=5000)
    {
      currentFrm.lblAmountLimit.skin = "lblRed80";
     currentFrm.lblAmount.skin = "lblRed200";
      currentFrm.btnDone.skin="btnSignInN";
    }
  else
    {
       currentFrm.lblAmountLimit.skin = "lblGrey80";
       currentFrm.lblAmount.skin = "lblBlue";
       currentFrm.btnDone.skin="btnSignInF";
    }
    Num = Num.toString().replace(/,/g, '');
    x = Num.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    return x1 + x2;
}
// on Back 
function back2(){
  var currentFrm = kony.application.getCurrentForm();
  var amountVal = currentFrm.lblAmount.text;
  var amountLen = currentFrm.lblAmount.text.length;
 
   var actualAmt =    getAcctualCurrValDeposit(amountVal);
 if(actualAmt.length>1){
          currentFrm.lblAmount.text = "$"+addCommaDeposit(actualAmt.substr(0, actualAmt.length - 1))+".00";
 }
   else
     {
        currentFrm.lblAmount.text="";
     }
          //alert(amountLen);
  }
  
 // set Amount 
 

function setAmount1(SetAmountVal){
  var currentFrm = kony.application.getCurrentForm();
  var amountVal = currentFrm.lblAmount.text;
  var amountLen = currentFrm.lblAmount.text.length;
  
     switch(SetAmountVal)
   {
     case "1":
          val =  getAcctualCurrValDeposit(amountVal);;
        currentFrm.lblAmount.text = "$"+addCommaDeposit(val+"1")+".00";
         break;
     case "2":
        val =  getAcctualCurrValDeposit(amountVal);;
        currentFrm.lblAmount.text = "$"+addCommaDeposit(val+"2")+".00";
         break;      
         
     case "3":
          val =  getAcctualCurrValDeposit(amountVal);;
          currentFrm.lblAmount.text = "$"+addCommaDeposit(val+"3")+".00";
           break;
     case "4":
            val =  getAcctualCurrValDeposit(amountVal);;
          currentFrm.lblAmount.text = "$"+addCommaDeposit(val+"4")+".00";
         break;
     case "5":
           val =  getAcctualCurrValDeposit(amountVal);;
          currentFrm.lblAmount.text = "$"+addCommaDeposit(val+"5")+".00";
         break;
       
      case "6":
           val =  getAcctualCurrValDeposit(amountVal);;
            currentFrm.lblAmount.text = "$"+addCommaDeposit(val+"6")+".00";
         break;      
     case "7":
          val =  getAcctualCurrValDeposit(amountVal);;
          currentFrm.lblAmount.text = "$"+addCommaDeposit(val+"7")+".00";
         break;
     case "8":
         val =  getAcctualCurrValDeposit(amountVal);;
         currentFrm.lblAmount.text = "$"+addCommaDeposit(val+"8")+".00";
         break;

     case "9":
           val =  getAcctualCurrValDeposit(amountVal);;
           currentFrm.lblAmount.text = "$"+addCommaDeposit(val+"9")+".00";
         break;      
    
     case "0":
           val =  getAcctualCurrValDeposit(amountVal);;
           currentFrm.lblAmount.text = "$"+addCommaDeposit(val+"0")+".00";
         break;
     case "00":
            val =  getAcctualCurrValDeposit(amountVal);;
            currentFrm.lblAmount.text = "$"+addCommaDeposit(val+"00")+".00";
         break;  
  }
}
function getAcctualCurrValDeposit(val)
{
  var amountVal = val.substring(1, val.length-3);
   amountVal  = amountVal.replace (/,/g, "");
   return amountVal;
}

function onDoneDepositAmount(){
  if(frmDepositAmountDemo.btnDone.skin=="btnSignInN"){
    kony.print("nothing")
  }else{
  frmNewDepositKA.lblAmountValue.text=frmDepositAmountDemo.lblAmount.text;
frmDepositConfirmationDemo.lblAmountValue.text=frmDepositAmountDemo.lblAmount.text;
frmNewDepositKA.show();
  }
}