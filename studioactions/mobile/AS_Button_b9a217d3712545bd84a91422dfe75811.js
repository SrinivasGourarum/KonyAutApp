function AS_Button_b9a217d3712545bd84a91422dfe75811() {
    function SHOW_ALERT_onClick_78bfbf8631534620b33e8694a7d2e8ac_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_onClick_78bfbf8631534620b33e8694a7d2e8ac_False() {}

    function SHOW_ALERT_onClick_78bfbf8631534620b33e8694a7d2e8ac_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onClick_78bfbf8631534620b33e8694a7d2e8ac_True()
        } else {
            SHOW_ALERT_onClick_78bfbf8631534620b33e8694a7d2e8ac_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT_onClick_78bfbf8631534620b33e8694a7d2e8ac_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}