function AS_Button_236f01f7d36c4c9f8edfd4786f787f22(eventobject) {
    function SHOW_ALERT__20e919b47d194327851ec0a551fb87ca_True() {
        undefined.show();
    }

    function SHOW_ALERT__20e919b47d194327851ec0a551fb87ca_Callback() {
        SHOW_ALERT__20e919b47d194327851ec0a551fb87ca_True();
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Touch ID for xyzBank",
        "yesLabel": "Cancel",
        "alertIcon": "touch_id_icon.png",
        "message": "Sign on with Touch ID or enter username and password.",
        "alertHandler": SHOW_ALERT__20e919b47d194327851ec0a551fb87ca_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}