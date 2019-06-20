function AS_Button_5f42708d59e2492b9066362cd5c9e1c1() {
    function SHOW_ALERT__06cb54766c1a4988bf6e21b5e97634a3_True() {
        frmUnauthFeatureEnablingKA.show();
    }

    function SHOW_ALERT__06cb54766c1a4988bf6e21b5e97634a3_Callback() {
        SHOW_ALERT__06cb54766c1a4988bf6e21b5e97634a3_True();
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Touch ID for xyzBank",
        "yesLabel": "Cancel",
        "noLabel": null,
        "alertIcon": "touch_id_icon.png",
        "message": "Sign on with Touch ID or enter username and password.",
        "alertHandler": SHOW_ALERT__06cb54766c1a4988bf6e21b5e97634a3_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}