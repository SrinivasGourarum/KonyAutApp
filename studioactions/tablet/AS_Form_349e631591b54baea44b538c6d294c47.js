function AS_Form_349e631591b54baea44b538c6d294c47(eventobject) {
    function SHOW_ALERT__daec63ebd9b9467183522b805fb8fc71_True() {
        userAllowedLocation();
    }

    function SHOW_ALERT__daec63ebd9b9467183522b805fb8fc71_False() {
        locatorPostShow();
    }

    function SHOW_ALERT__daec63ebd9b9467183522b805fb8fc71_Callback(response) {
        if (response == true) {
            SHOW_ALERT__daec63ebd9b9467183522b805fb8fc71_True()
        } else {
            SHOW_ALERT__daec63ebd9b9467183522b805fb8fc71_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Current Location",
        "yesLabel": "Allow",
        "noLabel": "Don't Allow",
        "message": "xyzBank would like to use your current location",
        "alertHandler": SHOW_ALERT__daec63ebd9b9467183522b805fb8fc71_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
    locatorPostShow();
}