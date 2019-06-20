function deletePayeeConfirmationBillPay(eventobject) {
    return AS__cb4f5b747f6640438a6af7b0f471132d(eventobject);
}

function AS__cb4f5b747f6640438a6af7b0f471132d(eventobject) {
    function SHOW_ALERT__032d8569fc3244699bf25a2f55d8f298_True() {
        frmNewBillKA.show();
    }

    function SHOW_ALERT__032d8569fc3244699bf25a2f55d8f298_False() {}

    function SHOW_ALERT__032d8569fc3244699bf25a2f55d8f298_Callback(response) {
        if (response === true) {
            SHOW_ALERT__032d8569fc3244699bf25a2f55d8f298_True();
        } else {
            SHOW_ALERT__032d8569fc3244699bf25a2f55d8f298_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Delete Payee",
        "yesLabel": "Yes",
        "noLabel": "No",
        "message": "Do you want to delete the payee?",
        "alertHandler": SHOW_ALERT__032d8569fc3244699bf25a2f55d8f298_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}