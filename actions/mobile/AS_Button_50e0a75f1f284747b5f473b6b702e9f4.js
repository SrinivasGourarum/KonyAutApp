function AS_Button_50e0a75f1f284747b5f473b6b702e9f4() {
    function SHOW_ALERT_onClick_2f2ec39a56f441668e84e2df70f74de7_True() {
        frmUnauthFeatureEnablingKA.show();
    }

    function SHOW_ALERT_onClick_2f2ec39a56f441668e84e2df70f74de7_Callback() {
        SHOW_ALERT_onClick_2f2ec39a56f441668e84e2df70f74de7_True();
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Touch ID for xyzBank",
        "yesLabel": "Cancel",
        "noLabel": null,
        "alertIcon": "touch_id_icon.png",
        "message": "Sign on with Touch ID or enter username and password.",
        "alertHandler": SHOW_ALERT_onClick_2f2ec39a56f441668e84e2df70f74de7_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}