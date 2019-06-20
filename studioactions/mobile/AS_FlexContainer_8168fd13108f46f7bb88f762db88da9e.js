function AS_FlexContainer_8168fd13108f46f7bb88f762db88da9e(eventobject) {
    function SHOW_ALERT_ide_onClick_33cbc2803a424016b22802d317c21d9a_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_ide_onClick_33cbc2803a424016b22802d317c21d9a_False() {}

    function SHOW_ALERT_ide_onClick_33cbc2803a424016b22802d317c21d9a_Callback(response) {
        if (response == true) {
            SHOW_ALERT_ide_onClick_33cbc2803a424016b22802d317c21d9a_True()
        } else {
            SHOW_ALERT_ide_onClick_33cbc2803a424016b22802d317c21d9a_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT_ide_onClick_33cbc2803a424016b22802d317c21d9a_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}