function AS_Button_41b26932a03448b286ef1ca3ef7d2b30(eventobject) {
    function SHOW_ALERT__e52a99dcaffc45a79653bdb9e2be0596_True() {
        frmManageCardsKA.show();
    }

    function SHOW_ALERT__e52a99dcaffc45a79653bdb9e2be0596_Callback() {
        SHOW_ALERT__e52a99dcaffc45a79653bdb9e2be0596_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Confirmation ",
        "yesLabel": "OK",
        "message": "Request for PIN change is confirmed. Please check your mail for New PIN.",
        "alertHandler": SHOW_ALERT__e52a99dcaffc45a79653bdb9e2be0596_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}