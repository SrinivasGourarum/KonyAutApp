function AS_Button_3cc1f62c348c4eb587f3f9e626f38f60(eventobject) {
    function SHOW_ALERT_ide_onClick_2b3db848b7134174980e597c657f1f21_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_ide_onClick_2b3db848b7134174980e597c657f1f21_False() {}

    function SHOW_ALERT_ide_onClick_2b3db848b7134174980e597c657f1f21_Callback(response) {
        if (response === true) {
            SHOW_ALERT_ide_onClick_2b3db848b7134174980e597c657f1f21_True();
        } else {
            SHOW_ALERT_ide_onClick_2b3db848b7134174980e597c657f1f21_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT_ide_onClick_2b3db848b7134174980e597c657f1f21_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}