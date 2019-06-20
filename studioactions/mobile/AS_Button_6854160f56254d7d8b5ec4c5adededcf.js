function AS_Button_6854160f56254d7d8b5ec4c5adededcf(eventobject) {
    function SHOW_ALERT_onClick_9e0562ca085c4d23aeedd3ae90a4856a_True() {
        frmUnauthFeatureEnablingKA.show();
    }

    function SHOW_ALERT_onClick_9e0562ca085c4d23aeedd3ae90a4856a_Callback() {
        SHOW_ALERT_onClick_9e0562ca085c4d23aeedd3ae90a4856a_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Touch ID for xyzBank",
        "yesLabel": "Cancel",
        "noLabel": null,
        "alertIcon": "touch_id_icon.png",
        "message": "Sign on with Touch ID or enter username and password.",
        "alertHandler": SHOW_ALERT_onClick_9e0562ca085c4d23aeedd3ae90a4856a_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}