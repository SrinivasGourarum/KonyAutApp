function onSpendingSelected()
{
  frmMyMoneyListKA.btnSpendingKA.skin = sknandroidSegmentedTextActive;
  frmMyMoneyListKA.btnAccountsKA.skin = sknandroidSegmentedTextInactive;
  frmMyMoneyListKA.btnBudgetKA.skin = sknandroidSegmentedTextInactive;
  frmMyMoneyListKA.flxResultSpendingKA.isVisible = true;
  frmMyMoneyListKA.flxResultAccountsKA.isVisible = false;
  frmMyMoneyListKA.flxResultBudgetKA.isVisible = false;
  onClickLblMonth();
  frmMyMoneyListKA.flxSelectedKA.left = "33.33%";
}

function onAccountsSelected(){
  frmMyMoneyListKA.btnSpendingKA.skin = sknandroidSegmentedTextInactive;
  frmMyMoneyListKA.btnAccountsKA.skin = sknandroidSegmentedTextActive;
  frmMyMoneyListKA.btnBudgetKA.skin = sknandroidSegmentedTextInactive;
  frmMyMoneyListKA.flxResultSpendingKA.isVisible = false;
  frmMyMoneyListKA.flxResultAccountsKA.isVisible = true;
  frmMyMoneyListKA.flxResultBudgetKA.isVisible = false;
  frmMyMoneyListKA.flxSelectedKA.left = "0%";
}

function onBudgetSelected(){
  frmMyMoneyListKA.btnSpendingKA.skin = sknandroidSegmentedTextInactive;
  frmMyMoneyListKA.btnAccountsKA.skin = sknandroidSegmentedTextInactive;
  frmMyMoneyListKA.btnBudgetKA.skin = sknandroidSegmentedTextActive;
  frmMyMoneyListKA.flxResultSpendingKA.isVisible = false;
  frmMyMoneyListKA.flxResultAccountsKA.isVisible = false;
  frmMyMoneyListKA.flxResultBudgetKA.isVisible = true;
  frmMyMoneyListKA.flxSelectedKA.left = "66.66%";
}

function onSelectionRadioBtn(){
  if(frmMyMoneyListKA.searchSegmentedController.selectedKey == "accounts"){
    frmMyMoneyListKA.flxResultSpendingKA.isVisible = false;
  	frmMyMoneyListKA.flxResultAccountsKA.isVisible = true;
  	frmMyMoneyListKA.flxResultBudgetKA.isVisible = false;
  }
  else if(frmMyMoneyListKA.searchSegmentedController.selectedKey == "spending"){
    frmMyMoneyListKA.flxResultSpendingKA.isVisible = true;
  	frmMyMoneyListKA.flxResultAccountsKA.isVisible = false;
    frmMyMoneyListKA.flxResultBudgetKA.isVisible = false;
  }
  else if(frmMyMoneyListKA.searchSegmentedController.selectedKey == "budget"){
    frmMyMoneyListKA.flxResultSpendingKA.isVisible = false;
  	frmMyMoneyListKA.flxResultAccountsKA.isVisible = false;
  	frmMyMoneyListKA.flxResultBudgetKA.isVisible = true;
  } 
  
}

function onClickFlxImgSpending(){
   frmMyMoneyListKA.resourcesLabel.skin = sknMonthlySpending3278E6KA;
   frmMyMoneyListKA.flxJanMnthKA.isVisible = true;
   frmMyMoneyListKA.flxMonthlySpendingKA.isVisible = true;
   frmMyMoneyListKA.flxSpendingOverviewKA.isVisible = false;
   frmMyMoneyListKA.flxExpenditureKA.isVisible = false;
   frmMyMoneyListKA.flxsegMonthlyDataKA.isVisible = false; 
}

function onClickLblMonth(){
  frmMyMoneyListKA.resourcesLabel.skin = sknaccountName;
  frmMyMoneyListKA.flxJanMnthKA.isVisible = false;
  frmMyMoneyListKA.flxMonthlySpendingKA.isVisible = false;
  frmMyMoneyListKA.flxExpenditureKA.isVisible = false;
  frmMyMoneyListKA.flxsegMonthlyDataKA.isVisible = false;
  frmMyMoneyListKA.flxSpendingOverviewKA.isVisible = true;
}

function onClickflxJanMnthKA(){
  frmMyMoneyListKA.resourcesLabel.skin = sknMonthlySpending3278E6KA;
  frmMyMoneyListKA.lblMonthlySpendingKA.skin = sknMonthlySpending3278E6KA;
  frmMyMoneyListKA.flxJanMnthKA.isVisible = true;
  frmMyMoneyListKA.flxExpenditureKA.isVisible = true;
  frmMyMoneyListKA.flxMonthlySpendingKA.isVisible = false;
  frmMyMoneyListKA.flxSpendingOverviewKA.isVisible = false;
  frmMyMoneyListKA.flxsegMonthlyDataKA.isVisible = true;
  
}

function preshowMyMoney(){
  if(from == "MyMoney")
  {
   userAgent = kony.os.userAgent();
   if (userAgent === "iPhone"){
    frmMyMoneyListKA.searchSegmentedController.selectedKey = "accounts";
    frmMyMoneyListKA.flxResultSpendingKA.isVisible = false;
  	frmMyMoneyListKA.flxResultAccountsKA.isVisible = true;
  	frmMyMoneyListKA.flxResultBudgetKA.isVisible = false;
    
  }
  else{
    onAccountsSelected();
  }
 }
}