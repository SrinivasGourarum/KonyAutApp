function AS_FlexContainer_c40836f55bba449cb6896b1244bf8e88(eventobject) {
    function SHOW_ALERT__16fe3af2827745879fcc6e81133c82e2_True() {}

    function SHOW_ALERT__16fe3af2827745879fcc6e81133c82e2_False() {}

    function SHOW_ALERT__16fe3af2827745879fcc6e81133c82e2_Callback(response) {
        if (response === true) {
            SHOW_ALERT__16fe3af2827745879fcc6e81133c82e2_True();
        } else {
            SHOW_ALERT__16fe3af2827745879fcc6e81133c82e2_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": "284-123-1234",
        "alertHandler": SHOW_ALERT__16fe3af2827745879fcc6e81133c82e2_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}