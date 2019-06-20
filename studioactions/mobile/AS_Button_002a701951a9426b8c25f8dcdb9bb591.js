function AS_Button_002a701951a9426b8c25f8dcdb9bb591(eventobject) {
    function SHOW_ALERT_onClick_980eb04de8e540a999dfa9e33d5eed35_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_onClick_980eb04de8e540a999dfa9e33d5eed35_False() {}

    function SHOW_ALERT_onClick_980eb04de8e540a999dfa9e33d5eed35_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onClick_980eb04de8e540a999dfa9e33d5eed35_True()
        } else {
            SHOW_ALERT_onClick_980eb04de8e540a999dfa9e33d5eed35_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT_onClick_980eb04de8e540a999dfa9e33d5eed35_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}