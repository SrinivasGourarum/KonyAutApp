function conformDepositClick(eventobject) {
    return AS_Button_c3355bd1b7da489e83c6d1b493dded87(eventobject);
}

function AS_Button_c3355bd1b7da489e83c6d1b493dded87(eventobject) {
    frmConfirmDepoist.lblAmount.text = "$" + frmNewDepositKA.amountTextField.text;
    frmConfirmDepoist.lblNotes.text = frmNewDepositKA.noteTextfield.text;
    frmConfirmDepoist.lblAccountType.text = frmNewDepositKA.toNamePick.text;
    frmConfirmDepoist.show();
}