
function payPersonlInit(){
    fromCardHeightPayPerson = frmNewPayPersonKA.fromCard.height;
  	userAgent = kony.os.userAgent();
}

function payPersonPreShow(){
  	loadNewPayPersonData();
  
  	// setup select a payee button
  	//frmNewPayPersonKA.selectPayeeButton.skin = sknprimaryActionDisabled;
}


// Segment Row Actions for Contact To
function payeeSelection(){
  frmP2PselectPayeeKA.payPersonToTextField.text = frmNewPayPersonKA.contactSegment.selectedItems[0].lblContact;
  
}


function contactsegclick()
{

	frmP2PphonepayeeKA.fromCard.setVisibility(false);
	frmP2PphonepayeeKA.indiselcontactflex.setVisibility(true);
  	if (userAgent === "iPhone"){
  	frmP2PphonepayeeKA.lblselcname.text=frmP2PphonepayeeKA.contactSegment.selectedItems[0].lblContact;
    frmP2PphonepayeeKA.btnselemail.text=frmP2PphonepayeeKA.contactSegment.selectedItems[0].lblemail;
   	frmP2PphonepayeeKA.btnselphone.text=frmP2PphonepayeeKA.contactSegment.selectedItems[0].lblphonenum;}
  else{ 
  frmP2PphonepayeeKA.lblselcname.text=frmP2PphonepayeeKA.contactSegment.selectedItems[0].lblContact.text;
    frmP2PphonepayeeKA.btnselemail.text=frmP2PphonepayeeKA.contactSegment.selectedItems[0].lblemail.text;
   	frmP2PphonepayeeKA.btnselphone.text=frmP2PphonepayeeKA.contactSegment.selectedItems[0].lblphonenum.text;}
  
}
function showcontactseg()
{
	frmP2PphonepayeeKA.fromCard.setVisibility(true);
	frmP2PphonepayeeKA.indiselcontactflex.setVisibility(false);
}

