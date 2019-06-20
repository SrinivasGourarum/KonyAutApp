function imagechangefront()
{
  frmchequeimages.imagecheque.src="check_front.png";
  frmchequeimages.btnfront.skin=sknandroidSegmentedTextActive;
    frmchequeimages.btnback.skin=sknandroidSegmentedTextInactive;
   frmchequeimages.flxdivider.left="0%";
  
}


function imagechangeback()
{
   frmchequeimages.imagecheque.src="check_back.png";
  frmchequeimages.btnfront.skin=sknandroidSegmentedTextInactive;
    frmchequeimages.btnback.skin=sknandroidSegmentedTextActive;
   frmchequeimages.flxdivider.left="50%";
}

var chequestatus = 0;
var accountinfotrans=0;
function gotoparentcheque()
{
  	if(chequestatus == 1)
      {
        chequestatus=0;
        frmdepositchequeKA.show();
      }
  else if(chequestatus == 2)
      {
        chequestatus=0;
       frmRecentDepositKA.show();
      }
  else
   frmtransactionChequeKA.show();
}

function gotoparenttransaction()
{
  if(from == "MyMoney"){
    from = "transaction";
    onClickflxJanMnthKA();
    frmMyMoneyListKA.show();
  }
  else if (accountinfotrans==1){
    frmAccountDetailKA.show();
    accountinfotrans=0;
  }
  else if(from == "search"){
    from = "";
    frmSearchKA.show();
  }
 else if(accountinfotrans==2){
  from = "transaction";
    onClickflxJanMnthKA();
    frmMyMoneyListKA.show();
   accountinfotrans=0;
 }
  else
    {
      frmTransferPayLandingKA.show();
    }
}