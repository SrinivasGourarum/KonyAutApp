function AS_Button_469dcd8dd46d4009b740c2c79340854d(eventobject) {
    function SHOW_ALERT_onClick_7d4b15b4682940f6beece24c0f978822_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_onClick_7d4b15b4682940f6beece24c0f978822_False() {}

    function SHOW_ALERT_onClick_7d4b15b4682940f6beece24c0f978822_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onClick_7d4b15b4682940f6beece24c0f978822_True()
        } else {
            SHOW_ALERT_onClick_7d4b15b4682940f6beece24c0f978822_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT_onClick_7d4b15b4682940f6beece24c0f978822_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}