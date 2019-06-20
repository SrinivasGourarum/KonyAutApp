function AS_FlexContainer_c7a9d8e7edb94758b15792e82bd598af(eventobject) {
    function SHOW_ALERT_ide_onClick_d8266b59de6f4036a21f9ccbba45745c_True() {}

    function SHOW_ALERT_ide_onClick_d8266b59de6f4036a21f9ccbba45745c_False() {}

    function SHOW_ALERT_ide_onClick_d8266b59de6f4036a21f9ccbba45745c_Callback(response) {
        if (response == true) {
            SHOW_ALERT_ide_onClick_d8266b59de6f4036a21f9ccbba45745c_True()
        } else {
            SHOW_ALERT_ide_onClick_d8266b59de6f4036a21f9ccbba45745c_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": "284-123-1234",
        "alertHandler": SHOW_ALERT_ide_onClick_d8266b59de6f4036a21f9ccbba45745c_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}