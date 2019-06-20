function AS_Button_c9ba8a1b56bd48229ee9f036f1351eea(eventobject) {
    function SHOW_ALERT_onClick_b54f1564169c47a5b017a105083f6855_True() {
        closeTransactionDetailsContainer();
    }

    function SHOW_ALERT_onClick_b54f1564169c47a5b017a105083f6855_False() {}

    function SHOW_ALERT_onClick_b54f1564169c47a5b017a105083f6855_Callback(response) {
        if (response === true) {
            SHOW_ALERT_onClick_b54f1564169c47a5b017a105083f6855_True();
        } else {
            SHOW_ALERT_onClick_b54f1564169c47a5b017a105083f6855_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Delete Scheduled Transaction?",
        "yesLabel": "Yes",
        "noLabel": "Cancel",
        "message": "Are you sure you want to delete this scheduled transaction?",
        "alertHandler": SHOW_ALERT_onClick_b54f1564169c47a5b017a105083f6855_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}