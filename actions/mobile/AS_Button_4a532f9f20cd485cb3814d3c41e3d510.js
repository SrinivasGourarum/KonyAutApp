function AS_Button_4a532f9f20cd485cb3814d3c41e3d510() {
    function SHOW_ALERT__bc7e10304c3e46da8602dc19c4d2c343_True() {
        userAllowedLocation();
    }

    function SHOW_ALERT__bc7e10304c3e46da8602dc19c4d2c343_False() {}

    function SHOW_ALERT__bc7e10304c3e46da8602dc19c4d2c343_Callback(response) {
        if (response === true) {
            SHOW_ALERT__bc7e10304c3e46da8602dc19c4d2c343_True();
        } else {
            SHOW_ALERT__bc7e10304c3e46da8602dc19c4d2c343_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Current Location",
        "yesLabel": "Allow",
        "noLabel": "Don't Allow",
        "message": "xyzBank would like to use your current location",
        "alertHandler": SHOW_ALERT__bc7e10304c3e46da8602dc19c4d2c343_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}