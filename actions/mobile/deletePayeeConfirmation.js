function deletePayeeConfirmation(eventobject) {
    return AS_Button_a09ea0eef99d45bc9495aabdd528af4b(eventobject);
}

function AS_Button_a09ea0eef99d45bc9495aabdd528af4b(eventobject) {
    function SHOW_ALERT__7fe8c28ecc414395bb9566a0d1502922_True() {
        frmManagePayeeKA.show();
    }

    function SHOW_ALERT__7fe8c28ecc414395bb9566a0d1502922_False() {}

    function SHOW_ALERT__7fe8c28ecc414395bb9566a0d1502922_Callback(response) {
        if (response === true) {
            SHOW_ALERT__7fe8c28ecc414395bb9566a0d1502922_True();
        } else {
            SHOW_ALERT__7fe8c28ecc414395bb9566a0d1502922_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Delete Payee",
        "yesLabel": "Yes",
        "noLabel": "No",
        "message": "Do you want to delete the payee?",
        "alertHandler": SHOW_ALERT__7fe8c28ecc414395bb9566a0d1502922_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}