function AS_Button_45ea982e80a843c3983281d51c40b6e5(eventobject) {
    function SHOW_ALERT_onClick_7c56c84aa0b349c0ab5ccb68b23c4f3f_True() {
        closeTransactionDetailsContainer();
    }

    function SHOW_ALERT_onClick_7c56c84aa0b349c0ab5ccb68b23c4f3f_False() {}

    function SHOW_ALERT_onClick_7c56c84aa0b349c0ab5ccb68b23c4f3f_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onClick_7c56c84aa0b349c0ab5ccb68b23c4f3f_True()
        } else {
            SHOW_ALERT_onClick_7c56c84aa0b349c0ab5ccb68b23c4f3f_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Delete Scheduled Transaction?",
        "yesLabel": "Yes",
        "noLabel": "Cancel",
        "message": "Are you sure you want to delete this scheduled transaction?",
        "alertHandler": SHOW_ALERT_onClick_7c56c84aa0b349c0ab5ccb68b23c4f3f_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}