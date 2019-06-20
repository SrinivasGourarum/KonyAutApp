function AS_Button_00dd8e3e6f224929a097dcbcadc6dffb(eventobject) {
    function SHOW_ALERT_ide_onClick_80802d3970824a999db4358d7d9d2ac1_True() {
        frmDepositPayLandingKA.show();
    }

    function SHOW_ALERT_ide_onClick_80802d3970824a999db4358d7d9d2ac1_False() {}

    function SHOW_ALERT_ide_onClick_80802d3970824a999db4358d7d9d2ac1_Callback(response) {
        if (response == true) {
            SHOW_ALERT_ide_onClick_80802d3970824a999db4358d7d9d2ac1_True()
        } else {
            SHOW_ALERT_ide_onClick_80802d3970824a999db4358d7d9d2ac1_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Delete Scheduled Transaction?",
        "yesLabel": "Yes",
        "noLabel": "Cancel",
        "message": "Are you sure you want to delete this scheduled transaction?",
        "alertHandler": SHOW_ALERT_ide_onClick_80802d3970824a999db4358d7d9d2ac1_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}