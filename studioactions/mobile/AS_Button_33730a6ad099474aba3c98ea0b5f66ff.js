function AS_Button_33730a6ad099474aba3c98ea0b5f66ff(eventobject) {
    function SHOW_ALERT_onClick_352d68500895493788d708340cf32ba4_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_onClick_352d68500895493788d708340cf32ba4_False() {}

    function SHOW_ALERT_onClick_352d68500895493788d708340cf32ba4_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onClick_352d68500895493788d708340cf32ba4_True()
        } else {
            SHOW_ALERT_onClick_352d68500895493788d708340cf32ba4_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT_onClick_352d68500895493788d708340cf32ba4_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}