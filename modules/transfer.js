// frmNewTransferKA setup
function newTransferPreShow(){
  
  	// account data from data.js
  	loadNewTransferData();
  
  	// setup toCard
  	frmNewTransferKA.toAccountPick.opacity = 0;
  	frmNewTransferKA.toAccountNameContainer.top = "100%";
    frmNewTransferKA.toAccountAmountContainer.top = "100%";
  	frmNewTransferKA.toLabel.left = "-25dp";
  
  	// setup fromCard
  	frmNewTransferKA.fromAccountPick.opacity = 0;
  	frmNewTransferKA.fromAccountNameContainer.top = "100%";
    frmNewTransferKA.fromAccountAmountContainer.top = "100%";
  
  	// setup amountCard
  	frmNewTransferKA.amountPick.opacity = 0;
  	frmNewTransferKA.amountPickContainer.top = "100%";
  
  	// setup frequencyCard
  	frmNewTransferKA.frequencyCard.height = defaultCardHeight;
  
 	// get card heights
  	toCardHeight = frmNewTransferKA.toCard.height;
    fromCardHeight = frmNewTransferKA.fromCard.height;
  	amountCardHeight = frmNewTransferKA.amountCard.height;
  	frequencyCardHeight = "300dp";
  
}

function newTransferPostShow(){
  	// scroll to top of form
  	frmNewTransferKA.scrollToBeginning();
}

// Reset Transfer card on Hide
function newTransferHide(){
  frmNewTransferKA.destroy();
  
  /*frmNewTransferKA.amountTextField.text = null;
  editAccountCard(frmNewTransferKA, "to");
  editAccountCard(frmNewTransferKA, "from");
  editAmountCard(frmNewTransferKA);*/
}
