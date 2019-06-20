function AS_Button_8c1390dc8c564c3da66e4c642531ea5a(eventobject) {
    if (from == "Deposits") frmConfirmationCardKA.lblHeadingKA.text = "Fixed Deposit";
    else if (from == "Credit Cards") frmConfirmationCardKA.lblHeadingKA.text = "ACME Silver Card";
    else frmConfirmationCardKA.lblHeadingKA.text = from;
    frmConfirmationCardKA.show();
}