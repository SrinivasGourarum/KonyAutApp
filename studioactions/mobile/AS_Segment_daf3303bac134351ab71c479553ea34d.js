function AS_Segment_daf3303bac134351ab71c479553ea34d() {
    function SHOW_ALERT_onRowClick_07b348a757c64a9fbf7a1c225a962cc5_True() {}

    function SHOW_ALERT_onRowClick_07b348a757c64a9fbf7a1c225a962cc5_False() {}

    function SHOW_ALERT_onRowClick_07b348a757c64a9fbf7a1c225a962cc5_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onRowClick_07b348a757c64a9fbf7a1c225a962cc5_True()
        } else {
            SHOW_ALERT_onRowClick_07b348a757c64a9fbf7a1c225a962cc5_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": " 284-123-1234",
        "alertHandler": SHOW_ALERT_onRowClick_07b348a757c64a9fbf7a1c225a962cc5_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}