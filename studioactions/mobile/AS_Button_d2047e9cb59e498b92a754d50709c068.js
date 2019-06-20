function AS_Button_d2047e9cb59e498b92a754d50709c068(eventobject) {
    if (from == "Deposits") frmViewApplicationKA.lblHeadingKA.text = "Fixed Deposit";
    else if (from == "Credit Cards") frmViewApplicationKA.lblHeadingKA.text = "ACME Silver Card";
    else frmViewApplicationKA.lblHeadingKA.text = from;
    frmViewApplicationKA.show();
}