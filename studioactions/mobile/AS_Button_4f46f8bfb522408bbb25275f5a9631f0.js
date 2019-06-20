function AS_Button_4f46f8bfb522408bbb25275f5a9631f0(eventobject) {
    function SHOW_ALERT_ide_onClick_0642fd4e00934fdbb7ff9b28a6043041_True() {
        frmDepositPayLandingKA.show();
    }

    function SHOW_ALERT_ide_onClick_0642fd4e00934fdbb7ff9b28a6043041_False() {}

    function SHOW_ALERT_ide_onClick_0642fd4e00934fdbb7ff9b28a6043041_Callback(response) {
        if (response == true) {
            SHOW_ALERT_ide_onClick_0642fd4e00934fdbb7ff9b28a6043041_True()
        } else {
            SHOW_ALERT_ide_onClick_0642fd4e00934fdbb7ff9b28a6043041_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Delete Pending Transaction?",
        "yesLabel": "Yes",
        "noLabel": "Cancel",
        "message": "Are you sure you want to delete this Pending transaction?",
        "alertHandler": SHOW_ALERT_ide_onClick_0642fd4e00934fdbb7ff9b28a6043041_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}