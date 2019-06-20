function AS_Button_91ec169ecb1e411f9efbf2d94ee7d237(eventobject) {
    function SHOW_ALERT__beb558f0e1c54afa8013dbf77f1af278_True() {}

    function SHOW_ALERT__beb558f0e1c54afa8013dbf77f1af278_False() {}

    function SHOW_ALERT__beb558f0e1c54afa8013dbf77f1af278_Callback(response) {
        if (response === true) {
            SHOW_ALERT__beb558f0e1c54afa8013dbf77f1af278_True();
        } else {
            SHOW_ALERT__beb558f0e1c54afa8013dbf77f1af278_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": "251-632-6988",
        "alertHandler": SHOW_ALERT__beb558f0e1c54afa8013dbf77f1af278_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}