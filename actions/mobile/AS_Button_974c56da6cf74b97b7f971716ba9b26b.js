function AS_Button_974c56da6cf74b97b7f971716ba9b26b() {
    function SHOW_ALERT_onClick_6396bb7d00d248f4b415c4f13d2dcabf_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_onClick_6396bb7d00d248f4b415c4f13d2dcabf_False() {}

    function SHOW_ALERT_onClick_6396bb7d00d248f4b415c4f13d2dcabf_Callback(response) {
        if (response === true) {
            SHOW_ALERT_onClick_6396bb7d00d248f4b415c4f13d2dcabf_True();
        } else {
            SHOW_ALERT_onClick_6396bb7d00d248f4b415c4f13d2dcabf_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT_onClick_6396bb7d00d248f4b415c4f13d2dcabf_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}