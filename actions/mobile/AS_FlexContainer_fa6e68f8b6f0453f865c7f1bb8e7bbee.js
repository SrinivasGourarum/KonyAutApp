function AS_FlexContainer_fa6e68f8b6f0453f865c7f1bb8e7bbee(eventobject) {
    function SHOW_ALERT_onClick_eda09af87a3a43eeb39c123c4702708e_True() {}

    function SHOW_ALERT_onClick_eda09af87a3a43eeb39c123c4702708e_False() {}

    function SHOW_ALERT_onClick_eda09af87a3a43eeb39c123c4702708e_Callback(response) {
        if (response === true) {
            SHOW_ALERT_onClick_eda09af87a3a43eeb39c123c4702708e_True();
        } else {
            SHOW_ALERT_onClick_eda09af87a3a43eeb39c123c4702708e_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": "284-123-1234",
        "alertHandler": SHOW_ALERT_onClick_eda09af87a3a43eeb39c123c4702708e_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}