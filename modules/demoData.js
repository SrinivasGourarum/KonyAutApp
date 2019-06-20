var result ={
  "AccountListTransaction": [
      {
       "transactionList": [
        {
          "transamountCurr": "$",
          "description": "Direct Energy Power Bill",
          "transamount": "-1,000",
          "transDateEffective": "03/09/2017"
          //,"type":"cheque"
        },
        {
          "transamountCurr": "$",
          "description": "Mobile/Email Transfer to John Wu",
          "transamount": "-2,000",
          "transDateEffective": "03/07/2017"
        },
        {
          "transamountCurr": "$",
          "description": "ABC Bank Deposit",
          "transamount": "1,000",
          "transDateEffective": "03/02/2017"
        },
        {
          "transamountCurr": "$",
          "description": "Bill Pay to Credit Card 4345",
         "transamount": "200",
          "transDateEffective": "03/12/2017"
        },
        {
          "transamountCurr": "$",
          "description": "Transferred to SAV 2098",
          "transamount": "500",
          "transDateEffective": "02/25/2017"
        }
      ]
    }
  ],        
  "Accounts": [
    {
      "availableBalanceValue": "10,000,000",
      "accountID": "039037292927",
      "availableBalanceCurr": "$",
      "description": "Savings Account",
      "type": "Savings",
      "acctBalance":"4,153.84",
      "acctBalanceCurr": "$"
    },
    {
      "availableBalanceValue": "2,000,000",
      "accountID": "039037292927",
      "availableBalanceCurr": "$",
      "description": "eWallet Account",
      "type": "Checking",
      "acctBalance":"2,000,000",
      "acctBalanceCurr": "$"
    },
    {
      "availableBalanceValue": "-5,000,000",
      "accountID": "0390372928791",
      "availableBalanceCurr": "$",
      "description": "Rewards Credit Card",
      "type": "CreditCard",
      "acctBalance":"5,000,000.00",
      "acctBalanceCurr": "USD"
    },
    
    {
      "availableBalanceValue": "22,000,000",
      "accountID": "039037297399",
      "availableBalanceCurr": "$",
      "description": "Fixed Deposit 5 Yrs",
      "type": "Deposit",
      "maturityDate":"11/20/2017"
    }/*,
    {
      "availableBalanceValue": "50,000",
      "accountID": "039037292927",
      "availableBalanceCurr": "USD",
      "description": "15 Year Mortgage 2388",
      "type": "Mortgage",
      "interestRate": "3.975%"
    }*/
    ],
    "Locations": [
    {
      "addressLine1": "Kony Financial",
      "addressLine2": "Altamonte Springs, FL, USA",
      "distanceLabel": "1.0 miles",
      "type": "ATM",
      "informationTitle": "ATM",
      "latitude": "28.661109", 
      "longitude": "-81.365624"
    },
  {
      "addressLine1": "Bank",
      "addressLine2": "Orlando, FL, United States",
      "distanceLabel": "1.2 miles",
      "type": "ATM",
      "informationTitle": "ATM",
      "latitude": "28.320000", 
      "longitude": "-81.230000"
    },
  {
      "addressLine1": "Bank",
      "addressLine2": "Longwood, FL, USA",
      "distanceLabel": "2.0 miles",
      "type": "BRANCH",
      "informationTitle": "BRANCH",
      "latitude": "28.690406", 
      "longitude": "-81.404705"
    }/*,
  {
      "addressLine1": "3201 Be Caves Rd",
      "addressLine2": "Austin, TX 78701",
      "distanceLabel": "4.7 miles",
      "type": "ATM",
      "informationTitle": "West Woods Shopping Center",
      "latitude": "30.457669",
      "longitude": "-97.789942"
    },
  {
      "addressLine1": "3300 Be Caves Rd STE 795",
      "addressLine2": "Austin, TX 78746",
      "distanceLabel": "4.8 miles",
      "type": "BRANCH",
      "informationTitle": "Finacial Center SouthCross Plaza",
      "latitude": "30.296221",
      "longitude": "-97.829938"
    },
  {
      "addressLine1": "3900 N Interregional Hwy",
      "addressLine2": "Austin, TX 78751",
      "distanceLabel": "7.9 miles",
      "type": "BRANCH",
      "informationTitle": "Finacial Center Hancock",
      "latitude": "30.307333",
      "longitude": "-97.711842"
    },
    {
      "addressLine1": "3600 N Presidental Blvd",
      "addressLine2": "Austin, TX 78719",
      "distanceLabel": "8.2 miles",
      "type": "ATM",
      "informationTitle": "Austin Bergstorm Airport -Office",
      "latitude": "30.1974292",
      "longitude": "-97.6663058"
    }*/
    ],
   "contact":[
     {
       "typeOfContact" : "Facetime Video Call",
       "phoneNumber" : "Facetime" 
     },
     {
       "typeOfContact" : "Skype Call",
       "phoneNumber" : "Skype" 
     },
     {
       "typeOfContact" : "Technical Support",
       "phoneNumber" : "284-123-1236" 
     },
     {
       "typeOfContact" : "Bill Payment",
       "phoneNumber" : "284-123-1237" 
     }
   ],
  "TransferAndPayments": [
      
        {
          "transamountCurr": "$",
          "description": "Direct Energy Power Bill",
          "transamount": "$1,000",
          "transDate": "Mar 13,2017",
          "type": "Recent",
          "acntType":"Checking"
        },
  {
          "transamountCurr": "$",
          "description": "Mobile POS DEBIT",
          "transamount": "$400",
          "transDate": "Mar 10,2017",
          "type": "Recent",
          "acntType":"Savings"
        },
  {
          "transamountCurr": "$",
          "description": "ATW 532676XXXXXX4381 Withdrawl",
          "transamount": "$2,000",
          "transDate": "Mar 08,2017",
          "type": "Recent",
          "acntType":"Checking"
        },
  {
          "transamountCurr": "$",
          "description": "Bill Pay to Credit Card 4345",
          "transamount": "$5,000",
          "transDate": "Mar 03,2017",
          "type": "Recent",
          "acntType":"CreditCard"
        },{
          "transamountCurr": "$",
          "description": "Bill Pay to Telekomsel 6868",
          "transamount": "$100",
          "transDate": "Feb 27,2017",
          "type": "Recent",
          "acntType":"Savings"
        },
  {
          "transamountCurr": "$",
          "description": "Mobile/Email Transfer to John Wu",
          "transamount": "$300",
          "transDate": "Feb 13,2017",
          "type": "Recent",
          "acntType":"Checking"
        },
     {
          "transamountCurr": "$",
          "description": "Recurring Monthly Payment to MNC Loan",
          "transamount": "$1,000",
          "transDate": "Mar 19,2017",
          "type": "Scheduled",
          "acntType":"Savings"
        }
   
],
  "Deposits": [
      
        {
          "transamountCurr": "USD",
          "description": "AmEx 6779 Mobile Deposit",
          "transamount": "49.99",
          "transDate": "Mar 14,2017",
          "type": "Recent",
          "acntType":"Checking"
        },
  {
          "transamountCurr": "USD",
          "description": "Acme Bank 4876 Mobile Deposit",
          "transamount": "15.90",
          "transDate": "Mar 12,2017",
          "type": "Recent",
          "acntType":"Savings"
        },
  {
          "transamountCurr": "USD",
          "description": "BofA 3487 Mobile Deposit",
          "transamount": "250.00",
          "transDate": "Mar 10,2017",
          "type": "Recent",
          "acntType":"Checking"
        },
  {
          "transamountCurr": "USD",
          "description": "Acme Bank 4872 Mobile Deposit",
          "transamount": "10.00",
          "transDate": "Feb 26,2017",
          "type": "Recent",
          "acntType":"CreditCard"
        },{
          "transamountCurr": "USD",
          "description": "AmEx 6772 Mobile Deposit",
          "transamount": "50.00",
          "transDate": "Feb 10,2017",
          "type": "Recent",
          "acntType":"Savings"
        },
  {
          "transamountCurr": "USD",
          "description": "BofA 3481 Mobile Deposit",
          "transamount": "29.99",
          "transDate": "Feb 10,2017",
          "type": "Recent",
          "acntType":"Checking"
        },
     {
          "transamountCurr": "USD",
          "description": "Citibank 1209 Mobile Deposit",
          "transamount": "100.50",
          "transDate": "3/16/2017",
          "type": "Scheduled",
          "acntType":"Savings"
        },
  {
          "transamountCurr": "USD",
          "description": "AmEx 6771 Mobile Deposit",
          "transamount": "15.90",
          "transDate": "3/15/2017",
          "type": "Scheduled",
          "acntType":"Checking"
        },
  {
          "transamountCurr": "USD",
          "description": "Acme Bank 4872 Mobile Deposit",
          "transamount": "35.00",
          "transDate": "3/15/2017",
          "type": "Scheduled",
          "acntType":"Savings"
        },
  {
          "transamountCurr": "USD",
          "description": "BofA 3487 Mobile Deposit",
          "transamount": "10.00",
          "transDate": "3/12/2017",
          "type": "Scheduled",
          "acntType":"Checking"
        },
  {
          "transamountCurr": "USD",
          "description": "Citibank 1201 Mobile Deposit",
          "transamount": "45.34",
          "transDate": "3/11/2017",
          "type": "Scheduled",
          "acntType":"Savings"
        },
  {
          "transamountCurr": "USD",
          "description": "BofA 3481 Mobile Deposit",
          "transamount": "29.99",
          "transDate": "3/10/2017",
          "type": "Scheduled",
          "acntType":"Checking"
        }
   
],
   "registeredPayees" :[
  {
     "transactionName": "John Wu",
     "transactionDate": "E-mail: john.wu@gmail.com"
  },
  {
     "transactionName": "Hasan Shah",
     "transactionDate": "Ph: +62 7920349346"
  },
  {
     "transactionName": "Emily Monroe",
     "transactionDate": "E-mail: emilymon@yahoo.com"
  },
  {
     "transactionName": "Satya Vemuri",
     "transactionDate": "Ph: +62 7290182892"
  }
],
  "myContactList" :[
  {
     "transactionName": "Mrigank Sharma",
     "transactionDate": "Ph: +62 7290182835"
  },
  {
     "transactionName": "Andy Barns",
     "transactionDate": "Ph: +62 7290182892"
  },
  {
     "transactionName": "Sarah Collins",
     "transactionDate": "Ph: +62 7290182892"
  },
  {
     "transactionName": "Kurt Steinle",
     "transactionDate": "Ph: +62 7290182892"
  },
  {
     "transactionName": "Bill Reagan",
     "transactionDate": "Ph: +62 7290182892"
  }/*,
  {
     "transactionName": "Satish Kamat",
     "transactionDate": "Ph:650-645-0173"
  },
  {
     "transactionName": "William Yee",
     "transactionDate": "Ph:650-645-1840"
  },
  {
     "transactionName": "Melinda Farrell",
     "transactionDate": "Ph:650-621-9289"
  }*/
],
  "unCategorised" :[
    {
     "transactionName": "Bill Pay to AmericanExpress 6868",
     "transactionDate": "Jan 29, 2017",
     "transactionAmount":"240.00",
      "transamountCurr": "USD"
  },
  {
     "transactionName": "Mobile/Email Transfer to John Wu",
     "transactionDate": "Jan 10, 2017",
     "transactionAmount":"30.00",
      "transamountCurr": "USD"
  },
  {
    "transactionName": "Payment to City Of Austin",
     "transactionDate": "Jan 8, 2017",
     "transactionAmount":"10.00",
      "transamountCurr": "USD"
  },
  {
     "transactionName": "Payment to City Of Austin",
     "transactionDate": "Jan 7, 2017",
     "transactionAmount":"10.00",
      "transamountCurr": "USD"
  },
    {
     "transactionName": "Bill Pay to AmericanExpress 6868",
     "transactionDate": "Jan 7, 2017",
     "transactionAmount":"12.00",
      "transamountCurr": "USD"
  },
  {
     "transactionName": "Mobile/Email Transfer to John ",
     "transactionDate": "Jan 6, 2017",
     "transactionAmount":"22.00",
      "transamountCurr": "USD"
  },
  {
     "transactionName": "Payment to City Of Austin",
     "transactionDate": "Jan 4, 2017",
     "transactionAmount":"15.00",
      "transamountCurr": "USD"
  },
    {
     "transactionName": "Bill Pay to AmericanExpress 6868",
     "transactionDate": "Jan 2, 2017",
     "transactionAmount":"12.00",
      "transamountCurr": "USD"
  } 
  ]
}

