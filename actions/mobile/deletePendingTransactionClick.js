function deletePendingTransactionClick(eventobject) {
    return AS_Button_c5e4e61665b941c6905eee9f8dabf764(eventobject);
}

function AS_Button_c5e4e61665b941c6905eee9f8dabf764(eventobject) {
    function SHOW_ALERT_ide_onClick_f4face644af049a6a2f680c763ddb494_True() {
        frmDepositPayLandingKA.show();
    }

    function SHOW_ALERT_ide_onClick_f4face644af049a6a2f680c763ddb494_False() {}

    function SHOW_ALERT_ide_onClick_f4face644af049a6a2f680c763ddb494_Callback(response) {
        if (response === true) {
            SHOW_ALERT_ide_onClick_f4face644af049a6a2f680c763ddb494_True();
        } else {
            SHOW_ALERT_ide_onClick_f4face644af049a6a2f680c763ddb494_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Delete Pending Transaction?",
        "yesLabel": "Yes",
        "noLabel": "Cancel",
        "message": "Are you sure you want to delete this Pending transaction?",
        "alertHandler": SHOW_ALERT_ide_onClick_f4face644af049a6a2f680c763ddb494_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}