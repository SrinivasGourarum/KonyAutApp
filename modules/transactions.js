
// Determines titlebar and form skin color based on accountType of selected row
// variable is set in recentTransactionsOnRowClick()
function recentTransactionDetailPreShow(){

  //setting Data For Recent Transaction
  var recentObJ  =frmDepositPayLandingKA.recentTransactions.selectedItems;
  frmRecentDepositKA.transactionAmount.text = recentObJ[0].transferAmount;
  frmRecentDepositKA.transactionDate.text = "Scheduled for: "+ recentObJ[0].transferDate;
  frmRecentDepositKA.transactionName.text = recentObJ[0].transferDescription;

  // set checkingColor
  if (selectedAccountColor === checkingColor){
    frmRecentTransactionDetailsKA.skin = sknaccountCheckingBkg;
    frmRecentTransactionDetailsKA.titleBarWrapper.skin = sknaccountTypeChecking;

    // Set savingsColor
  } else if (selectedAccountColor === savingsColor){
    frmRecentTransactionDetailsKA.skin = sknaccountSavingsBkg;
    frmRecentTransactionDetailsKA.titleBarWrapper.skin = sknaccountTypeSavings;
    // set creditColor
  } else if (selectedAccountColor === creditColor){
    frmRecentTransactionDetailsKA.skin = sknaccountCreditBkg;
    frmRecentTransactionDetailsKA.titleBarWrapper.skin = sknaccountTypeCredit;
  } 
}

// Determines titlebar and form skin color based on accountType of selected row
// variable is set in recentTransactionsOnRowClick()
function scheduledTransactionDetailPreShow(){

  //setting Data For Pending Transaction
  var pendingObJ  = frmDepositPayLandingKA.scheduledTransactions.selectedItems;
  frmdepositchequeKA.transactionAmount.text = pendingObJ[0].transferAmount;
  frmdepositchequeKA.transactionDate.text = "Scheduled for: "+ pendingObJ[0].transferDate;
  frmdepositchequeKA.transactionName.text = pendingObJ[0].transferDescription;
  
}

//Useing in Transfer And pay Landing Page
// Determines titlebar and form skin color based on accountType of selected row
// variable is set in recentTransactionsOnRowClick()
function scheduledTransactionPreShow(){
  // set checkingColor
   if (selectedAccountColor === checkingColor){
      frmScheduledTransactionDetailsKA.skin = sknaccountCheckingBkg;
      frmScheduledTransactionDetailsKA.titleBarWrapper.skin = sknaccountTypeChecking;
     // Set savingsColor
    } else if (selectedAccountColor === savingsColor){
      frmScheduledTransactionDetailsKA.skin = sknaccountSavingsBkg;
      frmScheduledTransactionDetailsKA.titleBarWrapper.skin = sknaccountTypeSavings;
      // set creditColor
    } else if (selectedAccountColor === creditColor){
      frmScheduledTransactionDetailsKA.skin = sknaccountCreditBkg;
      frmScheduledTransactionDetailsKA.titleBarWrapper.skin = sknaccountTypeCredit;
    } 
}
