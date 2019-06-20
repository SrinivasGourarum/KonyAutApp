function AS_Button_29f714f3dce14ec9bf5b21cd60131180(eventobject) {
    function SHOW_ALERT_ide_onClick_e307786141284f5a8c39b7097a9ef136_True() {
        frmManageCardsKA.show();
    }

    function SHOW_ALERT_ide_onClick_e307786141284f5a8c39b7097a9ef136_Callback() {
        SHOW_ALERT_ide_onClick_e307786141284f5a8c39b7097a9ef136_True();
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Confirmation ",
        "yesLabel": "OK",
        "message": "Request for PIN change is confirmed. Please check your mail for New PIN.",
        "alertHandler": SHOW_ALERT_ide_onClick_e307786141284f5a8c39b7097a9ef136_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}