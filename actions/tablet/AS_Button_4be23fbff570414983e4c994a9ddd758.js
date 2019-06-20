function AS_Button_4be23fbff570414983e4c994a9ddd758(eventobject) {
    function SHOW_ALERT_onClick_c1e36e61b1d04ec9a4f19d3a1c4f9dbc_True() {
        closeTransactionDetailsContainer();
    }

    function SHOW_ALERT_onClick_c1e36e61b1d04ec9a4f19d3a1c4f9dbc_False() {}

    function SHOW_ALERT_onClick_c1e36e61b1d04ec9a4f19d3a1c4f9dbc_Callback(response) {
        if (response === true) {
            SHOW_ALERT_onClick_c1e36e61b1d04ec9a4f19d3a1c4f9dbc_True();
        } else {
            SHOW_ALERT_onClick_c1e36e61b1d04ec9a4f19d3a1c4f9dbc_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Delete Scheduled Transaction?",
        "yesLabel": "Yes",
        "noLabel": "Cancel",
        "message": "Are you sure you want to delete this scheduled transaction?",
        "alertHandler": SHOW_ALERT_onClick_c1e36e61b1d04ec9a4f19d3a1c4f9dbc_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}