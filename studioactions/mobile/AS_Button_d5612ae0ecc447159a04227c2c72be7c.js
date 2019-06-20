function AS_Button_d5612ae0ecc447159a04227c2c72be7c(eventobject) {
    function SHOW_ALERT__1a369bc790af4918be079160dc03d5bb_True() {}

    function SHOW_ALERT__1a369bc790af4918be079160dc03d5bb_False() {}

    function SHOW_ALERT__1a369bc790af4918be079160dc03d5bb_Callback(response) {
        if (response == true) {
            SHOW_ALERT__1a369bc790af4918be079160dc03d5bb_True()
        } else {
            SHOW_ALERT__1a369bc790af4918be079160dc03d5bb_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "You are leaving the PT. Bank Rakyat Indonesia (Persero) Tbk Mobile App",
        "yesLabel": "OK",
        "noLabel": "Cancel",
        "message": "to open directions in Maps.",
        "alertHandler": SHOW_ALERT__1a369bc790af4918be079160dc03d5bb_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}