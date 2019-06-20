function AS_Button_583a41540ce245a7a7b444b732c67faa(eventobject) {
    function SHOW_ALERT_onClick_30fd5c498f314f50b0d1d64cb31f60d5_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_onClick_30fd5c498f314f50b0d1d64cb31f60d5_False() {}

    function SHOW_ALERT_onClick_30fd5c498f314f50b0d1d64cb31f60d5_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onClick_30fd5c498f314f50b0d1d64cb31f60d5_True()
        } else {
            SHOW_ALERT_onClick_30fd5c498f314f50b0d1d64cb31f60d5_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT_onClick_30fd5c498f314f50b0d1d64cb31f60d5_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}