function AS_Button_12e95983c2b04e12bb9d0bf9d4011bd8(eventobject) {
    function SHOW_ALERT__18f34cace5dd45ea9232c23ca0a8e04e_True() {
        frmTransferPayLandingKA.show();
    }

    function SHOW_ALERT__18f34cace5dd45ea9232c23ca0a8e04e_False() {}

    function SHOW_ALERT__18f34cace5dd45ea9232c23ca0a8e04e_Callback(response) {
        if (response == true) {
            SHOW_ALERT__18f34cace5dd45ea9232c23ca0a8e04e_True()
        } else {
            SHOW_ALERT__18f34cace5dd45ea9232c23ca0a8e04e_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Delete Scheduled Transaction?",
        "yesLabel": "Yes",
        "noLabel": "Cancel",
        "message": "Are you sure you want to delete this scheduled transaction?",
        "alertHandler": SHOW_ALERT__18f34cace5dd45ea9232c23ca0a8e04e_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}