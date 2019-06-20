function AS_Button_26527d3976504a65a939f6d141156695(eventobject) {
    function SHOW_ALERT__8920f3dd7a8f4311950446f4c900189d_True() {
        userAllowedLocation();
    }

    function SHOW_ALERT__8920f3dd7a8f4311950446f4c900189d_False() {}

    function SHOW_ALERT__8920f3dd7a8f4311950446f4c900189d_Callback(response) {
        if (response == true) {
            SHOW_ALERT__8920f3dd7a8f4311950446f4c900189d_True()
        } else {
            SHOW_ALERT__8920f3dd7a8f4311950446f4c900189d_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Current Location",
        "yesLabel": "Allow",
        "noLabel": "Don't Allow",
        "message": "xyzBank would like to use your current location",
        "alertHandler": SHOW_ALERT__8920f3dd7a8f4311950446f4c900189d_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}