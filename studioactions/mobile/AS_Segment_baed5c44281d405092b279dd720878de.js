function AS_Segment_baed5c44281d405092b279dd720878de() {
    function SHOW_ALERT_onRowClick_ca1a45c4e040437984788ee398871064_True() {}

    function SHOW_ALERT_onRowClick_ca1a45c4e040437984788ee398871064_False() {}

    function SHOW_ALERT_onRowClick_ca1a45c4e040437984788ee398871064_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onRowClick_ca1a45c4e040437984788ee398871064_True()
        } else {
            SHOW_ALERT_onRowClick_ca1a45c4e040437984788ee398871064_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": " 284-123-1234",
        "alertHandler": SHOW_ALERT_onRowClick_ca1a45c4e040437984788ee398871064_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}