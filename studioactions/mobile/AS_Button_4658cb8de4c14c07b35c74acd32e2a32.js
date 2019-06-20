function AS_Button_4658cb8de4c14c07b35c74acd32e2a32() {
    function SHOW_ALERT_onClick_ede0cca4227e48ac9673b28c68c49777_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_onClick_ede0cca4227e48ac9673b28c68c49777_False() {}

    function SHOW_ALERT_onClick_ede0cca4227e48ac9673b28c68c49777_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onClick_ede0cca4227e48ac9673b28c68c49777_True()
        } else {
            SHOW_ALERT_onClick_ede0cca4227e48ac9673b28c68c49777_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT_onClick_ede0cca4227e48ac9673b28c68c49777_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}