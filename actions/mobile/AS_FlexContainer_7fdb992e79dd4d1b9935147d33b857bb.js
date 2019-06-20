function AS_FlexContainer_7fdb992e79dd4d1b9935147d33b857bb(eventobject) {
    function SHOW_ALERT__342ed5a5d1144bcc889afd3570300299_True() {}

    function SHOW_ALERT__342ed5a5d1144bcc889afd3570300299_False() {}

    function SHOW_ALERT__342ed5a5d1144bcc889afd3570300299_Callback(response) {
        if (response === true) {
            SHOW_ALERT__342ed5a5d1144bcc889afd3570300299_True();
        } else {
            SHOW_ALERT__342ed5a5d1144bcc889afd3570300299_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": "284-123-1234",
        "alertHandler": SHOW_ALERT__342ed5a5d1144bcc889afd3570300299_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}