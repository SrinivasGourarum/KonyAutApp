function AS_Segment_ca8baf023f31477fb16937c1f145c076() {
    function SHOW_ALERT_onRowClick_367b571aa05c43c193a1271b4f2bd3eb_True() {}

    function SHOW_ALERT_onRowClick_367b571aa05c43c193a1271b4f2bd3eb_False() {}

    function SHOW_ALERT_onRowClick_367b571aa05c43c193a1271b4f2bd3eb_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onRowClick_367b571aa05c43c193a1271b4f2bd3eb_True()
        } else {
            SHOW_ALERT_onRowClick_367b571aa05c43c193a1271b4f2bd3eb_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": " 284-123-1234",
        "alertHandler": SHOW_ALERT_onRowClick_367b571aa05c43c193a1271b4f2bd3eb_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}