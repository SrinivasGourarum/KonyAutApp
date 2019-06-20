function AS_Button_1da1a29555fb41b4b3fcc0c936e69b1d(eventobject) {
    function SHOW_ALERT__bcef109388e941e0a306d3209ee21a36_True() {
        frmManageCardsKA.show();
    }

    function SHOW_ALERT__bcef109388e941e0a306d3209ee21a36_Callback() {
        SHOW_ALERT__bcef109388e941e0a306d3209ee21a36_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Confirmation ",
        "yesLabel": "OK",
        "message": "Report for Lost card is confirmed. Please check your mail.",
        "alertHandler": SHOW_ALERT__bcef109388e941e0a306d3209ee21a36_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}