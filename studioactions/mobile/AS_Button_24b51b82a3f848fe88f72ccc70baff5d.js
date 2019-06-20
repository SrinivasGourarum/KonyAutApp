function AS_Button_24b51b82a3f848fe88f72ccc70baff5d(eventobject) {
    function SHOW_ALERT__ab6d4761df504eea9c38d62dde7e3aea_True() {
        frmNewBillKA.show();
    }

    function SHOW_ALERT__ab6d4761df504eea9c38d62dde7e3aea_False() {}

    function SHOW_ALERT__ab6d4761df504eea9c38d62dde7e3aea_Callback(response) {
        if (response == true) {
            SHOW_ALERT__ab6d4761df504eea9c38d62dde7e3aea_True()
        } else {
            SHOW_ALERT__ab6d4761df504eea9c38d62dde7e3aea_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "INFO",
        "yesLabel": "YES",
        "noLabel": "NO",
        "message": "Are you sure you want to cancel?",
        "alertHandler": SHOW_ALERT__ab6d4761df504eea9c38d62dde7e3aea_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}