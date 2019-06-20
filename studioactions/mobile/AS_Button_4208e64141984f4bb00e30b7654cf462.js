function AS_Button_4208e64141984f4bb00e30b7654cf462(eventobject) {
    function SHOW_ALERT_ide_onClick_16e2cf7077c44c51bfc0c2b6e038b665_True() {
        frmManageCardsKA.show();
    }

    function SHOW_ALERT_ide_onClick_16e2cf7077c44c51bfc0c2b6e038b665_Callback() {
        SHOW_ALERT_ide_onClick_16e2cf7077c44c51bfc0c2b6e038b665_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Confirmation ",
        "yesLabel": "OK",
        "message": "Request for PIN change is confirmed. Please check your mail for New PIN.",
        "alertHandler": SHOW_ALERT_ide_onClick_16e2cf7077c44c51bfc0c2b6e038b665_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}