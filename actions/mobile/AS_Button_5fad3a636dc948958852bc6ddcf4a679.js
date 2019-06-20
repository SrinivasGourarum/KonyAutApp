function AS_Button_5fad3a636dc948958852bc6ddcf4a679(eventobject) {
    function SHOW_ALERT_ide_onClick_90914646fbf343c7b81e4386b9fcaa5d_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_ide_onClick_90914646fbf343c7b81e4386b9fcaa5d_False() {}

    function SHOW_ALERT_ide_onClick_90914646fbf343c7b81e4386b9fcaa5d_Callback(response) {
        if (response === true) {
            SHOW_ALERT_ide_onClick_90914646fbf343c7b81e4386b9fcaa5d_True();
        } else {
            SHOW_ALERT_ide_onClick_90914646fbf343c7b81e4386b9fcaa5d_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT_ide_onClick_90914646fbf343c7b81e4386b9fcaa5d_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}