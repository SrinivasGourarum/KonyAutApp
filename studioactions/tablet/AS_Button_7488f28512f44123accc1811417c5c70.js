function AS_Button_7488f28512f44123accc1811417c5c70(eventobject) {
    function SHOW_ALERT_onClick_6ee58f7a8f72465cac4856e58b22499e_True() {
        closeTransactionDetailsContainer();
    }

    function SHOW_ALERT_onClick_6ee58f7a8f72465cac4856e58b22499e_False() {}

    function SHOW_ALERT_onClick_6ee58f7a8f72465cac4856e58b22499e_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onClick_6ee58f7a8f72465cac4856e58b22499e_True()
        } else {
            SHOW_ALERT_onClick_6ee58f7a8f72465cac4856e58b22499e_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Delete Scheduled Transaction?",
        "yesLabel": "Yes",
        "noLabel": "Cancel",
        "message": "Are you sure you want to delete this scheduled transaction?",
        "alertHandler": SHOW_ALERT_onClick_6ee58f7a8f72465cac4856e58b22499e_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}