function AS_Form_4745b0cf680149a293d213e619aa1edf() {
    function SHOW_ALERT__7a4a46e722a04b6fb420b9120cf71176_True() {
        userAllowedLocation();
    }

    function SHOW_ALERT__7a4a46e722a04b6fb420b9120cf71176_False() {}
    locatorInit();

    function SHOW_ALERT__7a4a46e722a04b6fb420b9120cf71176_Callback(response) {
        if (response == true) {
            SHOW_ALERT__7a4a46e722a04b6fb420b9120cf71176_True()
        } else {
            SHOW_ALERT__7a4a46e722a04b6fb420b9120cf71176_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Current Location",
        "yesLabel": "Allow",
        "noLabel": "Don't Allow",
        "message": "Bank would like to use your current location",
        "alertHandler": SHOW_ALERT__7a4a46e722a04b6fb420b9120cf71176_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}