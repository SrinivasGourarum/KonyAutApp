function AS_Button_cd5f7943c15341cd8be65e5b7d212260(eventobject) {
    function SHOW_ALERT_onClick_45875596f0074e8a8ed7487c91f990e7_True() {
        closeAndroidNav();
        frmLoginKA.show();
    }

    function SHOW_ALERT_onClick_45875596f0074e8a8ed7487c91f990e7_False() {}

    function SHOW_ALERT_onClick_45875596f0074e8a8ed7487c91f990e7_Callback(response) {
        if (response === true) {
            SHOW_ALERT_onClick_45875596f0074e8a8ed7487c91f990e7_True();
        } else {
            SHOW_ALERT_onClick_45875596f0074e8a8ed7487c91f990e7_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT_onClick_45875596f0074e8a8ed7487c91f990e7_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}