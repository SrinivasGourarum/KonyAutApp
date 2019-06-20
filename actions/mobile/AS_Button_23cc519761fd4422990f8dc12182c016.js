function AS_Button_23cc519761fd4422990f8dc12182c016(eventobject) {
    function SHOW_ALERT_onClick_7d6f3917b6494b1a86c6ac5166b7ce02_True() {
        userAllowedLocation();
    }

    function SHOW_ALERT_onClick_7d6f3917b6494b1a86c6ac5166b7ce02_False() {}

    function SHOW_ALERT_onClick_7d6f3917b6494b1a86c6ac5166b7ce02_Callback(response) {
        if (response === true) {
            SHOW_ALERT_onClick_7d6f3917b6494b1a86c6ac5166b7ce02_True();
        } else {
            SHOW_ALERT_onClick_7d6f3917b6494b1a86c6ac5166b7ce02_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Current Location",
        "yesLabel": "Allow",
        "noLabel": "Don't Allow",
        "message": "xyzBank would like to use your current location",
        "alertHandler": SHOW_ALERT_onClick_7d6f3917b6494b1a86c6ac5166b7ce02_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}