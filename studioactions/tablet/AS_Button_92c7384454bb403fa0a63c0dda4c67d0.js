function AS_Button_92c7384454bb403fa0a63c0dda4c67d0(eventobject) {
    function SHOW_ALERT_onClick_6a9c9e4c1dbe4c4a8861dbba9db130e1_True() {
        closeTransactionDetailsContainer();
    }

    function SHOW_ALERT_onClick_6a9c9e4c1dbe4c4a8861dbba9db130e1_False() {}

    function SHOW_ALERT_onClick_6a9c9e4c1dbe4c4a8861dbba9db130e1_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onClick_6a9c9e4c1dbe4c4a8861dbba9db130e1_True()
        } else {
            SHOW_ALERT_onClick_6a9c9e4c1dbe4c4a8861dbba9db130e1_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Delete Scheduled Transaction?",
        "yesLabel": "Yes",
        "noLabel": "Cancel",
        "message": "Are you sure you want to delete this scheduled transaction?",
        "alertHandler": SHOW_ALERT_onClick_6a9c9e4c1dbe4c4a8861dbba9db130e1_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}