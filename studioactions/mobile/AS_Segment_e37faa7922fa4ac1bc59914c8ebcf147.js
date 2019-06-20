function AS_Segment_e37faa7922fa4ac1bc59914c8ebcf147() {
    function SHOW_ALERT_onRowClick_1845c8f827dd4a89ad589996a174a761_True() {}

    function SHOW_ALERT_onRowClick_1845c8f827dd4a89ad589996a174a761_False() {}

    function SHOW_ALERT_onRowClick_1845c8f827dd4a89ad589996a174a761_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onRowClick_1845c8f827dd4a89ad589996a174a761_True()
        } else {
            SHOW_ALERT_onRowClick_1845c8f827dd4a89ad589996a174a761_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": " 284-123-1234",
        "alertHandler": SHOW_ALERT_onRowClick_1845c8f827dd4a89ad589996a174a761_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}