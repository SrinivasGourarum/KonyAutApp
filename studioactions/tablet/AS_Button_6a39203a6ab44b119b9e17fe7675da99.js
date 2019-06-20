function AS_Button_6a39203a6ab44b119b9e17fe7675da99(eventobject) {
    function SHOW_ALERT__6d3a317dd23e461e8aff1c39e2861c8e_True() {}

    function SHOW_ALERT__6d3a317dd23e461e8aff1c39e2861c8e_False() {}

    function SHOW_ALERT__6d3a317dd23e461e8aff1c39e2861c8e_Callback(response) {
        if (response == true) {
            SHOW_ALERT__6d3a317dd23e461e8aff1c39e2861c8e_True()
        } else {
            SHOW_ALERT__6d3a317dd23e461e8aff1c39e2861c8e_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "You are leaving the xyzBank Mobile App",
        "yesLabel": "OK",
        "noLabel": "Cancel",
        "message": "to open directions in Maps.",
        "alertHandler": SHOW_ALERT__6d3a317dd23e461e8aff1c39e2861c8e_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}