function AS_Button_fa01646d2d15419caa229c46f635035c() {
    function SHOW_ALERT_onClick_bbfeba408a15400fab1203d1348c3ba5_True() {}

    function SHOW_ALERT_onClick_bbfeba408a15400fab1203d1348c3ba5_False() {}

    function SHOW_ALERT_onClick_bbfeba408a15400fab1203d1348c3ba5_Callback(response) {
        if (response === true) {
            SHOW_ALERT_onClick_bbfeba408a15400fab1203d1348c3ba5_True();
        } else {
            SHOW_ALERT_onClick_bbfeba408a15400fab1203d1348c3ba5_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "You are leaving the xyzBank Mobile App",
        "yesLabel": "OK",
        "noLabel": "Cancel",
        "message": "to open directions in Apple Maps.",
        "alertHandler": SHOW_ALERT_onClick_bbfeba408a15400fab1203d1348c3ba5_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}