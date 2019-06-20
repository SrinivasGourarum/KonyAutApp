function AS_FlexContainer_f5e7ea70149542b38c10f38cb1a073ec(eventobject) {
    function SHOW_ALERT_onClick_2330d68352f14955935f5e69c26eb61b_True() {}

    function SHOW_ALERT_onClick_2330d68352f14955935f5e69c26eb61b_False() {}

    function SHOW_ALERT_onClick_2330d68352f14955935f5e69c26eb61b_Callback(response) {
        if (response === true) {
            SHOW_ALERT_onClick_2330d68352f14955935f5e69c26eb61b_True();
        } else {
            SHOW_ALERT_onClick_2330d68352f14955935f5e69c26eb61b_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": "284-123-1234",
        "alertHandler": SHOW_ALERT_onClick_2330d68352f14955935f5e69c26eb61b_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}