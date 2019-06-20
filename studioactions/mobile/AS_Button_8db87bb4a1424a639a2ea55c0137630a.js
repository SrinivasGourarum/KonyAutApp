function AS_Button_8db87bb4a1424a639a2ea55c0137630a(eventobject) {
    if (from == "Checking Account" || from == "Savings Account" || from == "Mortgage Account") {
        frmAcmeCreditCardKA.lblHeadingKA.text = from;
        frmAcmeCreditCardKA.show();
    } else {
        if (from == "Deposits") {
            frmCreditCardsKA.segDepositsKA.isVisible = true;
            frmCreditCardsKA.moreResourcesSegment.isVisible = false;
        } else {
            frmCreditCardsKA.moreResourcesSegment.isVisible = true;
            frmCreditCardsKA.segDepositsKA.isVisible = false;
        }
        frmCreditCardsKA.lblHeadingKA.text = from;
        frmCreditCardsKA.show();
    }
}