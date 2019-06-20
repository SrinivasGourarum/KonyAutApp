function AS_Button_c2bcc8c5f1d54d96b49f95670b936ec4(eventobject) {
    function SHOW_ALERT__704bf11f3f034c26ab4efd0a3abd0f52_True() {
        frmUserSettingsPIN.btnTouch.skin = "btnTouchIDN";
        frmUserSettingsTouchIdKA.btnTouch.skin = "btnTouchIDN";
        frmDeviceRegistrationDemo2.btnTouch.skin = "btnTouchIDN";
        deviceRegistration = 0;
        frmLoginKA.show();
    }

    function SHOW_ALERT__704bf11f3f034c26ab4efd0a3abd0f52_Callback() {
        SHOW_ALERT__704bf11f3f034c26ab4efd0a3abd0f52_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "INFO",
        "yesLabel": "OK",
        "message": "Device De-Registered Successfully",
        "alertHandler": SHOW_ALERT__704bf11f3f034c26ab4efd0a3abd0f52_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}