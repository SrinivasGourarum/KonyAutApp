function AS_FlexContainer_886dccf5c2a94dbe8d64797db7930807(eventobject) {
    function SHOW_ALERT_onClick_22d2cea61d854793b6bbe46e61608c0c_True() {}

    function SHOW_ALERT_onClick_22d2cea61d854793b6bbe46e61608c0c_False() {}

    function SHOW_ALERT_onClick_22d2cea61d854793b6bbe46e61608c0c_Callback(response) {
        if (response === true) {
            SHOW_ALERT_onClick_22d2cea61d854793b6bbe46e61608c0c_True();
        } else {
            SHOW_ALERT_onClick_22d2cea61d854793b6bbe46e61608c0c_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": "284-123-1234",
        "alertHandler": SHOW_ALERT_onClick_22d2cea61d854793b6bbe46e61608c0c_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}