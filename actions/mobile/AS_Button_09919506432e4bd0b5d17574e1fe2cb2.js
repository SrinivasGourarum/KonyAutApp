function AS_Button_09919506432e4bd0b5d17574e1fe2cb2() {
    function SHOW_ALERT_onClick_8d2d4289b15146cb9329270156ea59cb_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_onClick_8d2d4289b15146cb9329270156ea59cb_False() {}

    function SHOW_ALERT_onClick_8d2d4289b15146cb9329270156ea59cb_Callback(response) {
        if (response === true) {
            SHOW_ALERT_onClick_8d2d4289b15146cb9329270156ea59cb_True();
        } else {
            SHOW_ALERT_onClick_8d2d4289b15146cb9329270156ea59cb_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "yes",
        "alertHandler": SHOW_ALERT_onClick_8d2d4289b15146cb9329270156ea59cb_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}