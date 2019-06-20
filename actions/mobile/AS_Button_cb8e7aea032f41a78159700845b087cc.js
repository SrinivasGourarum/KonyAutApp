function AS_Button_cb8e7aea032f41a78159700845b087cc(eventobject) {
    function SHOW_ALERT_ide_onClick_54c8f511b2794ca69479989209356188_True() {
        frmManageCardsKA.show();
    }

    function SHOW_ALERT_ide_onClick_54c8f511b2794ca69479989209356188_Callback() {
        SHOW_ALERT_ide_onClick_54c8f511b2794ca69479989209356188_True();
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Confirmation ",
        "yesLabel": "OK",
        "message": "Request for PIN change is confirmed. Please check your mail for New PIN.",
        "alertHandler": SHOW_ALERT_ide_onClick_54c8f511b2794ca69479989209356188_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}