function AS_Button_c5c18379cf904a5587930d3f2ef93d6f(eventobject) {
    function SHOW_ALERT__844ef5c2311c43a882336f9e856da086_True() {
        frmManageCardsKA.show();
    }

    function SHOW_ALERT__844ef5c2311c43a882336f9e856da086_Callback() {
        SHOW_ALERT__844ef5c2311c43a882336f9e856da086_True();
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Confirmation ",
        "yesLabel": "OK",
        "message": "Request for replacement is confirmed. We will get back to you in 5 working days",
        "alertHandler": SHOW_ALERT__844ef5c2311c43a882336f9e856da086_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}