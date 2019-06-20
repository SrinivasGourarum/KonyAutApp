function AS_Button_a1a39331c6364705a3ce2846713770b5(eventobject) {
    function SHOW_ALERT_onClick_e2a8f3e06c314a699cd5a3a3a8385e4d_True() {
        depositCancel();
    }

    function SHOW_ALERT_onClick_e2a8f3e06c314a699cd5a3a3a8385e4d_False() {}

    function SHOW_ALERT_onClick_e2a8f3e06c314a699cd5a3a3a8385e4d_Callback(response) {
        if (response === true) {
            SHOW_ALERT_onClick_e2a8f3e06c314a699cd5a3a3a8385e4d_True();
        } else {
            SHOW_ALERT_onClick_e2a8f3e06c314a699cd5a3a3a8385e4d_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Cancel Deposit?",
        "yesLabel": "Yes",
        "noLabel": "No",
        "message": "Are you sure you want cancel this deposit?",
        "alertHandler": SHOW_ALERT_onClick_e2a8f3e06c314a699cd5a3a3a8385e4d_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}