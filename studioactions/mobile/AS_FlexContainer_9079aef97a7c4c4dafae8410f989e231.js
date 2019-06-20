function AS_FlexContainer_9079aef97a7c4c4dafae8410f989e231(eventobject) {
    function SHOW_ALERT_onClick_7f589c25fa1d4689aa466c27d348ebea_True() {}

    function SHOW_ALERT_onClick_7f589c25fa1d4689aa466c27d348ebea_False() {}

    function SHOW_ALERT_onClick_7f589c25fa1d4689aa466c27d348ebea_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onClick_7f589c25fa1d4689aa466c27d348ebea_True()
        } else {
            SHOW_ALERT_onClick_7f589c25fa1d4689aa466c27d348ebea_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": "284-123-1234",
        "alertHandler": SHOW_ALERT_onClick_7f589c25fa1d4689aa466c27d348ebea_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}