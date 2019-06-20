function AS_Button_7704ef2413594df0a30a1120cc5b04ce(eventobject) {
    function SHOW_ALERT__62a805a8eee544b09665e4687b51ae25_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT__62a805a8eee544b09665e4687b51ae25_False() {}

    function SHOW_ALERT__62a805a8eee544b09665e4687b51ae25_Callback(response) {
        if (response === true) {
            SHOW_ALERT__62a805a8eee544b09665e4687b51ae25_True();
        } else {
            SHOW_ALERT__62a805a8eee544b09665e4687b51ae25_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT__62a805a8eee544b09665e4687b51ae25_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}