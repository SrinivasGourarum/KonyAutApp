
// Sample accounts
// Sample accounts
var account1 = {
    name: "eWallet Account",
    avlBalance: "$ 2,000,000",
    acctBalance: "$ 2,000,000",
    color: checkingColor
};

var account2 = {
    name:"Savings Account",
    avlBalance:"$ 10,000,000",
    acctBalance: "$ 10,000,000",
    color: savingsColor
};

var account3 = {
    name:"Rewards Credit Card",
    avlBalance:"$ 5,000,000",
    acctBalance: "$ 5,000,000",
    color: creditColor
};

var account4 = {
    name:"Checking 8503",
    avlBalance:"$ 2,824,000",
    acctBalance: "$ 2,824,000",
    color: checkingColor
};

var billData = {
  bill1: "MMDA •• 8322",
  bill2: "HYS •• 0093",
  bill3: "CD •• 0511"
};

/*var billData = {
  bill1: "City of Austin 8781",
  bill2: "Allstate Insurance 4546",
  bill3: "Shell Card 9832"
};
*/

//Used For ChangeDateRange for preShow
var initialChangeDateRangeTypes = [{
    lblNameKA: "This Month",
    imgicontick:{src:"check_blue.png",isVisible: true}
},{
    lblNameKA: "Last Month",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Last 30 Days",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Last 90 Days",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "This Year",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Last Year",
    imgicontick:{src:"",isVisible: false}
},
 ];

var changeDateRangeTypes = [{
    lblNameKA: "This Month",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Last Month",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Last 30 Days",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Last 90 Days",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "This Year",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Last Year",
    imgicontick:{src:"",isVisible: false}
},
];

//Used For AccountTypeChecking for preShow
var initialExternalAccountTypes = [{
    lblNameKA: "Business Checking",
    imgicontick:{src:"check_blue.png",isVisible: true}
},{
    lblNameKA: "Business Savings",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Personal Checking",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Personal Savings",
    imgicontick:{src:"",isVisible: false}
},
 ];

var externalAccountTypes = [{
    lblNameKA: "Business Checking",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Business Savings",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Personal Checking",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Personal Savings",
    imgicontick:{src:"",isVisible: false}
},
];

var initialFrequencyTypes = [{
    lblNameKA: "One Time",
    imgicontick:{src:"check_blue.png",isVisible: true}
},{
    lblNameKA: "Once a Week",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Every 2 Weeks",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Once a Month",
    imgicontick:{src:"",isVisible: false}
},
 ];

var frequencyTypes = [{
    lblNameKA: "One Time",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Once a Week",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Every 2 Weeks",
    imgicontick:{src:"",isVisible: false}
},{
    lblNameKA: "Once a Month",
    imgicontick:{src:"",isVisible: false}
},
];



//load AddExternal Data
function loadFrequencyTypesPreShow()
{
  frmNewTransferKA.frequencySegment.setData(initialFrequencyTypes);
}

function loadFrequencyTypes()
{
  frmNewTransferKA.frequencySegment.setData(frequencyTypes);
}


//load AddExternal Data
function loadExternalAccountTypesPreShow()
{
  frmAddExternalAccountKA.externalAccountTypeSegment.setData(initialExternalAccountTypes); 
}
//load AddExternal Data
function loadExternalAccountTypes()
{
  frmAddExternalAccountKA.externalAccountTypeSegment.setData(externalAccountTypes); 
}

// Called on accountLanding preShow on accounts.js

// Called on frmNewTransferKA preShow on transfer.js
function loadNewTransferData() {
  	frmNewTransferKA.toColorAccount1.backgroundColor = account1.color;
	  frmNewTransferKA.toNameAccount1.text = account1.name;
	  frmNewTransferKA.toAmountAccount1.text = account1.avlBalance;
  	frmNewTransferKA.colorAccount2.backgroundColor = account2.color;
  	frmNewTransferKA.nameAccount2.text = account2.name;
	  frmNewTransferKA.amountAccount2.text = account2.avlBalance;
  
  	frmNewTransferKA.fromColorAccount1.backgroundColor = account1.color;
	  frmNewTransferKA.fromNameAccount1.text = account1.name;
	  frmNewTransferKA.fromAmountAccount1.text = account1.avlBalance;
  	frmNewTransferKA.fromColorAccount2.backgroundColor = account2.color;
  	frmNewTransferKA.fromNameAccount2.text = account2.name;
	  frmNewTransferKA.fromAmountAccount2.text = account2.avlBalance;
}

// Called on frmNewPayPersonKA preShow on payPerson.js
function loadNewPayPersonData() {  
  	frmNewPayPersonKA.fromColorAccount1.backgroundColor = account1.color;
	  frmNewPayPersonKA.fromNameAccount1.text = account1.name;
	  frmNewPayPersonKA.fromAmountAccount1.text = account1.avlBalance;
  	frmNewPayPersonKA.fromColorAccount2.backgroundColor = account4.color;
  	frmNewPayPersonKA.fromNameAccount2.text = account4.name;
	  frmNewPayPersonKA.fromAmountAccount2.text = account4.avlBalance;
}

// Called on frmNewPayPersonKA preShow on payPerson.js
function loadDepositData() {  
  	frmNewDepositKA.toColorAccount1.backgroundColor = account1.color;
	  frmNewDepositKA.toNameAccount1.text = account1.name;
	  frmNewDepositKA.toAmountAccount1.text = account1.avlBalance;
  	frmNewDepositKA.toColorAccount2.backgroundColor = account4.color;
  	frmNewDepositKA.toNameAccount2.text = account4.name;
	  frmNewDepositKA.toAmountAccount2.text = account4.avlBalance;
}

function loadNewBillData() {  
  	frmNewBillKA.toNameAccount1.text = billData.bill1;
	  frmNewBillKA.toNameAccount2.text = billData.bill2;
  
  	frmNewBillKA.fromColorAccount1.backgroundColor = account1.color;
	  frmNewBillKA.fromNameAccount1.text = account1.name;
	  frmNewBillKA.fromAmountAccount1.text = account1.avlBalance;
  	frmNewBillKA.fromColorAccount2.backgroundColor = account2.color;
  	frmNewBillKA.fromNameAccount2.text = account2.name;
	  frmNewBillKA.fromAmountAccount2.text = account2.avlBalance;
}



// Transfer & Pay Recent Segment Data



var twoyeardepositTransactions = [
{
    transactionName: "Account Opened",
    transactionAmount:"$25,000",
  	transactionDate: "Nov 20, 2017",
   	lblSepKA: {skin: "sknLineEDEDEDKA" },
    AccountTypeKA : {backgroundColor: depositColor},
    lblAccountTypeKA: {backgroundColor: depositColor}
}];



