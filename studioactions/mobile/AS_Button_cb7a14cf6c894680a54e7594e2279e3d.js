function AS_Button_cb7a14cf6c894680a54e7594e2279e3d() {
    function SHOW_ALERT_onClick_8cd2c5110764432db7105b41243087e0_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_onClick_8cd2c5110764432db7105b41243087e0_False() {}

    function SHOW_ALERT_onClick_8cd2c5110764432db7105b41243087e0_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onClick_8cd2c5110764432db7105b41243087e0_True()
        } else {
            SHOW_ALERT_onClick_8cd2c5110764432db7105b41243087e0_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT_onClick_8cd2c5110764432db7105b41243087e0_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}